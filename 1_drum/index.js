function playsound(soundfile) {
    const audio = new Audio(`./${soundfile}.mp3`);
    audio.play();
}

document.addEventListener("keydown", (event) => {
    const keyMap = {
        'a': 'clap',
        's': 'hihat',
        'd': 'kick',
        'f': 'openhat',
        'g': 'boom',
        'h': 'ride',
        'j': 'snare',
        'k': 'tom',
        'l': 'tink'
    };

    if (keyMap[event.key]) {
        const button = document.querySelector(`button[onclick="playsound('${keyMap[event.key]}')"]`);
        button.classList.add('hover');
        playsound(keyMap[event.key]);
    }
});

document.addEventListener("keyup", (event) => {
    const keyMap = {
        'a': 'clap',
        's': 'hihat',
        'd': 'kick',
        'f': 'openhat',
        'g': 'boom',
        'h': 'ride',
        'j': 'snare',
        'k': 'tom',
        'l': 'tink'
    };

    if (keyMap[event.key]) {
        const button = document.querySelector(`button[onclick="playsound('${keyMap[event.key]}')"]`);
        button.classList.remove('hover');
    }
});
