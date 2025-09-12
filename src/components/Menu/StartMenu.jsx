import { useState } from 'react';

import { motion } from 'motion/react';

import { playClick } from '../../utils/sound';
import { getDisplayedCards } from '../../utils/game.js';

import logo from '../../assets/images/icons/logo.svg';
import '../../styles/StartMenu.css';

import {
  cardsPerRoundByDifficulty,
  getCardsByDifficulty,
} from '../../utils/game.js';

export default function StartMenu({
  setCards,
  setDisplayedCards,
  setCardsPerRound,
  setRounds,
  setDifficulty,
  isSoundPlaying,
}) {
  const BUTTON_NAMES = ['easy', 'medium', 'hard'];

  function handleButtonClick(difficulty) {
    // Sound effect
    playClick(isSoundPlaying);

    // Set the difficulty
    setDifficulty(difficulty);

    // Set the cards depending on the difficulty chosen
    const randomCards = getCardsByDifficulty(difficulty);

    const cards = randomCards.map((card) => {
      const copy = { ...card };
      delete copy.isClicked;
      return copy;
    });

    // Number of cards shown per round
    const cardsPerRound = cardsPerRoundByDifficulty(difficulty);

    // Number of rounds equals the number of cards for the chosen difficulty
    const rounds = cards.length;

    setRounds(rounds);
    setCards(cards);
    setCardsPerRound(cardsPerRound);
    setDisplayedCards(getDisplayedCards(cards, cardsPerRound));
  }

  return (
    <motion.div
      className='start-menu'
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, x: '-50%', y: '-50%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img src={logo} alt='Logo' />
      <h1>Memory Game</h1>
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
