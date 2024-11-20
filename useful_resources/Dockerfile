# Usa una imagen base de Python
FROM nvidia/cuda:11.8.0-cudnn8-devel-ubuntu22.04

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala herramientas básicas y dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    wget \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Instala Miniconda
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh && \
    bash miniconda.sh -b -p /opt/conda && \
    rm miniconda.sh
ENV PATH="/opt/conda/bin:$PATH"

# Clona el repositorio SkinGPT-4
RUN git clone https://github.com/JoshuaChou2018/SkinGPT-4.git /app/SkinGPT-4

# Copia el archivo de entorno Conda
WORKDIR /app/SkinGPT-4
COPY environment.yml .

# Crea y activa el entorno Conda
RUN conda env create -f environment.yml && \
    echo "conda activate skingpt4_llama2" >> ~/.bashrc

# Instala Mamba y PyTorch
RUN conda install -n skingpt4_llama2 -c conda-forge mamba=1.4.7 && \
    conda run -n skingpt4_llama2 mamba install pytorch==2.0.0 torchvision==0.15.0 torchaudio==2.0.0 pytorch-cuda=11.8 -c pytorch -c nvidia

# Descarga y configura los pesos de Llama2
RUN git clone https://huggingface.co/meta-llama/Llama-2-13b-chat-hf /app/SkinGPT-4/llama_weights && \
    sed -i 's|path/to/llama2|/app/SkinGPT-4/llama_weights|' SkinGPT-4-llama2/skingpt4/configs/models/skingpt4_llama2_13bchat.yaml

# Define el punto de entrada para ejecutar el demo
CMD ["conda", "run", "-n", "skingpt4_llama2", "python", "demo.py", "--cfg-path", "eval_configs/skingpt4_eval_llama2_13bchat.yaml", "--gpu-id", "0"]

