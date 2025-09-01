import { useState } from 'react';
import { motion } from 'motion/react';

import logo from '../../assets/images/icons/logo.svg';

import '../../styles/GameScreen.css';

export default function GameScreen({
  cards,
  setCards,
  playClick,
  currentScore,
  bestScore,
}) {
  return (
    <>
      <header>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={logo}
          alt='Logo'
        />
        <motion.div
          transition={{ duration: 0.5, ease: 'easeOut' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='score-container'
        >
          <p>Score: {currentScore}</p>
          <p>Best score: {bestScore}</p>
        </motion.div>
      </header>
    </>
  );
}
