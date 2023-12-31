import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import BallsHomePage from "./BallsHomePage";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { waitFor } from "@testing-library/react";

describe("Given a BallsHomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Mark your have and lack'", () => {
      const expectedTitle = "Mark your have and lack";

      customRender(<BallsHomePage />);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it's rendered but the list of balls doesn't appear", () => {
    test("Then it show the error message 'Nerdmas Balls could not be loaded'", async () => {
      const expectedErrorMessage = "Nerdmas Balls could not be loaded";

      server.use(...errorHandlers);
      customRender(<BallsHomePage />);

      await waitFor(() => {
        const errorText = screen.getByText(expectedErrorMessage);
        expect(errorText).toBeInTheDocument();
      });
    });
  });
});
