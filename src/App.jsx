import { useState, useEffect, use } from 'react';

import Footer from './components/Footer/Footer';
import StartMenu from './components/Menu/StartMenu';
import GameScreen from './components/Game/GameScreen';
import LoadingScreen from './components/Menu/LoadingScreen';

import video from './assets/videos/background.mp4';

import clickSound from './assets/sounds/click-sound.mp3';

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
  const [difficulty, setDifficulty] = useState(null);
  const [isLoadingOver, setIsLoadingOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // For click sound
  const playClick = () => {
    if (isSoundPlaying) {
      const audio = new Audio(clickSound);
      audio.volume = 0.07;
      audio.play();
    }
  };

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
              cards={cards}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              setCards={setCards}
              playClick={playClick}
            />
          ) : (
            <GameScreen
              bestScore={bestScore}
              currentScore={currentScore}
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
