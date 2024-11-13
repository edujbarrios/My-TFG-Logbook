
## Requisitos

Para compilar el archivo `.qmd` a PDF, asegúrate de tener instalado:

1. **Quarto**: Herramienta para renderizar documentos `.qmd`. Puedes instalar Quarto en macOS usando **Homebrew** y en Windows con el instalador de Quarto.
2. **LaTeX**: Necesario para compilar el documento a PDF. En macOS, se recomienda **TinyTeX** (una instalación ligera de LaTeX) o **TeX Live**.

### Instalación de Quarto y LaTeX en macOS usando Homebrew

#### Instalar Quarto

En macOS, puedes instalar Quarto usando [Homebrew](https://brew.sh/). Si no tienes Homebrew instalado, primero instálalo ejecutando el siguiente comando en la terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Luego, instala Quarto usando Homebrew:

```bash
brew install quarto
```

Para verificar la instalación, ejecuta:

```bash
quarto --version
```

#### Instalar TinyTeX (distribución ligera de LaTeX)

Para compilar a PDF, puedes instalar TinyTeX en macOS ejecutando el siguiente comando:

```bash
quarto install tinytex
```

Esto instalará una versión ligera de LaTeX en tu sistema. Alternativamente, puedes instalar **MacTeX** si prefieres una distribución completa de LaTeX:

```bash
brew install --cask mactex
```

Para verificar si LaTeX está instalado, usa:

```bash
pdflatex --version
```
------------------------------------------------


### Instalación en Windows usando Visual Studio Code

#### Instalar Quarto en Windows

1. Descarga el instalador de Quarto para Windows desde [https://quarto.org/](https://quarto.org/).
2. Ejecuta el instalador y sigue las instrucciones para completar la instalación.
3. Para verificar que Quarto está correctamente instalado, abre una terminal de PowerShell y ejecuta:

   ```bash
   quarto --version
   ```

#### Instalar TinyTeX (distribución ligera de LaTeX) en Windows

Para compilar el documento en PDF, puedes instalar TinyTeX desde Quarto ejecutando el siguiente comando en PowerShell:

```bash
quarto install tinytex
```

Esto instalará una versión ligera de LaTeX. También puedes optar por instalar **MiKTeX** o **TeX Live** para Windows si prefieres una instalación más completa.

Para verificar si LaTeX está instalado, usa:

```bash
pdflatex --version
```

#### Usar Visual Studio Code para Compilar el Documento

1. Abre **Visual Studio Code** e instala la extensión de Quarto desde la sección de extensiones.
2. Descarga el repositorio en tu ordenador ejecutando el siguiente comando en PowerShell:

3. Abre la carpeta del repositorio en Visual Studio Code:

   - Ve a **File > Open Folder** y selecciona la carpeta del repositorio clonado.

4. Abre el archivo `propuesta_anteproyecto.qmd` y verifica que el contenido se muestra correctamente en Visual Studio Code.

5. Para compilar a PDF, abre una terminal dentro de Visual Studio Code (Terminal > New Terminal) y ejecuta:

   ```bash
   quarto render ejemplo.qmd --to pdf
   ```

   Esto generará un archivo PDF en el mismo directorio con el mismo nombre que el archivo `.qmd`.

6. Si prefieres, puedes usar la opción de **Render** proporcionada por la extensión de Quarto en Visual Studio Code.

