import { vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import StartMenu from "../StartMenu";

import {
  getDisplayedCards,
  getCardsByDifficulty,
  cardsPerRoundByDifficulty
} from "../../../utils/game.js";
import { playClick } from "../../../utils/sound";

vi.mock("../../../utils/game.js", () => ({
  getDisplayedCards: vi.fn(),
  getCardsByDifficulty: vi.fn(),
  cardsPerRoundByDifficulty: vi.fn()
}));

vi.mock("../../../utils/sound", () => ({
  playClick: vi.fn()
}));

describe("Start Menu component", () => {
  it("clicking Easy sets up the game correctly", () => {
    const setCards = vi.fn();
    const setDisplayedCards = vi.fn();
    const setCardsPerRound = vi.fn();
    const setRounds = vi.fn();
    const setDifficulty = vi.fn();

    getCardsByDifficulty.mockReturnValue([
      { id: 1, name: "Crow", src: "crow.jpg" }
    ]);

    cardsPerRoundByDifficulty.mockReturnValue(1);
    getDisplayedCards.mockReturnValue([{ id: 1 }]);

    render(
      <StartMenu
        setCards={setCards}
        setDisplayedCards={setDisplayedCards}
        setCardsPerRound={setCardsPerRound}
        setRounds={setRounds}
        setDifficulty={setDifficulty}
        isSoundPlaying={true}
      />
    );

    const button = screen.getByRole("button", { name: /easy/i });
    fireEvent.click(button);

    expect(setDifficulty).toHaveBeenCalledWith("easy");
    expect(setCards).toHaveBeenCalledTimes(1);
    expect(setCardsPerRound).toHaveBeenCalledWith(1);
    expect(setRounds).toHaveBeenCalledWith(1);
    expect(setDisplayedCards).toHaveBeenCalledTimes(1);
    expect(playClick).toHaveBeenCalledWith(true);
  });
});
