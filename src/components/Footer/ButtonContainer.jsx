import { motion } from 'motion/react';

import musicOff from '../../assets/images/icons/music_off.svg';
import musicOn from '../../assets/images/icons/music_sign.svg';
import soundsOff from '../../assets/images/icons/volume_off.svg';
import soundsOn from '../../assets/images/icons/volume.svg';

import '../../styles/music.css';

export default function ButtonContainer({
  musicStatus,
  soundsStatus,
  setMusicStatus,
  setSoundsStatus,
  playClick,
}) {
  return (
    <motion.div
      className='music-container'
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.25, ease: 'easeIn' }}
        onClick={() => {
          setSoundsStatus(!soundsStatus);
          playClick();
        }}
      >
        <img src={soundsStatus ? soundsOn : soundsOff} alt='Sound Status' />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.25, ease: 'easeIn' }}
        onClick={() => {
          setMusicStatus(!musicStatus);
          playClick();
        }}
      >
        <img src={musicStatus ? musicOn : musicOff} alt='Music Status' />
      </motion.button>
    </motion.div>
  );
}
