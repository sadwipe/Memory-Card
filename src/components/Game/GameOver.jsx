import { motion } from 'motion/react';

import { playClick } from '../../utils/sound';

import '../../styles/GameOver.css';
import {
  getDisplayedCards,
  cardsPerRoundByDifficulty,
  getCardsByDifficulty,
} from '../../utils/game';

export default function GameOver({
  setCurrentRound,
  setDisplayedCards,
  setCards,
  difficulty,
  setCurrentScore,
  setGameOverType,
  setIsGameOver,
  gameOverType,
  isSoundPlaying,
}) {
  function restartGame() {
    playClick(isSoundPlaying);
    setGameOverType(null);
    setIsGameOver(false);
    setCurrentScore(0);
    setCurrentRound(0);

    // Set new deck of cards
    const cards = getCardsByDifficulty(difficulty);

    const cardsPerRound = cardsPerRoundByDifficulty(difficulty);

    const newCards = cards.map((card) => {
      const copy = { ...card };
      delete copy.isClicked;
      return copy;
    });
    setCards(newCards);
    setDisplayedCards(getDisplayedCards(newCards, cardsPerRound));
  }

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
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            restartGame();
          }}
        >
          Restart
        </motion.button>
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
