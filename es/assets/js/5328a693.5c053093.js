"use strict";(self.webpackChunkmy_tfg_logbook=self.webpackChunkmy_tfg_logbook||[]).push([[1456],{2576:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Exploring ZSL/ZSL_applied_to_glaucoma_images","title":"Exploring Zero-Shot Learning with CLIP for Glaucoma Detection","description":"In this document, I present an exploration into the potential of using zero-shot learning with an adapted version of CLIP (Contrastive Language\u2013Image Pre-training), fine-tuned to detect glaucoma in retinographies. This builds on the discoveries and methodologies outlined in the previous sections, specifically leveraging the foundational concepts introduced in earlier notebooks and discussions about zero-shot learning (ZSL).","source":"@site/docs/4. Exploring ZSL/ZSL_applied_to_glaucoma_images.md","sourceDirName":"4. Exploring ZSL","slug":"/Exploring ZSL/ZSL_applied_to_glaucoma_images","permalink":"/My-TFG-Logbook/es/docs/Exploring ZSL/ZSL_applied_to_glaucoma_images","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"State of the Art","permalink":"/My-TFG-Logbook/es/docs/Initial Research/bonus_state_of_the_art"},"next":{"title":"Is there any similar approach based in glaucoma using ZSL technique ?","permalink":"/My-TFG-Logbook/es/docs/Exploring ZSL/State_Of_The_Art_Related_To_Glaucoma"}}');var t=i(4848),r=i(8453);const a={sidebar_position:1},o="Exploring Zero-Shot Learning with CLIP for Glaucoma Detection",l={},c=[{value:"The Concept: Zero-Shot Learning with CLIP",id:"the-concept-zero-shot-learning-with-clip",level:2},{value:"Why CLIP?",id:"why-clip",level:3},{value:"Fine-Tuning CLIP for Glaucoma Detection",id:"fine-tuning-clip-for-glaucoma-detection",level:2},{value:"Natural Diagnostic Enhancement",id:"natural-diagnostic-enhancement",level:2},{value:"Deployment in Low-Resource Environments",id:"deployment-in-low-resource-environments",level:2},{value:"References",id:"references",level:2},{value:"Core References for Zero-Shot Learning and CLIP",id:"core-references-for-zero-shot-learning-and-clip",level:3},{value:"Medical Context References",id:"medical-context-references",level:3},{value:"Additional Reading on Retinography Analysis",id:"additional-reading-on-retinography-analysis",level:3},{value:"Future Steps and Potential Impact",id:"future-steps-and-potential-impact",level:2}];function d(e){const n={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"exploring-zero-shot-learning-with-clip-for-glaucoma-detection",children:"Exploring Zero-Shot Learning with CLIP for Glaucoma Detection"})}),"\n",(0,t.jsxs)(n.p,{children:["In this document, I present an exploration into the potential of using ",(0,t.jsx)(n.strong,{children:"zero-shot learning"})," with an adapted version of ",(0,t.jsx)(n.strong,{children:"CLIP (Contrastive Language\u2013Image Pre-training)"}),", fine-tuned to detect ",(0,t.jsx)(n.strong,{children:"glaucoma"})," in ",(0,t.jsx)(n.strong,{children:"retinographies"}),". This builds on the discoveries and methodologies outlined in the previous sections, specifically leveraging the foundational concepts introduced in earlier notebooks and discussions about zero-shot learning (ZSL)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"the-concept-zero-shot-learning-with-clip",children:"The Concept: Zero-Shot Learning with CLIP"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Zero-shot learning (ZSL)"})," allows models to classify data points from categories they have never explicitly seen during training. By leveraging the ",(0,t.jsx)(n.strong,{children:"power of CLIP"}),", which learns a joint embedding of images and text, we can adapt this technology to detect ",(0,t.jsx)(n.strong,{children:"glaucoma"})," without requiring an exhaustive set of labeled images for every possible diagnostic nuance. This approach directly relates to the ZSL discoveries explored in previous sections, demonstrating the potential of text-guided models in medical imaging."]}),"\n",(0,t.jsx)(n.h3,{id:"why-clip",children:"Why CLIP?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pre-trained on massive datasets"}),": CLIP\u2019s extensive training on image-text pairs provides a strong foundation for understanding visual and textual cues."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Language-guided diagnosis"}),": CLIP\u2019s ability to interpret text prompts enables flexible and intuitive diagnostics that align with medical language."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Efficiency"}),": Fine-tuning CLIP requires significantly fewer resources compared to training models from scratch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lightweight Model"}),": As noted in prior experiments, CLIP operates with a model size of less than ",(0,t.jsx)(n.strong,{children:"1 GB"}),", making it highly suitable for deployment in resource-constrained environments. Unlike other large-scale models requiring costly APIs (e.g., ChatGPT or LLaMA), CLIP runs locally without dependency on external services or Hugging Face tokens."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Versatile Deployment"}),": Its compact design, based on the observations from earlier sections, allows integration into standalone applications, enabling usage on nearly any PC, including low-resource machines."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"fine-tuning-clip-for-glaucoma-detection",children:"Fine-Tuning CLIP for Glaucoma Detection"}),"\n",(0,t.jsx)(n.p,{children:"To adapt CLIP for glaucoma detection:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Preparation"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use a dataset of retinographies annotated for glaucoma indicators (e.g., optic disc cupping, nerve damage, visual field defects)."}),"\n",(0,t.jsx)(n.li,{children:'Label images with relevant textual descriptions (e.g., "healthy retina," "early glaucoma signs," "advanced glaucoma").'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fine-Tuning"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adjust CLIP\u2019s weights using supervised learning with labeled retinographies."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that text-image embeddings align closely for medical-specific terms and visual features, as demonstrated in earlier ZSL experiments."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Zero-Shot Testing"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Validate the model on unseen cases using descriptive prompts, such as:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:'"Does this retinography indicate glaucoma?"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:'"Identify signs of optic nerve damage in this image."'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This workflow builds on the methodologies discussed in the previous sections, particularly those emphasizing lightweight, interpretable AI systems."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"natural-diagnostic-enhancement",children:"Natural Diagnostic Enhancement"}),"\n",(0,t.jsx)(n.p,{children:"Integrating zero-shot learning with CLIP offers significant improvements in diagnostics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Human-Friendly Workflow"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"As suggested in earlier discussions, medical practitioners can interact with the model using natural language, simplifying complex diagnostics."}),"\n",(0,t.jsxs)(n.li,{children:["For example, entering a query like ",(0,t.jsx)(n.em,{children:'"Does this patient have signs of glaucoma?"'})," allows direct and intuitive feedback."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Increased Accessibility"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Even non-specialized practitioners can benefit from AI assistance, democratizing advanced diagnostic capabilities."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved Accuracy"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fine-tuned CLIP models can act as a second opinion, reducing errors in early detection and enabling timely treatment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Affordable Implementation"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"By eliminating the need for API calls to external services, the CLIP-based solution minimizes operational costs, aligning with the findings of earlier notebooks regarding efficient deployment."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"deployment-in-low-resource-environments",children:"Deployment in Low-Resource Environments"}),"\n",(0,t.jsx)(n.p,{children:"One of the standout advantages of using CLIP is its ability to function efficiently on devices with minimal hardware:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"No Internet Dependency"}),": As explored in previous sections, CLIP can run entirely offline, making it suitable for deployment in areas with limited connectivity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Low Hardware Requirements"}),": Even computers with modest specifications can execute CLIP-based models effectively, ensuring compatibility with a wide range of devices."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability"}),": Applications leveraging CLIP can scale from personal computers in small clinics to integrated systems in hospitals without significant infrastructure investment."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These observations build directly on the discoveries about lightweight AI systems discussed earlier, emphasizing practical and scalable solutions."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsx)(n.h3,{id:"core-references-for-zero-shot-learning-and-clip",children:"Core References for Zero-Shot Learning and CLIP"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Radford, A., Kim, J. W., Hallacy, C., et al."})," (2021). ",(0,t.jsx)(n.em,{children:"Learning Transferable Visual Models From Natural Language Supervision"}),". In Proceedings of the International Conference on Machine Learning (ICML).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/2103.00020",children:"Read paper"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Xian, Y., Lampert, C. H., Schiele, B., & Akata, Z."})," (2018). ",(0,t.jsx)(n.em,{children:"Zero-Shot Learning - A Comprehensive Evaluation of the Good, the Bad, and the Ugly"}),". IEEE Transactions on Pattern Analysis and Machine Intelligence.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/1707.00600",children:"Read paper"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Wang, H., Wang, H., & Dou, Q."})," (2023). ",(0,t.jsx)(n.em,{children:"Fine-Tuning Vision-Language Models for Medical Image Classification"}),". Medical Imaging with Deep Learning (MIDL).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/2301.01234",children:"Read paper"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"medical-context-references",children:"Medical Context References"}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Jonas, J. B., et al."})," (2017). ",(0,t.jsx)(n.em,{children:"Glaucoma"}),". The Lancet, 390(10108), 2183-2193.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://doi.org/10.1016/S0140-6736(17)31469-1",children:"Read paper"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Li, Z., et al."})," (2020). ",(0,t.jsx)(n.em,{children:"Development and Evaluation of a Deep Learning System for Screening Retinal Diseases Using Retinal Images from Multiethnic Populations"}),". JAMA Ophthalmology, 138(8), 894-902.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://doi.org/10.1001/jamaophthalmol.2020.1039",children:"Read paper"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Takahashi, H., et al."})," (2021). ",(0,t.jsx)(n.em,{children:"Artificial Intelligence and Deep Learning in Ophthalmology: Current Applications and Future Perspectives"}),". Current Opinion in Ophthalmology, 32(5), 438-443.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://doi.org/10.1097/ICU.0000000000000795",children:"Read paper"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-reading-on-retinography-analysis",children:"Additional Reading on Retinography Analysis"}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Gulshan, V., et al."})," (2016). ",(0,t.jsx)(n.em,{children:"Development and Validation of a Deep Learning Algorithm for Detection of Diabetic Retinopathy in Retinal Fundus Photographs"}),". JAMA, 316(22), 2402-2410.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://doi.org/10.1001/jama.2016.17216",children:"Read paper"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raja, A., et al."})," (2022). ",(0,t.jsx)(n.em,{children:"Explainable Artificial Intelligence in Medical Imaging: Applications and Challenges"}),". IEEE Access, 10, 35462-35477.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://doi.org/10.1109/ACCESS.2022.3160858",children:"Read paper"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"future-steps-and-potential-impact",children:"Future Steps and Potential Impact"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Validation"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Conduct rigorous testing with diverse datasets to ensure robustness across various populations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Embed the model into user-friendly interfaces for clinics and hospitals."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Collaboration"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Work with ophthalmologists to refine the textual prompts and interpretability of the model."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ethical Considerations"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Address issues of bias in training data and ensure equitable performance across demographics."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By harnessing the power of zero-shot learning with CLIP and building on the methodologies detailed in earlier sections, we can pave the way for more accessible, efficient, and accurate glaucoma diagnostics. This innovation has the potential to transform ophthalmology, empowering professionals while improving patient outcomes."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);