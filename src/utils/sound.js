import clickSound from '../assets/sounds/click-sound.mp3';

export function playClick(isSoundPlaying) {
  if (isSoundPlaying) {
    const audio = new Audio(clickSound);
    audio.volume = 0.07;
    audio.play();
  }
}
