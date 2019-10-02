function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return;
  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
};

function removeTransition(e) {
  if(e.propertyName !== 'opacity') return;
  this.classList.remove('playing'); // this = key element
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
