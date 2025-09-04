import CardItem from './CardItem.jsx';

import { motion } from 'motion/react';
import { playClick } from '../../utils/sound.js';

import logo from '../../assets/images/icons/logo.svg';

import '../../styles/GameScreen.css';

export default function GameScreen({
  cards,
  setCards,
  currentScore,
  setCurrentScore,
  bestScore,
  setDifficulty,
  rounds,
  currentRound,
  cardsPerRound,
  setCardsPerRound,
  isSoundPlaying
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
          // Reset difficulty and return to main page when clicking the logo
          onClick={() => {
            setCardsPerRound(null);
            playClick(isSoundPlaying);
            setDifficulty(null);
            setCards([]);
            setCurrentScore(0);
          }}
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
      <main>
        <div className='card-container'>
          {cards.map((card) => {
            return <CardItem key={card.id} card={card} />;
          })}
        </div>
        <p className='rounds-remaining'>
          {currentRound} / {rounds}
        </p>
      </main>
    </>
  );
}
