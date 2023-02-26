toggleSwitch = document.getElementById('toggle');
toggleSwitch.addEventListener('change', switchTheme);

tiltedDivider = document.getElementById('tiltedDivider');
divider = document.getElementById('divider');
line = document.getElementById('line');

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        tiltedDivider.href = './assets/tiltedSeperator/light/index.html';
        divider.href = './assets/seperator/light/index.html';
        line.href = './assets/line/light/index.html';
    } else {
        tiltedDivider.href = './assets/tiltedSeperator/dark/index.html';
        divider.href = './assets/seperator/dark/index.html';
        line.href = './assets/line/dark/index.html';
    }
}