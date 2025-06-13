# Rhythm of Code (ROC)

**Rhythm of Code (ROC)** is an innovative tool that transforms source code (e.g., Python, JavaScript) into rhythmic musical patterns. By mapping syntax elements like loops, functions, and conditionals to beats, melodies, or chords, ROC creates an auditory representation of your code. Perfect for teaching programming through music, debugging with sound cues, or exploring code creatively!

## Features

### Core Features
- **Language-Agnostic Parsing**: Supports multiple programming languages (Python, JavaScript, and more) using ANTLR grammars.
- **Real-Time Code-to-Music Playback**: Hear your code as you type with live audio feedback via ChucK.
- **Interactive Code Editor**: Powered by CodeMirror for a seamless, browser-based coding experience.
- **Customizable Sound Mappings**: Map code structures (e.g., loops to drums, functions to melodies) to different instruments or sounds.
- **Exportable Audio**: Save your code's musical output as WAV or MIDI files.
- **Educational Tool**: Helps beginners understand code structure through auditory patterns.

### New Features
- **Dark/Light Theme Support**: Toggle between dark and light themes with persistent preferences.
- **Recording & Sharing**: Record your code music and share it via social media or direct links.
- **Code Analysis**: Visualize code structure and musical patterns in real-time.
- **Interactive Tutorial**: Step-by-step guide for new users with interactive examples.
- **Musical Presets**: Choose from various musical styles:
  - Classical (orchestral arrangement)
  - Electronic (synth-based sounds)
  - Jazz (swing and improvisation)
  - Rock (guitar and drums)
- **Collaboration**: Create or join collaborative sessions for real-time code and music sharing.
- **Advanced Sound Features**:
  - AI Code Analysis for smarter mappings
  - Auto-Tune functionality
  - Sound Effects (Reverb, Delay, Distortion, Filter)
  - Effect intensity control
- **Enhanced Editor Features**:
  - Code formatting and minification
  - Multiple language support
  - File management (save/load)
  - Cursor position tracking
  - Status bar with file information
  - Code folding
  - Active line highlighting
  - Bracket matching and auto-closing

## Tech Stack

- **ANTLR**: For parsing source code into syntax trees.
- **ChucK**: For real-time audio synthesis and music generation.
- **CodeMirror**: For the in-browser code editor with syntax highlighting.
- **JavaScript/HTML/CSS**: For the web-based interface.
- **Node.js**: For backend processing and grammar integration.
- **Socket.IO**: For real-time collaboration and updates.
- **Font Awesome**: For beautiful icons and UI elements.

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

### Basic Usage
1. **Open the Editor**: Access the web interface and start typing or paste your code.
2. **Hear Your Code**: As you type, ROC parses the code and generates real-time audio:
   - Loops → Drum patterns
   - Functions → Melodic phrases
   - Conditionals → Chord changes
3. **Customize Sounds**: Use the settings panel to adjust instrument mappings or tempo.
4. **Export Audio**: Click the "Export" button to save your code's music.

### Advanced Features
1. **Recording & Sharing**:
   - Click the Record button to capture your code music
   - Use Share to distribute via social media or direct links
   - Copy shareable links for easy sharing

2. **Analysis Tools**:
   - View code structure analysis
   - See musical pattern visualization
   - Get real-time feedback on mappings

3. **Tutorial**:
   - Start the interactive guide
   - Follow step-by-step instructions
   - Learn through examples

4. **Presets**:
   - Choose from different musical styles
   - Apply styles to your code
   - Customize preset settings

5. **Collaboration**:
   - Create or join sessions
   - Share code and music in real-time
   - Track participants

6. **Sound Effects**:
   - Enable/disable effects
   - Adjust effect intensity
   - Mix multiple effects

### Example
```python
# Sample Python code
def greet(name):
    for i in range(3):
        print(f"Hello, {name}!")
```
- This code produces a short melody for the function definition
- A repeating drum pattern for the loop
- A chime for each print statement

## Contributing

We welcome contributions! To get started:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for details.

## Roadmap
- Support for additional languages (C++, Java, etc.)
- Advanced sound customization (user-defined sound fonts)
- Integration with DAWs via MIDI export
- Visualizations of syntax-to-sound mappings
- Machine learning for improved code-to-music mapping
- Mobile app version
- Plugin system for custom instruments and effects
- Cloud storage for saved compositions
- Advanced collaboration features
- Real-time performance mode

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by the intersection of code and creativity
- Thanks to the ANTLR, ChucK, and CodeMirror communities for their amazing tools
- Special thanks to all contributors and users

---

**Turn your code into music!** 🎶 Start exploring with Rhythm of Code today!
