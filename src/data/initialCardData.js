import crowImg from '../assets/images/crow.jpg';
import duckImg from '../assets/images/duck.jpg';
import flamingoImg from '../assets/images/flamingo.jpg';
import parrotImg from '../assets/images/parrot.jpg';
import pelicanImg from '../assets/images/pelican.jpg';
import penguinImg from '../assets/images/penguin.jpg';
import pigeonImg from '../assets/images/pigeon.jpg';
import quailImg from '../assets/images/quail.jpg';
import ravenImg from '../assets/images/raven.jpg';
import seagullImg from '../assets/images/seagull.jpg';
import storkImg from '../assets/images/stork.jpg';
import woodpeckerImg from '../assets/images/woodpecker.jpg';

export const cards = Object.freeze([
  {
    id: 1,
    name: 'Crow',
    src: crowImg,
  },
  {
    id: 2,
    name: 'Duck',
    src: duckImg,
  },
  {
    id: 3,
    name: 'Flamingo',
    src: flamingoImg,
  },
  {
    id: 4,
    name: 'Parrot',
    src: parrotImg,
  },
  {
    id: 5,
    name: 'Pelican',
    src: pelicanImg,
  },
  {
    id: 6,
    name: 'Penguin',
    src: penguinImg,
  },
  {
    id: 7,
    name: 'Pigeon',
    src: pigeonImg,
  },
  {
    id: 8,
    name: 'Quail',
    src: quailImg,
  },
  {
    id: 9,
    name: 'Raven',
    src: ravenImg,
  },
  {
    id: 10,
    name: 'Seagull',
    src: seagullImg,
  },
  {
    id: 11,
    name: 'Stork',
    src: storkImg,
  },
  {
    id: 12,
    name: 'Woodpecker',
    src: woodpeckerImg,
  },
]);

export const birdImages = cards.map(el => {
  return el.src;
})
