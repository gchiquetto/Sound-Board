const sounds = ['bear', 'cat', 'dinosaur', 'elephant', 'pig'];

sounds.forEach(sound => {
    
    const btn = document.createElement('button');
    btn.classList.add('sound-button');

    btn.innerText = sound;
    document.querySelector('.sound-container').appendChild(btn);
    btn.addEventListener('click', ()=> {
        stopSound();
        document.getElementById(sound).play();
    });
});

function stopSound(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}
// const buttons = document.querySelectorAll('.sound-button');

// buttons.forEach(button => button.addEventListener(
//     'click', e => {
//         const music = new Audio(`sound/${e.target.id}.mp3`);
//         console.log(music.paused);
//         music.play();
//     }
// ));