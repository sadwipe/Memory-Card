import { useState, useEffect } from "react";

import loadingGif from "../../assets/videos/parrot-loading.gif";
import { birdImages } from "../../data/initialCardData";

import "../../styles/LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let completed = 0;

    const promises = birdImages.map(url => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          completed++;
          setProgress(
            Math.round((completed / birdImages.length) * 100)
          );
          resolve();
        };
        img.onerror = resolve;
      });
    });

    Promise.all(promises).then(() => {
      onFinish();
    });
  }, []);

  return (
    <div className="loading-screen">
      <img src={loadingGif} alt="Ostrich Running Loading" />
      <h2>Loading... {progress}%</h2>
    </div>
  );
}
