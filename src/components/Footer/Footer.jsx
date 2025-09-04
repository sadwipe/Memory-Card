import ButtonContainer from './ButtonContainer';

import backgroundMusic from '../../assets/sounds/song.mp3';

import ReactHowler from 'react-howler';

export default function Footer({
  isMusicPlaying,
  isSoundPlaying,
  setIsMusicPlaying,
  setIsSoundPlaying,
}) {
  return (
    <footer>
      <ButtonContainer
        musicStatus={isMusicPlaying}
        soundsStatus={isSoundPlaying}
        setMusicStatus={setIsMusicPlaying}
        setSoundsStatus={setIsSoundPlaying}
      />
      <ReactHowler
        src={backgroundMusic}
        playing={isMusicPlaying}
        loop={true}
        volume={0.05}
      />
    </footer>
  );
}
