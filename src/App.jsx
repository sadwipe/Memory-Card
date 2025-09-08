import { useState, useEffect } from 'react';

import Footer from './components/Footer/Footer';
import StartMenu from './components/Menu/StartMenu';
import GameScreen from './components/Game/GameScreen';
import LoadingScreen from './components/Menu/LoadingScreen';
import GameOver from './components/Game/GameOver';

import video from './assets/videos/background.mp4';
function App() {
  // Sound & Music
  const [isMusicPlaying, setIsMusicPlaying] = useState(() => {
    const saved = localStorage.getItem('musicStatus');
    return saved !== null ? saved === 'true' : false;
  });

  const [isSoundPlaying, setIsSoundPlaying] = useState(() => {
    const saved = localStorage.getItem('soundStatus');
    return saved !== null ? saved === 'true' : true;
  });

  // Cards
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [cardsPerRound, setCardsPerRound] = useState(null);

  // Game setup / progression
  const [difficulty, setDifficulty] = useState(null);
  const [rounds, setRounds] = useState(null);
  const [currentRound, setCurrentRound] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverType, setGameOverType] = useState(null);

  // Scores
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Loading screen
  const [isLoadingOver, setIsLoadingOver] = useState(false);

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem('soundStatus', isSoundPlaying.toString());
  }, [isSoundPlaying]);

  useEffect(() => {
    localStorage.setItem('musicStatus', isMusicPlaying.toString());
  }, [isMusicPlaying]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOver(true);
    }, 2500);
  }, []);

  return (
    <>
      {!isLoadingOver ? (
        <LoadingScreen />
      ) : (
        <>
          {difficulty === null ? (
            <StartMenu
              /* Cards */
              setCards={setCards}
              setDisplayedCards={setDisplayedCards}
              setCardsPerRound={setCardsPerRound}
              /* Rounds */
              setRounds={setRounds}
              /* Difficulty */
              setDifficulty={setDifficulty}
              /* Sound */
              isSoundPlaying={isSoundPlaying}
            />
          ) : (
            <GameScreen
              /* Cards */
              cards={cards}
              setCards={setCards}
              displayedCards={displayedCards}
              setDisplayedCards={setDisplayedCards}
              cardsPerRound={cardsPerRound}
              setCardsPerRound={setCardsPerRound}
              /* Rounds */
              rounds={rounds}
              currentRound={currentRound}
              setCurrentRound={setCurrentRound}
              /* Scores */
              bestScore={bestScore}
              setBestScore={setBestScore}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              /* Difficulty */
              setDifficulty={setDifficulty}
              /* Sound */
              isSoundPlaying={isSoundPlaying}
              /* Game */
              isGameOver={isGameOver}
              setIsGameOver={setIsGameOver}
              gameOverType={gameOverType}
              setGameOverType={setGameOverType}
            />
          )}

          {/* Footer is always shown after loading, regardless of screen */}
          <Footer
            /* Music */
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
            /* Sound */
            isSoundPlaying={isSoundPlaying}
            setIsSoundPlaying={setIsSoundPlaying}
          />
        </>
      )}

      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
      {isGameOver && <GameOver gameOverType={gameOverType} />}
    </>
  );
}

export default App;

/*
fix the game end screen
add the reset game button
fix the bug on the "win" (it auto wins after 3 guesses)
find another image or modify the design so the button wont cover the photo of birds (win)
*/