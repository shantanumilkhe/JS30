

window.addEventListener('keydown', function(e) { 

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime  = 0;
    audio.play();
    key.classList.add('playing')

    const keys = document.querySelectorAll('.key');
    
});

function removetranstion(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

    
  const keys = Array.from(document.querySelectorAll('.key'));
for (let k of keys){
        k.addEventListener('transitionend', removetranstion)
    }
