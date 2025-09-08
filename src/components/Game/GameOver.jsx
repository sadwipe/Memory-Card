import { motion } from 'motion/react';

import { playClick } from '../../utils/sound';

import "../../styles/GameOver.css"

export default function GameOver({ gameOverType }) {
  return (
    <>
      <motion.div
        className={gameOverType === 'win' ? 'win' : 'lose'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0 }}
      >
        <div>{gameOverType === 'win' ? 'You win!' : 'You lose!'}</div>
        <button
          onClick={() => {
            // restart the game
            playClick();
          }}
        >
          Restart
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0 }}
        className='overlay'
      ></motion.div>
    </>
  );
}
