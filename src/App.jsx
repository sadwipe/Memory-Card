import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import Footer from './components/Footer/Footer';
import StartMenu from './components/Menu/StartMenu';
import GameScreen from './components/Game/GameScreen';
import LoadingScreen from './components/Menu/LoadingScreen';

import video from './assets/videos/background.mp4';

import clickSound from './assets/sounds/click-sound.mp3';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  const [cards, setCards] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [isLoadingOver, setIsLoadingOver] = useState(false);

  // For click sound
  const playClick = () => {
    if (isSoundPlaying) {
      const audio = new Audio(clickSound);
      audio.volume = 0.07;
      audio.play();
    }
  };

  useEffect(() => {
    if (difficulty) {
      localStorage.setItem('difficulty', difficulty);
    }
  }, [difficulty]);

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
              cards={cards}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              setCards={setCards}
              playClick={playClick}
            />
          ) : (
            <GameScreen
              cards={cards}
              setCards={setCards}
              playClick={playClick}
            />
          )}

          {/* Footer is always shown after loading, regardless of screen */}
          <Footer
            isMusicPlaying={isMusicPlaying}
            isSoundPlaying={isSoundPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
            setIsSoundPlaying={setIsSoundPlaying}
            playClick={playClick}
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
