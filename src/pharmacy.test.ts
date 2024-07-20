import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("generic drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit twice as fast after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 1)]);
    });

    it("should not decrease the benefit below 0", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);
    });
  });

  describe("Herbal Tea drug", () => {
    it("should decrease expiresIn and increase benefit", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 4)]);
    });

    it("should increase benefit twice as fast after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });

    it("should not increase the benefit above 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });
  });

  describe("Magic Pill drug", () => {
    it("should not decrease expiresIn and benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Fervex drug", () => {
    describe("when expiresIn > 10", () => {
      it("should decrease expiresIn and increase benefit", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 10, 4)]);
      });
    });
  });
});
