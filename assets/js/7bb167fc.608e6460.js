"use strict";(self.webpackChunkmy_tfg_logbook=self.webpackChunkmy_tfg_logbook||[]).push([[6139],{3594:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var n=t(5067),a=t(4848),o=t(8453);const s={slug:"using-github-marketplace-for-glaucoma-diagnostics",title:"Exploring Medical Diagnostic LLMs: A Comprehensive Guide to Using GitHub's Model Marketplace for Glaucoma Detection in Retinographies",authors:["edujbarrios"],tags:["LLMs","GitHub Marketplace","medical imaging","retinography","glaucoma detection","AI","fine-tuning"]},r=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Step-by-Step Guide to Using GitHub Model Marketplace",id:"step-by-step-guide-to-using-github-model-marketplace",level:2},{value:"Step 1: Finding a Model in the Marketplace",id:"step-1-finding-a-model-in-the-marketplace",level:3},{value:"Step 2: Setting Up Your Environment",id:"step-2-setting-up-your-environment",level:3},{value:"Step 3: Loading and Testing the Model",id:"step-3-loading-and-testing-the-model",level:3},{value:"Step 4: Setting a Role-Specific Prompt",id:"step-4-setting-a-role-specific-prompt",level:3},{value:"Step 5: Evaluating Model Performance",id:"step-5-evaluating-model-performance",level:3},{value:"Potential for Fine-Tuning",id:"potential-for-fine-tuning",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Artificial intelligence (AI) is rapidly evolving in the field of medical diagnostics, particularly with the support of ",(0,a.jsx)(i.strong,{children:"large language models (LLMs)"})," trained to interpret medical images. By utilizing models available on the ",(0,a.jsx)(i.strong,{children:"GitHub Model Marketplace"}),", professionals and developers can test various LLMs on specific tasks, such as analyzing retinographies to detect signs of glaucoma. This guide walks you through setting up a medical diagnostic model from GitHub\u2019s Marketplace to evaluate its performance on glaucoma detection."]}),"\n",(0,a.jsxs)(i.p,{children:["Additionally, we discuss how these steps can lay the groundwork for potential ",(0,a.jsx)(i.strong,{children:"fine-tuning"}),", allowing models to be further optimized for even higher accuracy in specific diagnostic contexts."]}),"\n","\n",(0,a.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(i.p,{children:["As healthcare progresses, the role of AI in diagnostics\u2014especially in ",(0,a.jsx)(i.strong,{children:"medical imaging"}),"\u2014is becoming indispensable. With access to models that can analyze retinographies, healthcare providers have new tools that complement their expertise, enhancing accuracy and response times."]}),"\n",(0,a.jsxs)(i.p,{children:["GitHub's Model Marketplace offers a broad selection of pre-trained LLMs, including models fine-tuned for medical diagnostics. These models can be evaluated on specific tasks to understand their effectiveness in real-world medical applications and explore where future ",(0,a.jsx)(i.strong,{children:"fine-tuning"})," could provide further enhancements."]}),"\n",(0,a.jsx)(i.h2,{id:"step-by-step-guide-to-using-github-model-marketplace",children:"Step-by-Step Guide to Using GitHub Model Marketplace"}),"\n",(0,a.jsx)(i.p,{children:"The GitHub Model Marketplace provides access to a variety of models tailored for different diagnostic tasks. In this guide, we\u2019ll demonstrate how to use these models to analyze a retinography and assess their diagnostic capabilities for glaucoma detection."}),"\n",(0,a.jsx)(i.h3,{id:"step-1-finding-a-model-in-the-marketplace",children:"Step 1: Finding a Model in the Marketplace"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Go to the ",(0,a.jsx)(i.strong,{children:"GitHub Model Marketplace"})," and search for relevant medical diagnostic models, such as those trained on retinography analysis."]}),"\n",(0,a.jsx)(i.li,{children:"Select a model that suits your diagnostic needs. Review model descriptions to ensure it has been fine-tuned on medical imaging data specific to retinal images, which is essential for reliable results."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"This first step allows you to choose a model that is already partially prepared for diagnostic tasks in ophthalmology, although these models may benefit from additional fine-tuning in the future for even more accurate results."}),"\n",(0,a.jsx)(i.h3,{id:"step-2-setting-up-your-environment",children:"Step 2: Setting Up Your Environment"}),"\n",(0,a.jsxs)(i.p,{children:["To get started, make sure you have the necessary libraries installed, such as ",(0,a.jsx)(i.code,{children:"torch"}),", ",(0,a.jsx)(i.code,{children:"transformers"}),", and ",(0,a.jsx)(i.code,{children:"PIL"})," for image processing. You can install them using:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"pip install torch transformers pillow\n"})}),"\n",(0,a.jsx)(i.p,{children:"Setting up a consistent environment ensures reproducibility and allows for seamless testing across multiple models."}),"\n",(0,a.jsx)(i.h3,{id:"step-3-loading-and-testing-the-model",children:"Step 3: Loading and Testing the Model"}),"\n",(0,a.jsx)(i.p,{children:"The next step is to load the chosen model from the GitHub Model Marketplace and apply it to a retinography image:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-python",children:'from transformers import AutoModelForImageClassification, AutoFeatureExtractor\nfrom PIL import Image\nimport torch\n\n# Load model from GitHub Model Marketplace\nmodel_name = "your-chosen-model"  # Replace with the model ID from the marketplace\nmodel = AutoModelForImageClassification.from_pretrained(model_name)\nfeature_extractor = AutoFeatureExtractor.from_pretrained(model_name)\n\n# Load a retinography image\nimage = Image.open("path_to_retinography_image.jpg")\ninputs = feature_extractor(images=image, return_tensors="pt")\n\n# Make predictions\nwith torch.no_grad():\n    outputs = model(**inputs)\n    predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)\n    print("Prediction results:", predictions)\n'})}),"\n",(0,a.jsx)(i.p,{children:"This step allows you to assess the model's baseline performance, which could be refined with future fine-tuning tailored to glaucoma detection."}),"\n",(0,a.jsx)(i.h3,{id:"step-4-setting-a-role-specific-prompt",children:"Step 4: Setting a Role-Specific Prompt"}),"\n",(0,a.jsxs)(i.p,{children:["For a more accurate assessment, defining a specific role that aligns with the diagnostic goal can direct the model\u2019s focus. In this case, we\u2019ll assume the role of an ",(0,a.jsx)(i.strong,{children:"ophthalmologist focusing on glaucoma detection"}),":"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Adjust the input prompt or model configuration to specify: ",(0,a.jsx)(i.strong,{children:'"As an ophthalmologist specializing in glaucoma detection, analyze this retinography for signs of glaucoma. Pay special attention to optic nerve cupping, retinal nerve fiber layer thinning, and characteristic glaucomatous changes that could indicate early-stage or advanced glaucoma."'})]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"This prompt introduces role-specific expertise, helping the model prioritize clinically relevant features for glaucoma, such as optic nerve health and retinal changes."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-python",children:'# Example prompt setting (if supported by the model or input setup)\nprompt = "As an ophthalmologist specializing in glaucoma detection, assess this retinography for optic nerve cupping, retinal thinning, and glaucomatous changes."\n# Adjust model inputs or preprocessing as required by the model\'s API.\n'})}),"\n",(0,a.jsx)(i.p,{children:"This step not only adds clarity to the model\u2019s task but also opens up the possibility of fine-tuning. By collecting results from multiple cases, you can refine prompts and data inputs for better outcomes, especially for highly specific diagnostic tasks."}),"\n",(0,a.jsx)(i.h3,{id:"step-5-evaluating-model-performance",children:"Step 5: Evaluating Model Performance"}),"\n",(0,a.jsxs)(i.p,{children:["Once you have the model configured, evaluate its performance with metrics like ",(0,a.jsx)(i.strong,{children:"accuracy"}),", ",(0,a.jsx)(i.strong,{children:"sensitivity"}),", and ",(0,a.jsx)(i.strong,{children:"specificity"})," to determine its effectiveness in detecting glaucoma."]}),"\n",(0,a.jsx)(i.h3,{id:"potential-for-fine-tuning",children:"Potential for Fine-Tuning"}),"\n",(0,a.jsxs)(i.p,{children:["With diagnostic tasks as specialized as glaucoma detection, there is significant potential for ",(0,a.jsx)(i.strong,{children:"fine-tuning"}),". Fine-tuning involves training the model on a dataset specifically curated for glaucoma or other ophthalmologic conditions, allowing it to learn patterns and markers associated with these diseases in detail."]}),"\n",(0,a.jsxs)(i.p,{children:["By fine-tuning on a large dataset of labeled retinographies, for instance, the model can learn nuanced patterns that may indicate early-stage glaucoma. Fine-tuning could be conducted with frameworks such as ",(0,a.jsx)(i.strong,{children:"PyTorch"})," or ",(0,a.jsx)(i.strong,{children:"TensorFlow"}),", and would require a labeled dataset of glaucoma-positive and negative cases for best results."]}),"\n",(0,a.jsx)(i.p,{children:"Fine-tuning steps could involve:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-python",children:'from transformers import Trainer, TrainingArguments\n\n# Training parameters\ntraining_args = TrainingArguments(\n    output_dir="./results",\n    num_train_epochs=3,\n    per_device_train_batch_size=8,\n    logging_dir="./logs",\n)\n\n# Set up Trainer with the labeled retinography dataset\ntrainer = Trainer(\n    model=model,\n    args=training_args,\n    train_dataset=glaucoma_dataset,  # replace with your glaucoma-specific dataset\n)\n\ntrainer.train()\n'})}),"\n",(0,a.jsx)(i.p,{children:"This added step not only enhances diagnostic accuracy but also customizes the model for specific needs in glaucoma detection, potentially aiding in the early diagnosis of this sight-threatening condition."}),"\n",(0,a.jsx)(i.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Data Preparation"}),": Ensure the input images are high quality and properly preprocessed for optimal accuracy."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Prompt Customization"}),": Tailor prompts to emphasize specific indicators of glaucoma in retinography images."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Performance Metrics"}),": Use relevant metrics like ",(0,a.jsx)(i.strong,{children:"accuracy"}),", ",(0,a.jsx)(i.strong,{children:"sensitivity"}),", and ",(0,a.jsx)(i.strong,{children:"specificity"})," to assess model reliability in detecting glaucoma."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Iterative Fine-Tuning"}),": As more labeled data becomes available, consider additional rounds of fine-tuning for increased diagnostic precision."]}),"\n"]}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsx)(i.p,{children:"Utilizing GitHub's Model Marketplace lets you experiment with a variety of models, helping you find the most effective options for specific diagnostic tasks, such as glaucoma detection."})}),"\n",(0,a.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(i.p,{children:"Testing LLMs from the GitHub Model Marketplace allows healthcare providers and AI developers to explore state-of-the-art models in medical diagnostics. With easy access to these tools, professionals can enhance diagnostic precision, adding valuable support to traditional medical practices. Fine-tuning opportunities also mean these models can be continually improved, offering the potential for ongoing advancements in glaucoma detection and beyond."}),"\n",(0,a.jsx)(i.hr,{})]})}function g(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var n=t(6540);const a={},o=n.createContext(a);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:i},e.children)}},5067:e=>{e.exports=JSON.parse('{"permalink":"/My-TFG-Logbook/blog/using-github-marketplace-for-glaucoma-diagnostics","source":"@site/blog/github_marketplace_glaucoma_diagnostics_guide_expanded.mdx","title":"Exploring Medical Diagnostic LLMs: A Comprehensive Guide to Using GitHub\'s Model Marketplace for Glaucoma Detection in Retinographies","description":"Artificial intelligence (AI) is rapidly evolving in the field of medical diagnostics, particularly with the support of large language models (LLMs) trained to interpret medical images. By utilizing models available on the GitHub Model Marketplace, professionals and developers can test various LLMs on specific tasks, such as analyzing retinographies to detect signs of glaucoma. This guide walks you through setting up a medical diagnostic model from GitHub\u2019s Marketplace to evaluate its performance on glaucoma detection.","date":"2024-11-10T20:39:32.000Z","tags":[{"inline":true,"label":"LLMs","permalink":"/My-TFG-Logbook/blog/tags/ll-ms"},{"inline":true,"label":"GitHub Marketplace","permalink":"/My-TFG-Logbook/blog/tags/git-hub-marketplace"},{"inline":true,"label":"medical imaging","permalink":"/My-TFG-Logbook/blog/tags/medical-imaging"},{"inline":true,"label":"retinography","permalink":"/My-TFG-Logbook/blog/tags/retinography"},{"inline":true,"label":"glaucoma detection","permalink":"/My-TFG-Logbook/blog/tags/glaucoma-detection"},{"inline":true,"label":"AI","permalink":"/My-TFG-Logbook/blog/tags/ai"},{"inline":true,"label":"fine-tuning","permalink":"/My-TFG-Logbook/blog/tags/fine-tuning"}],"readingTime":5.25,"hasTruncateMarker":true,"authors":[{"name":"Eduardo Jos\xe9 Barrios Garc\xeda","title":"LLM and Neural Networks researcher at Universidad de La Laguna","url":"https://github.com/edujbarrios","page":{"permalink":"/My-TFG-Logbook/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/eyemadmusic","github":"https://github.com/edujbarrios"},"imageURL":"https://github.com/edujbarrios.png","key":"edujbarrios"}],"frontMatter":{"slug":"using-github-marketplace-for-glaucoma-diagnostics","title":"Exploring Medical Diagnostic LLMs: A Comprehensive Guide to Using GitHub\'s Model Marketplace for Glaucoma Detection in Retinographies","authors":["edujbarrios"],"tags":["LLMs","GitHub Marketplace","medical imaging","retinography","glaucoma detection","AI","fine-tuning"]},"unlisted":false,"nextItem":{"title":"Leveraging Neural Networks and Fine-Tuning in Large Language Models: A Synergy for Enhanced AI Capabilities","permalink":"/My-TFG-Logbook/blog/neural-networks-fine-tuning-llms"}}')}}]);