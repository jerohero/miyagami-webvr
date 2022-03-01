let environmentEl;
const presets = ['forest', 'egypt', 'japan', 'dream', 'volcano', 'goldmine', 'tron', 'starry'];
let activePreset = 'forest';

window.onload = () => {
    environmentEl = document.getElementById('environment');
}

const nextPreset = () => {
    const nextPreset = presets[presets.indexOf(activePreset) + 1] || presets[0];

    environmentEl.setAttribute('environment', `preset:${ nextPreset }`);

    activePreset = nextPreset;
}