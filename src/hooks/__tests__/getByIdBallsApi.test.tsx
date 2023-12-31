import { renderHook } from "@testing-library/react";
import useBallsApi from "../useBallsApi";
import { ballAddMock } from "../../mocks/ballsMock";
import { providerWrapper } from "../../testUtils/customWrapper";

describe("Given a useBallsApi custom hook", () => {
  const {
    result: {
      current: { loadSelectedBall },
    },
  } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

  describe("When it calls its getBallById method with the 'Harry Potter crew' ball id", () => {
    test("Then it should return 'Harry Potter crew' ball", async () => {
      const mockData = ballAddMock[0];
      const expectedByllId = "656241b0c4ddfcae991f0b13";

      const ball = await loadSelectedBall(expectedByllId);

      expect(ball).toStrictEqual(mockData);
    });
  });
});
