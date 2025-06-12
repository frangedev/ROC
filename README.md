# Rhythm of Code (ROC)

**Rhythm of Code (ROC)** is an innovative tool that transforms source code (e.g., Python, JavaScript) into rhythmic musical patterns. By mapping syntax elements like loops, functions, and conditionals to beats, melodies, or chords, ROC creates an auditory representation of your code. Perfect for teaching programming through music, debugging with sound cues, or exploring code creatively!

## Features

- **Language-Agnostic Parsing**: Supports multiple programming languages (Python, JavaScript, and more) using ANTLR grammars.
- **Real-Time Code-to-Music Playback**: Hear your code as you type with live audio feedback via ChucK.
- **Interactive Code Editor**: Powered by CodeMirror for a seamless, browser-based coding experience.
- **Customizable Sound Mappings**: Map code structures (e.g., loops to drums, functions to melodies) to different instruments or sounds.
- **Exportable Audio**: Save your code's musical output as WAV or MIDI files.
- **Educational Tool**: Helps beginners understand code structure through auditory patterns.

## Tech Stack

- **ANTLR**: For parsing source code into syntax trees.
- **ChucK**: For real-time audio synthesis and music generation.
- **CodeMirror**: For the in-browser code editor with syntax highlighting.
- **JavaScript/HTML**: For the web-based interface.
- **Node.js**: For backend processing and grammar integration.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [ChucK](http://chuck.cs.princeton.edu/) (v1.4 or higher)
- [ANTLR4](https://www.antlr.org/) (v4.9 or higher)
- A modern web browser (Chrome, Firefox, etc.)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/frangedev/ROC.git
   cd ROC
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up ANTLR:
   - Download and install ANTLR4 (`antlr-4.9-complete.jar`).
   - Add ANTLR to your system PATH or specify its location in `config.json`.

4. Install ChucK:
   - Follow the [ChucK installation guide](http://chuck.cs.princeton.edu/doc/build.html) for your OS.
   - Ensure ChucK is accessible via the command line.

5. Run the application:
   ```bash
   npm start
   ```
   - Open `http://localhost:3000` in your browser.

## Usage

1. **Open the Editor**: Access the web interface and start typing or paste your code (e.g., Python or JavaScript) into the CodeMirror editor.
2. **Hear Your Code**: As you type, ROC parses the code and generates real-time audio based on syntax elements:
   - Loops → Drum patterns
   - Functions → Melodic phrases
   - Conditionals → Chord changes
3. **Customize Sounds**: Use the settings panel to adjust instrument mappings or tempo.
4. **Export Audio**: Click the "Export" button to save your code's music as a WAV or MIDI file.

### Example
```python
# Sample Python code
def greet(name):
    for i in range(3):
        print(f"Hello, {name}!")
```
- This code might produce a short melody for the function definition, a repeating drum pattern for the loop, and a chime for each print statement.

## Contributing

We welcome contributions! To get started:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for details.

## Roadmap
- Support for additional languages (C++, Java, etc.).
- Advanced sound customization (e.g., user-defined sound fonts).
- Integration with DAWs via MIDI export.
- Visualizations of syntax-to-sound mappings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by the intersection of code and creativity.
- Thanks to the ANTLR, ChucK, and CodeMirror communities for their amazing tools.

---

**Turn your code into music!** 🎶 Start exploring with Rhythm of Code today!
