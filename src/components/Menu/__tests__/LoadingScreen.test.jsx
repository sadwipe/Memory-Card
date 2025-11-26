import { screen, render } from "@testing-library/react"
import LoadingScreen from "../LoadingScreen"


describe("Loading Screen component", () => {
  it('expects to load a header: "Loading... 0%"', () => {
    render(<LoadingScreen onFinish={() => {}} />)
    const headerElement = screen.getByRole("heading", { level: 2 });
    expect(headerElement).toBeInTheDocument();
  })
})
