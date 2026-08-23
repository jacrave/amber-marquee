const textInput = document.getElementById('textInput');
const speedInput = document.getElementById('speedInput');
const speedVal = document.getElementById('speedVal');
const bgColor = document.getElementById('bgColor');
const textColor = document.getElementById('textColor');
const marqueeText = document.getElementById('marqueeText');

const controls = document.getElementById('controls');
const toggleControlsBtn = document.getElementById('toggleControlsBtn');
const showControlsBtn = document.getElementById('showControlsBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Update text live
textInput.addEventListener('input', (e) => {
    marqueeText.textContent = e.target.value || ' ';
});

// Update speed live
speedInput.addEventListener('input', (e) => {
    const val = e.target.value;
    speedVal.textContent = val;
    document.documentElement.style.setProperty('--scroll-duration', `${val}s`);
});

// Update colors live
bgColor.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--bg-color', e.target.value);
});

textColor.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--text-color', e.target.value);
});

// Toggle controls visibility
function toggleUI(hide) {
    if (hide) {
        controls.classList.add('hidden');
        showControlsBtn.classList.remove('hidden');
    } else {
        controls.classList.remove('hidden');
        showControlsBtn.classList.add('hidden');
    }
}

toggleControlsBtn.addEventListener('click', () => toggleUI(true));
showControlsBtn.addEventListener('click', () => toggleUI(false));

// Keyboard shortcut: Press 'H' to toggle toolbar
window.addEventListener('keydown', (e) => {
    if (e.target.tagName !== 'INPUT' && (e.key === 'h' || e.key === 'H')) {
        const isHidden = controls.classList.contains('hidden');
        toggleUI(!isHidden);
    }
});

// Fullscreen mode
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
        document.exitFullscreen().catch(() => {});
        fullscreenBtn.textContent = 'Fullscreen';
    }
});