import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptionInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptionInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  // jest.fn().mockClear();
  // TODO feedback 只需要clear你mock的方法就可以了
  mockAcceptionInjection.mockClear();
  mockGetHasAntibodies.mockReset();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(mockAcceptionInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockReturnValueOnce(true);
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies.mockReturnValueOnce(false);
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
