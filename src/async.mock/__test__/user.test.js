import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    verifyPassword.mockImplementation(() => true);
    await expect(register("name", "password")).resolves.toEqual(
      expect.any(Object)
    );
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockImplementation(() => false);
    await expect(register("name", "password")).rejects.toThrow(
      expect.any(Object)
    );
  });
});
