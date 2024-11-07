---
sidebar_position: 2
---

# How We Started with This Project

My intention is not to provide a detailed context on how this project was conceived, but rather to give a brief explanation to set the scene.

I was assigned to work on a final degree thesis about using AI to enhance glaucoma detection. It is known that there have been many studies and surveys on how to use Convolutional Neural Networks (CNNs) to detect glaucoma from retinography images. Therefore, the aim of my tutors was to investigate better and more efficient ways to detect this eye disease.

After some discussions and further research on this matter, the idea of using Large Language Models (LLMs) came to mind to see if they could be more accurate than current CNNs in detecting glaucoma. I know what you might be thinking—that this approach might not be accurate enough since LLMs might not be properly trained for this task—but let me explain. The idea of using an LLM stems from the consideration that LLMs could leverage the connections of several neural networks to produce results and generate a more accurate diagnosis, rather than relying on just one specialized CNN.

I conducted some tests with the Plus version of ChatGPT-4o (using a detailed prompt to have it act as an ophthalmology expert, which I detail below), and I must say that the results were highly accurate. In fact, it provided explanations and detailed insights on what to focus on to determine whether the retinography of a certain eye indicates glaucoma. Given this context, I started thinking of a way to connect a detailed CNN and a Vision Transformer (ViT)—leveraging their accuracy—with further explanations provided by an LLM similar to ChatGPT-4 but free to use. This is because ChatGPT uses tokens within its API, making it somewhat costly to develop a dedicated application using its API.

The prompt I used was the following:

> **Prompt:**
> 
> *I am a virtual ophthalmologist specializing in retinal health. I have a retinal image (retinography) that I want to analyze to determine if the patient shows signs of glaucoma or if it is a healthy eye. The retinography shows the optic disc and blood vessels.*
> 
> **Characteristics to Identify:**
> 
> **Suggestive of Glaucoma:**
> 
> - **Cup-to-Disc Ratio (C/D ratio):** If the cup diameter is large in relation to the disc (C/D ratio > 0.6), it may indicate glaucoma.
> - **Asymmetry between Eyes:** Significant differences in the C/D ratio between both eyes can be a risk sign.
> - **Attenuation or Displacement of Blood Vessels:** Blood vessels that are displaced or thinned at the edge of the optic disc are characteristic of advanced glaucoma.
> - **Peripapillary Hemorrhages:** Small hemorrhages on the margins of the optic disc may indicate glaucomatous damage.
> - **Changes in the Shape or Edge of the Optic Disc:** Irregularities or a deeper-than-normal excavation at the edge of the optic disc.
> 
> **Indicative of a Healthy Eye:**
> 
> - **Normal Cup-to-Disc Ratio:** A C/D ratio < 0.5 is generally considered normal.
> - **Symmetry between Both Eyes:** Similar cup-to-disc ratios in both eyes reduce the likelihood of glaucoma.
> - **Well-Positioned Blood Vessels:** No displacement or thinning at the edge of the optic disc.
> - **Absence of Peripapillary Hemorrhages:** No hemorrhages are observed on the margins of the optic disc.
> - **Regular Optic Disc Edge:** Sharp edge and normal shape without excessive excavation.
> 
> **Final Evaluation:**
> 
> Provide a conclusion as to whether the retinography shows signs compatible with glaucoma, indicating the estimated probability and the parameters on which you base your assessment. If the probability is low, state directly that the image does not present glaucoma due to the low estimated percentage.

While researching, I came across news about a hospital in China that is entirely operated by AI. This hospital can diagnose diseases and treat up to 3,000 patients a day without human intervention. This inspired me to think: why not try to create something similar but with a high accuracy rate, specifically focused on glaucoma, and being a complete expert on the matter? And so, this is the path I will be paving in this full study.

[Read more about the AI-operated hospital here.](https://www.elespanol.com/omicrono/tecnologia/20240604/china-abre-primer-hospital-ia-mundo-puede-diagnosticar-enfermedades-tratar-pacientes-dia/860413996_0.html)