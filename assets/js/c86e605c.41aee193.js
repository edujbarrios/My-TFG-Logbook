"use strict";(self.webpackChunkmy_tfg_logbook=self.webpackChunkmy_tfg_logbook||[]).push([[7503],{435:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var a=i(75),t=i(4848),o=i(8453);const r={slug:"zero-shot-glaucoma-detection",title:"Revolutionizing Glaucoma Detection with Zero-Shot Learning and Lightweight AI",authors:["edujbarrios"],tags:["Zero-shot learning","CLIP","AI","glaucoma detection","medical imaging","fine-tuning","Python"]},s=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Zero-Shot Learning?",id:"what-is-zero-shot-learning",level:2},{value:"Key Benefits of ZSL in Medical Imaging",id:"key-benefits-of-zsl-in-medical-imaging",level:3},{value:"Why CLIP for Glaucoma Detection?",id:"why-clip-for-glaucoma-detection",level:2},{value:"Advantages of Using CLIP",id:"advantages-of-using-clip",level:3},{value:"Fine-Tuning CLIP for Glaucoma Detection",id:"fine-tuning-clip-for-glaucoma-detection",level:2},{value:"Fine-Tuning Example",id:"fine-tuning-example",level:3}];function g(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["AI has brought transformative advancements to medical imaging diagnostics. Among the emerging techniques, ",(0,t.jsx)(n.strong,{children:"zero-shot learning (ZSL)"})," combined with lightweight, adaptable AI models like ",(0,t.jsx)(n.strong,{children:"CLIP (Contrastive Language\u2013Image Pre-training)"})," is setting new benchmarks. This blog explores how ZSL and CLIP can streamline ",(0,t.jsx)(n.strong,{children:"glaucoma detection"}),", a crucial challenge in ophthalmology, making it accessible even for resource-constrained environments."]}),"\n","\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Early and accurate diagnosis of ",(0,t.jsx)(n.strong,{children:"glaucoma"}),", one of the leading causes of blindness worldwide, remains a significant challenge in ophthalmology. Current diagnostic methods require specialized expertise and equipment, making them inaccessible in many areas. However, innovations in ",(0,t.jsx)(n.strong,{children:"zero-shot learning"})," and lightweight AI models like CLIP offer a new frontier in glaucoma detection, bridging the gap between cutting-edge technology and practical application."]}),"\n",(0,t.jsx)(n.p,{children:"Based on insights from previous research notebooks, this blog delves into how ZSL and CLIP\u2019s lightweight architecture enable affordable, accurate, and accessible diagnostic tools."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-zero-shot-learning",children:"What is Zero-Shot Learning?"}),"\n",(0,t.jsx)(n.p,{children:"Zero-shot learning (ZSL) enables AI models to make predictions for unseen classes or tasks without explicit prior training on those specific categories. In the context of medical imaging, ZSL can revolutionize diagnostics by eliminating the need for extensive annotated datasets for every medical condition."}),"\n",(0,t.jsxs)(n.p,{children:["For example, a ZSL-enabled CLIP model can analyze a retinal image and respond to a prompt like, ",(0,t.jsx)(n.em,{children:'"Identify signs of glaucoma in this image,"'})," even if it has never been explicitly trained on glaucoma-specific datasets."]}),"\n",(0,t.jsx)(n.h3,{id:"key-benefits-of-zsl-in-medical-imaging",children:"Key Benefits of ZSL in Medical Imaging"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Eliminates the Need for Large Datasets"}),": Unlike traditional supervised learning, ZSL requires minimal specific labeled data, reducing the time and cost of model training."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flexible Diagnosis"}),": The ability to interpret natural language prompts makes ZSL adaptable to various medical scenarios."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability"}),": ZSL models can be deployed across different diagnostic tasks without retraining."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Zero-shot learning is particularly suited for conditions with limited labeled datasets, such as rare diseases or early-stage glaucoma."})}),"\n",(0,t.jsx)(n.h2,{id:"why-clip-for-glaucoma-detection",children:"Why CLIP for Glaucoma Detection?"}),"\n",(0,t.jsxs)(n.p,{children:["CLIP\u2019s ability to link text and image embeddings makes it an ideal candidate for ZSL in medical imaging. It\u2019s lightweight, requiring less than ",(0,t.jsx)(n.strong,{children:"1 GB"}),", and runs efficiently on most hardware, including resource-constrained PCs. Unlike other models that depend on external APIs or expensive computational resources, CLIP can operate offline, enabling deployment in remote or under-resourced clinics."]}),"\n",(0,t.jsx)(n.h3,{id:"advantages-of-using-clip",children:"Advantages of Using CLIP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Language-Guided Diagnostics"}),": CLIP can interpret prompts like ",(0,t.jsx)(n.em,{children:'"Does this retinography indicate optic nerve damage?"'})," and return visual features corresponding to the query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Affordable Implementation"}),": By eliminating API dependencies, CLIP reduces operational costs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Broad Compatibility"}),": Its compact architecture allows integration into desktop applications and hospital systems without requiring high-end GPUs."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fine-tuning-clip-for-glaucoma-detection",children:"Fine-Tuning CLIP for Glaucoma Detection"}),"\n",(0,t.jsx)(n.p,{children:"While ZSL enables CLIP to generalize across tasks, fine-tuning the model on domain-specific data improves its performance for tasks like glaucoma detection. This process aligns the model\u2019s text and image embeddings with medical-specific terminology and visual features."}),"\n",(0,t.jsx)(n.h3,{id:"fine-tuning-example",children:"Fine-Tuning Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from transformers import CLIPProcessor, CLIPModel, Trainer, TrainingArguments\n\n# Load pre-trained CLIP model\nmodel = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")\nprocessor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")\n\n# Prepare the dataset\ntrain_dataset = prepare_medical_dataset("retinographies", "glaucoma_labels")\n\n# Training arguments\ntraining_args = TrainingArguments(\n    output_dir="./results",\n    num_train_epochs=5,\n    per_device_train_batch_size=16,\n)\n\n# Fine-tune the model\ntrainer = Trainer(\n    model=model,\n    args=training_args,\n    train_dataset=train_dataset,\n)\n\ntrainer.train()\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var a=i(6540);const t={},o=a.createContext(t);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:n},e.children)}},75:e=>{e.exports=JSON.parse('{"permalink":"/My-TFG-Logbook/blog/zero-shot-glaucoma-detection","source":"@site/blog/zero_shot_learning_as_a_tool_to_enhance_glaucoma_detection.mdx","title":"Revolutionizing Glaucoma Detection with Zero-Shot Learning and Lightweight AI","description":"AI has brought transformative advancements to medical imaging diagnostics. Among the emerging techniques, zero-shot learning (ZSL) combined with lightweight, adaptable AI models like CLIP (Contrastive Language\u2013Image Pre-training) is setting new benchmarks. This blog explores how ZSL and CLIP can streamline glaucoma detection, a crucial challenge in ophthalmology, making it accessible even for resource-constrained environments.","date":"2024-11-25T19:57:52.000Z","tags":[{"inline":true,"label":"Zero-shot learning","permalink":"/My-TFG-Logbook/blog/tags/zero-shot-learning"},{"inline":true,"label":"CLIP","permalink":"/My-TFG-Logbook/blog/tags/clip"},{"inline":true,"label":"AI","permalink":"/My-TFG-Logbook/blog/tags/ai"},{"inline":true,"label":"glaucoma detection","permalink":"/My-TFG-Logbook/blog/tags/glaucoma-detection"},{"inline":true,"label":"medical imaging","permalink":"/My-TFG-Logbook/blog/tags/medical-imaging"},{"inline":true,"label":"fine-tuning","permalink":"/My-TFG-Logbook/blog/tags/fine-tuning"},{"inline":true,"label":"Python","permalink":"/My-TFG-Logbook/blog/tags/python"}],"readingTime":2.63,"hasTruncateMarker":true,"authors":[{"name":"Eduardo Jos\xe9 Barrios Garc\xeda","title":"LLM and Neural Networks researcher at Universidad de La Laguna","url":"https://github.com/edujbarrios","page":{"permalink":"/My-TFG-Logbook/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/eyemadmusic","github":"https://github.com/edujbarrios"},"imageURL":"https://github.com/edujbarrios.png","key":"edujbarrios"}],"frontMatter":{"slug":"zero-shot-glaucoma-detection","title":"Revolutionizing Glaucoma Detection with Zero-Shot Learning and Lightweight AI","authors":["edujbarrios"],"tags":["Zero-shot learning","CLIP","AI","glaucoma detection","medical imaging","fine-tuning","Python"]},"unlisted":false,"prevItem":{"title":"Enhancing Medical Diagnostics with Prompt Engineering: A Deep Dive into AI Accuracy and Potential","permalink":"/My-TFG-Logbook/blog/prompt-engineering-medical-diagnostics"}}')}}]);