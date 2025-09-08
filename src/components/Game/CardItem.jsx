import '../../styles/CardItem.css';
import { getDisplayedCards } from '../../utils/game';
import { motion } from 'motion/react';

export default function CardItem({
  card,
  cards,
  cardsPerRound,
  setDisplayedCards,
  setCurrentRound,
  currentScore,
  setCurrentScore,
  setBestScore,
  setGameOverType,
  setIsGameOver,
}) {
  function handleClickButton() {
    if (card.isClicked) {
      setGameOverType('lose');
      setIsGameOver(true);
      return;
    }

    card.isClicked = true;

    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    setBestScore((prev) => Math.max(prev, newScore));

    /* Update round */
    setCurrentRound((prev) => prev + 1);

    /* Refresh displayed cards */
    setDisplayedCards(getDisplayedCards(cards, cardsPerRound));

    if (newScore === cardsPerRound) {
      setGameOverType('win');
      setIsGameOver(true);
    }
  }

  return (
    <motion.div
      onClick={handleClickButton}
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className='card'
    >
      <img src={card.src} alt='Card Image' />
      <div className='card-name'>{card.name}</div>
    </motion.div>
  );
}
