import { motion } from 'motion/react';

import logo from '../../assets/images/icons/logo.svg';
import '../../styles/StartMenu.css';

import { getCardsByDifficulty } from '../../data/initialCardData';

export default function StartMenu({ playClick, setCards, setDifficulty }) {
  const BUTTON_NAMES = ['easy', 'medium', 'hard'];

  function handleButtonClick(level) {
    // Sound effect
    playClick();

    // Set the difficulty
    setDifficulty(level);

    // Set the cards depending on the difficulty chosen
    setCards(getCardsByDifficulty(level));
  }

  return (
    <motion.div
      className='start-menu'
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, x: '-50%', y: '-50%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img src={logo} alt='Logo' />
      <h1>Memory Game </h1>
      <div className='difficulty-container'>
        {BUTTON_NAMES.map((name) => {
          return (
            <motion.button
              key={name}
              onClick={() => handleButtonClick(name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.25, ease: 'easeIn' }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
