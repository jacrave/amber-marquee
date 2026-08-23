const textInput = document.getElementById('textInput');
const speedInput = document.getElementById('speedInput');
const speedVal = document.getElementById('speedVal');
const bgColor = document.getElementById('bgColor');
const textColor = document.getElementById('textColor');
const marqueeText = document.getElementById('marqueeText');

const controls = document.getElementById('controls');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const closeControlsBtn = document.getElementById('closeControlsBtn');
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

// Drawer Open/Close
menuToggleBtn.addEventListener('click', () => {
    controls.classList.toggle('open');
});

closeControlsBtn.addEventListener('click', () => {
    controls.classList.remove('open');
});

// Keyboard shortcut (Press 'H' or 'Escape' to close)
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        controls.classList.remove('open');
    }
    if (e.target.tagName !== 'INPUT' && (e.key === 'h' || e.key === 'H')) {
        controls.classList.toggle('open');
    }
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