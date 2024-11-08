
# Step-by-Step Guide to Setting Up the Docker Container in Docker Desktop

To detect and fix any potential installation issues, it's often best to open Docker Desktop, access the terminal, and execute each command step-by-step. This approach allows you to verify that each part of the installation works correctly and identify any errors early on.

## Step-by-Step Guide to Running the Dockerfile Commands in Docker Desktop

1. **Start an Interactive Container**:
   Begin by creating a container interactively from the base image. This allows you to run each command and troubleshoot as needed:
   ```bash
   docker run --gpus all -it nvidia/cuda:11.8.0-cudnn8-runtime-ubuntu20.04 /bin/bash
   ```
   Once inside the container, you can proceed with each command from the Dockerfile.

2. **Set Environment Variables**:
   Configure necessary environment variables for non-interactive installs and the Conda path:
   ```bash
   export DEBIAN_FRONTEND=noninteractive
   export PATH="/opt/conda/bin:$PATH"
   ```

3. **Install System Dependencies**:
   Install essential system packages required for the project:
   ```bash
   apt-get update && \
   apt-get install -y wget git libgl1-mesa-glx libglib2.0-0 && \
   rm -rf /var/lib/apt/lists/*
   ```

4. **Install Miniconda**:
   Download and install Miniconda, which you will use to create the Conda environment:
   ```bash
   wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh
   bash miniconda.sh -b -p /opt/conda
   rm miniconda.sh
   /opt/conda/bin/conda init
   ```

5. **Create the Conda Environment**:
   Ensure you have your `environment.yml` file in a shared directory accessible from Docker Desktop, or copy its contents here directly. Then, create the environment as specified:
   ```bash
   conda env create -f /path/to/environment.yml
   conda clean -a -y
   ```

6. **Install Additional Dependencies with Mamba and Pip**:
   Once the Conda environment is created, install the additional dependencies using `mamba` and `pip`:
   ```bash
   conda install -c conda-forge mamba=1.4.7 && \
   conda install -y pytorch==2.0.0 torchvision==0.15.0 torchaudio==2.0.0 pytorch-cuda=11.8 -c pytorch -c nvidia && \
   pip install git+https://github.com/lm-sys/FastChat.git@v0.1.10 && \
   pip install transformers==4.28.0
   ```

7. **Clone Necessary Git Repositories**:
   Clone the required repositories to set up model weights and configurations:
   ```bash
   git clone https://huggingface.co/meta-llama/Llama-2-13b-chat-hf
   git lfs install
   git clone https://huggingface.co/lmsys/vicuna-13b-delta-v0
   git clone https://huggingface.co/huggyllama/llama-13b
   ```

8. **Apply Delta Weights to the Vicuna Model**:
   Apply the delta weights to create the final Vicuna model. This requires running a Python script from the FastChat library:
   ```bash
   python -m fastchat.model.apply_delta --base ./llama-13b --target ./vicuna --delta ./vicuna-13b-delta-v0
   ```

9. **Copy Project Files**:
   Use Docker Desktop’s file-sharing feature or the `docker cp` command to copy the project files from your local machine into the container. You should copy the following structure:
   ```
   ├── Dockerfile             # Placed at the project root
   ├── environment.yml        # Conda environment file
   ├── demo.py                # Main demo script
   ├── eval_configs/          # Configuration files for evaluation
   ├── skingpt4/              # Main code directory with subfolders
   ├── weights/               # Folder for model weights (trained .pth files)
   └── additional files       # Other files, such as README.md, images, and prompts
   ```

10. **Test the Setup**:
    Once everything is installed, run the demo script manually to ensure everything is set up correctly:
    ```bash
    python demo.py --cfg-path eval_configs/skingpt4_eval_llama2_13bchat.yaml --gpu-id 0
    ```

11. **Save the Container as an Image**:
    If all steps work without issues, you can save this container as a Docker image. In a separate terminal, run:
    ```bash
    docker commit <container_id> skingpt4_image
    ```

By following this interactive approach in Docker Desktop, you can ensure that each installation step completes successfully and identify any issues immediately. Once you’ve confirmed everything works, you can proceed to build the Dockerfile directly, which should now work smoothly based on your manual verification.
