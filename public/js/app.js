// Initialize Socket.IO connection
const socket = io();

// Theme management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Initialize CodeMirror with enhanced features
const editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: 'javascript',
    theme: html.getAttribute('data-theme') === 'dark' ? 'monokai' : 'eclipse',
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lint: true,
    styleActiveLine: true
});

// Set initial code
editor.setValue(`// Welcome to Rhythm of Code!
// Start typing your code here...

function example() {
    for (let i = 0; i < 5; i++) {
        console.log("Hello, World!");
    }
}`);

// Language selection
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', (e) => {
    editor.setOption('mode', e.target.value);
    document.getElementById('fileInfo').textContent = `Untitled.${e.target.value}`;
});

// Cursor position tracking
editor.on('cursorActivity', () => {
    const pos = editor.getCursor();
    document.getElementById('cursorPosition').textContent = 
        `Line: ${pos.line + 1}, Column: ${pos.ch + 1}`;
});

// Settings controls
const tempoSlider = document.getElementById('tempoSlider');
const tempoValue = document.getElementById('tempoValue');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

tempoSlider.addEventListener('input', (e) => {
    tempoValue.textContent = `${e.target.value} BPM`;
    socket.emit('tempoChange', parseInt(e.target.value));
});

volumeSlider.addEventListener('input', (e) => {
    volumeValue.textContent = `${e.target.value}%`;
    socket.emit('volumeChange', parseInt(e.target.value));
});

// Instrument mapping controls
const functionInstrument = document.getElementById('functionInstrument');
const loopInstrument = document.getElementById('loopInstrument');
const conditionalInstrument = document.getElementById('conditionalInstrument');

[functionInstrument, loopInstrument, conditionalInstrument].forEach(select => {
    select.addEventListener('change', (e) => {
        socket.emit('instrumentChange', {
            type: e.target.id.replace('Instrument', ''),
            instrument: e.target.value
        });
    });
});

// Visualization controls
const showWaveform = document.getElementById('showWaveform');
const showSpectrum = document.getElementById('showSpectrum');

[showWaveform, showSpectrum].forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        socket.emit('visualizationChange', {
            type: e.target.id.replace('show', '').toLowerCase(),
            enabled: e.target.checked
        });
    });
});

// Button event listeners
document.getElementById('playBtn').addEventListener('click', () => {
    const code = editor.getValue();
    socket.emit('codeUpdate', code);
});

document.getElementById('stopBtn').addEventListener('click', () => {
    socket.emit('stopPlayback');
});

document.getElementById('exportBtn').addEventListener('click', () => {
    socket.emit('exportAudio');
});

document.getElementById('saveBtn').addEventListener('click', () => {
    const code = editor.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = document.getElementById('fileInfo').textContent;
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById('loadBtn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.js,.py';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            editor.setValue(e.target.result);
            document.getElementById('fileInfo').textContent = file.name;
            const extension = file.name.split('.').pop();
            languageSelect.value = extension === 'py' ? 'python' : 'javascript';
            editor.setOption('mode', languageSelect.value);
        };
        reader.readAsText(file);
    };
    input.click();
});

document.getElementById('formatBtn').addEventListener('click', () => {
    // TODO: Implement code formatting
    socket.emit('formatCode', editor.getValue());
});

document.getElementById('minifyBtn').addEventListener('click', () => {
    // TODO: Implement code minification
    socket.emit('minifyCode', editor.getValue());
});

// Modal Management
const modals = {
    share: document.getElementById('shareModal'),
    analyze: document.getElementById('analyzeModal'),
    tutorial: document.getElementById('tutorialModal'),
    presets: document.getElementById('presetsModal'),
    collaborate: document.getElementById('collaborateModal')
};

function showModal(modalId) {
    const modal = modals[modalId];
    if (modal) {
        modal.classList.add('active');
    }
}

