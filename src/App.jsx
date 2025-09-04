import { useState, useEffect } from 'react';

import Footer from './components/Footer/Footer';
import StartMenu from './components/Menu/StartMenu';
import GameScreen from './components/Game/GameScreen';
import LoadingScreen from './components/Menu/LoadingScreen';

import video from './assets/videos/background.mp4';

function App() {
  // Both music/sound states are initialized using localStorage values
  // So user preferences persist across page reloads.
  const [isMusicPlaying, setIsMusicPlaying] = useState(() => {
    const saved = localStorage.getItem('musicStatus');
    return saved !== null ? saved === 'true' : false;
  });

  const [isSoundPlaying, setIsSoundPlaying] = useState(() => {
    const saved = localStorage.getItem('soundStatus');
    return saved !== null ? saved === 'true' : true;
  });

  const [cards, setCards] = useState([]);

  const [cardsPerRound, setCardsPerRound] = useState(null);

  const [difficulty, setDifficulty] = useState(null);

  const [rounds, setRounds] = useState(null);
  const [currentRound, setCurrentRound] = useState(0);

  const [isLoadingOver, setIsLoadingOver] = useState(false);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
              isSoundPlaying={isSoundPlaying}
              setCardsPerRound={setCardsPerRound}
              setRounds={setRounds}
              setDifficulty={setDifficulty}
              setCards={setCards}
            />
          ) : (
            <GameScreen
              isSoundPlaying={isSoundPlaying}
              setCardsPerRound={setCardsPerRound}
              cardsPerRound={cardsPerRound}
              setDifficulty={setDifficulty}
              bestScore={bestScore}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              cards={cards}
              setCards={setCards}
              rounds={rounds}
              currentRound={currentRound}
            />
          )}

          {/* Footer is always shown after loading, regardless of screen */}
          <Footer
            isMusicPlaying={isMusicPlaying}
            isSoundPlaying={isSoundPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
            setIsSoundPlaying={setIsSoundPlaying}
          />
        </>
      )}

      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
    </>
  );
}

export default App;
