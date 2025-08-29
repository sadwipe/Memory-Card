import ButtonContainer from './ButtonContainer';

import backgroundMusic from '../../assets/sounds/song.mp3';

import ReactHowler from 'react-howler';

export default function Footer({
  isMusicPlaying,
  isSoundPlaying,
  setIsMusicPlaying,
  setIsSoundPlaying,
  playClick,
}) {
  return (
    <>
      <ButtonContainer
        musicStatus={isMusicPlaying}
        soundsStatus={isSoundPlaying}
        setMusicStatus={setIsMusicPlaying}
        setSoundsStatus={setIsSoundPlaying}
        playClick={playClick}
      />
      <ReactHowler
        src={backgroundMusic}
        playing={isMusicPlaying}
        loop={true}
        volume={0.05}
      />
    </>
  );
}
