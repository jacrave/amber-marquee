const textInput = document.getElementById('textInput');
const speedInput = document.getElementById('speedInput');
const speedVal = document.getElementById('speedVal');
const bgColor = document.getElementById('bgColor');
const textColor = document.getElementById('textColor');
const marqueeText = document.getElementById('marqueeText');

const toggleBtn = document.getElementById('toggleBtn');
const settingsCard = document.getElementById('settingsCard');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Live Text
textInput.addEventListener('input', (e) => {
    marqueeText.textContent = e.target.value || ' ';
});

// Live Speed
speedInput.addEventListener('input', (e) => {
    const val = e.target.value;
    speedVal.textContent = val;
    document.documentElement.style.setProperty('--scroll-duration', `${val}s`);
});

// Live Colors
bgColor.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--bg-color', e.target.value);
});

textColor.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--text-color', e.target.value);
});

// Settings Toggle
toggleBtn.addEventListener('click', () => {
    settingsCard.classList.toggle('hidden');
    toggleBtn.textContent = settingsCard.classList.contains('hidden') ? '⚙️ Settings' : '✕ Close';
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
        document.exitFullscreen().catch(() => {});
        fullscreenBtn.textContent = 'Fullscreen';
    }
});