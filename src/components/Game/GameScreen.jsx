import CardItem from './CardItem.jsx';
import GameOver from './GameOver.jsx';
import { motion } from 'motion/react';
import { playClick } from '../../utils/sound.js';
import logo from '../../assets/images/icons/logo.svg';
import '../../styles/GameScreen.css';

export default function GameScreen({
  cards,
  setCards,
  displayedCards,
  setDisplayedCards,
  cardsPerRound,
  setCardsPerRound,
  rounds,
  currentRound,
  setCurrentRound,
  bestScore,
  setBestScore,
  currentScore,
  setCurrentScore,
  setDifficulty,
  isSoundPlaying,
  isGameOver,
  setIsGameOver,
  gameOverType,
  setGameOverType,
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
            setCurrentRound(0);
            setCardsPerRound(null);
            playClick(isSoundPlaying);
            setDifficulty(null);
            setCards([]);
            setCurrentScore(0);
            setBestScore(0);
            setCards(
              cards.map((card) => {
                delete card.isClicked;
              }),
            );
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
          {displayedCards.map((card) => (
            <CardItem
              /* Cards */
              card={card}
              cards={cards}
              setCards={setCards}
              displayedCards={displayedCards}
              setDisplayedCards={setDisplayedCards}
              cardsPerRound={cardsPerRound}
              /* Rounds */
              setCurrentRound={setCurrentRound}
              /* Scores */
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              bestScore={bestScore}
              setBestScore={setBestScore}
              key={card.id}
              /* Game */
              setGameOverType={setGameOverType}
              setIsGameOver={setIsGameOver}
            />
          ))}
        </div>
        <p className='rounds-remaining'>
          {currentRound} / {rounds}
        </p>
      </main>
    </>
  );
}