function hideModal(modalId) {
    const modal = modals[modalId];
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modals when clicking outside
Object.values(modals).forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Tool Buttons
document.getElementById('recordBtn').addEventListener('click', () => {
    // TODO: Implement recording functionality
    socket.emit('startRecording');
});

document.getElementById('shareBtn').addEventListener('click', () => {
    showModal('share');
    const shareLink = `${window.location.origin}?code=${encodeURIComponent(editor.getValue())}`;
    document.getElementById('shareLink').value = shareLink;
});

document.getElementById('analyzeBtn').addEventListener('click', () => {
    showModal('analyze');
    socket.emit('analyzeCode', editor.getValue());
});

document.getElementById('tutorialBtn').addEventListener('click', () => {
    showModal('tutorial');
    showTutorialStep(1);
});

document.getElementById('presetsBtn').addEventListener('click', () => {
    showModal('presets');
});

document.getElementById('collaborateBtn').addEventListener('click', () => {
    showModal('collaborate');
});

// Share functionality
document.getElementById('copyLink').addEventListener('click', () => {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    document.execCommand('copy');
    // Show copied feedback
    const btn = document.getElementById('copyLink');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
});

// Tutorial functionality
let currentTutorialStep = 1;
const totalTutorialSteps = 5;

function showTutorialStep(step) {
    const steps = document.querySelectorAll('.tutorial-step');
    steps.forEach(s => s.classList.remove('active'));
    const currentStep = document.querySelector(`.tutorial-step[data-step="${step}"]`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
}

document.getElementById('prevStep').addEventListener('click', () => {
    if (currentTutorialStep > 1) {
        currentTutorialStep--;
        showTutorialStep(currentTutorialStep);
    }
});

document.getElementById('nextStep').addEventListener('click', () => {
    if (currentTutorialStep < totalTutorialSteps) {
        currentTutorialStep++;
        showTutorialStep(currentTutorialStep);
    } else {
        hideModal('tutorial');
    }
});

// Presets functionality
document.querySelectorAll('.preset-card').forEach(card => {
    card.addEventListener('click', () => {
        const preset = card.dataset.preset;
        socket.emit('loadPreset', preset);
        hideModal('presets');
    });
});

// Collaboration functionality
document.getElementById('createSession').addEventListener('click', () => {
    socket.emit('createSession');
});

document.getElementById('joinSession').addEventListener('click', () => {
    const sessionId = prompt('Enter session ID:');
    if (sessionId) {
        socket.emit('joinSession', sessionId);
    }
});

// Advanced Features
const enableAI = document.getElementById('enableAI');
const enableAutoTune = document.getElementById('enableAutoTune');
const enableEffects = document.getElementById('enableEffects');
const effectsPanel = document.getElementById('effectsPanel');
const effectType = document.getElementById('effectType');
const effectIntensity = document.getElementById('effectIntensity');

enableEffects.addEventListener('change', (e) => {
    effectsPanel.style.display = e.target.checked ? 'block' : 'none';
    socket.emit('toggleEffects', e.target.checked);
});

effectType.addEventListener('change', (e) => {
    socket.emit('changeEffect', {
        type: e.target.value,
        intensity: effectIntensity.value
    });
});

effectIntensity.addEventListener('input', (e) => {
    socket.emit('changeEffect', {
        type: effectType.value,
        intensity: e.target.value
    });
});

// Socket event listeners for new features
socket.on('analysisComplete', (data) => {
    // TODO: Update analysis charts
    console.log('Analysis complete:', data);
});

socket.on('sessionCreated', (sessionId) => {
    document.querySelector('.session-info').style.display = 'block';
    document.getElementById('sessionId').textContent = sessionId;
});

socket.on('participantJoined', (count) => {
    document.getElementById('participantCount').textContent = count;
});

socket.on('presetLoaded', (preset) => {
    // Update UI to reflect loaded preset
    console.log('Preset loaded:', preset);
});

// Socket event listeners
socket.on('audioData', (data) => {
    // TODO: Handle audio data from server
    console.log('Received audio data:', data);
});

socket.on('exportComplete', (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'code-music.wav';
    link.click();
});

socket.on('formattedCode', (code) => {
    editor.setValue(code);
});

socket.on('minifiedCode', (code) => {
    editor.setValue(code);
});

// Handle editor changes with debounce
let debounceTimer;
editor.on('change', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const code = editor.getValue();
        socket.emit('codeUpdate', code);
    }, 500);
}); 