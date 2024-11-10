---
sidebar_position: 1
---

# Testing Fine-Tuning Images by RIM-ONE with Llama 3.2 3B

## Introduction
As a continuation of the documentation, noticing that 'skinGPT4' properly works, I will start to perform a *fine-tuning* of the **Llama 3.2 Vision** model in its 3 billion parameter (3B) version using the **RIM-ONE DL** dataset. RIM-ONE is a database of retinal images created by researchers at the University of La Laguna (ULL), specifically designed for retina analysis in glaucoma detection. This dataset includes images captured in several Spanish hospitals and is divided into different classes for healthy and glaucoma-diagnosed eyes.

_**Note: The decision to use the 3B parameter version is because it is a lightweight version and can be tested even on Google Colab.**_

## Setting Up the Environment in Google Colab

1. **Upload Dataset to Google Drive**: 
   - Organize the images in Google Drive into a specific folder structure:
     ```
     partitioned_by_hospital/
     └── training_set/
         ├── normal/
         └── glaucoma/
     ```

2. **Mount Google Drive**:
   - Use the following code to mount Google Drive and load the dataset into a Pandas `DataFrame`:
     ```python
     from google.colab import drive
     import os
     import pandas as pd

     drive.mount('/content/drive')

     base_path = '/content/drive/MyDrive/partitioned_by_hospital/training_set'
     image_paths = []
     labels = []

     # Load all images in each category without limits
     for label in ['normal', 'glaucoma']:
         folder_path = os.path.join(base_path, label)
         for image_name in os.listdir(folder_path):
             image_paths.append(os.path.join(folder_path, image_name))
             labels.append(0 if label == 'normal' else 1)

     df = pd.DataFrame({'image_path': image_paths, 'label': labels})
     ```

## Defining the Prompt for the Model
To guide the model in its task, I define a detailed *prompt* that positions it as a "virtual ophthalmologist" capable of identifying signs of glaucoma in the images:

```python
detailed_prompt = '''
I am a virtual ophthalmologist specializing in retinal health. I have a retinal image (retinography) that I want to analyze to determine if the patient shows signs of glaucoma or if it is a healthy eye. The retinography shows the optic disc and blood vessels.
Characteristics to Identify:
Suggestive of Glaucoma:
    - Cup-to-Disc Ratio (C/D ratio): If the cup diameter is large in relation to the disc (C/D ratio > 0.6), it may indicate glaucoma.
    - Asymmetry between Eyes: Significant differences in the C/D ratio between both eyes can be a risk sign.
    - Attenuation or Displacement of Blood Vessels: Blood vessels that are displaced or thinned at the edge of the optic disc are characteristic of advanced glaucoma.
    - Peripapillary Hemorrhages: Small hemorrhages on the margins of the optic disc may indicate glaucomatous damage.
    - Changes in the Shape or Edge of the Optic Disc: Irregularities or a deeper-than-normal excavation at the edge of the optic disc.
Indicative of a Healthy Eye:
    - Normal Cup-to-Disc Ratio: A C/D ratio < 0.5 is generally considered normal.
    - Symmetry between Both Eyes: Similar cup-to-disc ratios in both eyes reduce the likelihood of glaucoma.
    - Well-Positioned Blood Vessels: No displacement or thinning at the edge of the optic disc.
    - Absence of Peripapillary Hemorrhages: No hemorrhages are observed on the margins of the optic disc.
    - Regular Optic Disc Edge: Sharp edge and normal shape without excessive excavation.
Final Evaluation:
Provide a conclusion as to whether the retinography shows signs compatible with glaucoma, indicating the estimated probability and the parameters on which you base your assessment. If the probability is low, state directly that the image does not present glaucoma due to the low estimated percentage.
'''
df['prompt'] = detailed_prompt
```

## Image Preprocessing
Each image is preprocessed to ensure it is compatible with the model:

```python
from torchvision import transforms
from PIL import Image

def preprocess_image(image_path):
    image = Image.open(image_path).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
    ])
    return transform(image).unsqueeze(0)
df['image'] = df['image_path'].apply(preprocess_image)
```

## Configuring the Model and Training
I load the **Llama 3B Vision** model and set up training for Colab Free.

```python
from transformers import LlamaForCausalLM, LlamaTokenizer, Trainer, TrainingArguments

model_name = "meta-llama/Llama-3B-Vision-Instruct"
model = LlamaForCausalLM.from_pretrained(model_name)
tokenizer = LlamaTokenizer.from_pretrained(model_name)

def tokenize_function(examples):
    return tokenizer(examples['prompt'], padding="max_length", truncation=True, max_length=256)

tokenized_dataset = dataset.map(tokenize_function, batched=True)

training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    per_device_train_batch_size=1,
    num_train_epochs=1,
    save_steps=100,
    save_total_limit=2,
    fp16=True,
    logging_dir="./logs",
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset
)

trainer.train()
```

## Testing the Model with a New Image
After *fine-tuning*, I test the model with a new image.

```python
new_image_path = '/content/drive/MyDrive/new_retina_image.jpg'
image_tensor = preprocess_image(new_image_path)

inputs = tokenizer(detailed_prompt, return_tensors="pt")
outputs = model.generate(**inputs)

response = tokenizer.decode(outputs[0], skip_special_tokens=True)
print("Analysis result:", response)
```

## Insights
This section demonstrates how to perform *fine-tuning* on a vision model using a specific dataset like **RIM-ONE DL** and adapt it to detect signs of glaucoma in retinal images. The use of a detailed *prompt* allows the model to respond as a "virtual ophthalmologist," providing an exhaustive analysis based on key glaucoma diagnostic parameters.

In the next pages I will be describing the promising results that this first fine-tune does.

