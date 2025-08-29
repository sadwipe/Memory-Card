import loadingGif from '../../assets/videos/parrot-loading.gif';

import '../../styles/LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <img src={loadingGif} alt='Ostrich Running Loading' />
      <h2>Loading...</h2>
    </div>
  );
}
