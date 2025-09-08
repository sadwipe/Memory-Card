import { cards } from '../data/initialCardData';

// Fisher–Yates shuffle algorithm
export function shuffle(array) {
  const result = [];

  for (let i = 0; i < array.length; ++i) {
    const j = Math.floor(Math.random() * (i + 1));

    if (j !== i) {
      result[i] = result[j];
    }

    result[j] = array[i];
  }

  return result;
}

// Returns 8, 10 or 12 random cards depending on the difficulty
export function getCardsByDifficulty(difficulty) {
  const num = difficulty === 'easy' ? 8 : difficulty === 'medium' ? 10 : 12;

  // Shuffle the cards before slicing so we don't always play with the same ones
  return shuffle(cards).slice(0, num);
}

// 3 -> easy; 4 -> medium; 5 -> hard
export function cardsPerRoundByDifficulty(difficulty) {
  return difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 5;
}

export function getDisplayedCards(cards, cardsPerRound) {
  const unclicked = cards.filter((card) => !card.isClicked);
  const clicked = cards.filter((card) => card.isClicked);

  if (unclicked.length === 0) {
    // all cards clicked, just return random ones
    return shuffle(cards).slice(0, cardsPerRound);
  }

  const selectedUnclicked =
    unclicked[Math.floor(Math.random() * unclicked.length)];

  const remaining = shuffle(cards.filter((c) => c !== selectedUnclicked)).slice(
    0,
    cardsPerRound - 1,
  );

  return shuffle([selectedUnclicked, ...remaining]);
}
