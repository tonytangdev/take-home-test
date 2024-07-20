import { Drug } from "./Drug";

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Dafalgan", expiresIn, benefit);
  }
  updateBenefit() {
    super.updateBenefit();
  }

  protected computeAmountOfBenefitToDecrease() {
    return super.computeAmountOfBenefitToDecrease() * 2;
  }
}
