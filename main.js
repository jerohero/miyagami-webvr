let environmentEl;
let startTextEl;

const presets = ['forest', 'egypt', 'japan', 'dream', 'volcano', 'goldmine', 'tron', 'starry'];
let activePreset = 'forest';

window.onload = () => {
    environmentEl = document.getElementById('environment');
    startTextEl = document.getElementById('start-text');
}

const nextPreset = () => {
    if (startTextEl) {
        hideStartText();
    }

    const nextPreset = presets[presets.indexOf(activePreset) + 1] || presets[0];

    environmentEl.setAttribute('environment', `preset:${ nextPreset }`);

    activePreset = nextPreset;
}

const hideStartText = () => {
    startTextEl.remove();
    startTextEl = null;
}