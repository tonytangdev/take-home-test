import { Drug } from "./Drug";
import { HerbalTea } from "./HerbalTea";

export class Fervex extends HerbalTea {
  constructor(expiresIn: number, benefit: number) {
    super(expiresIn, benefit, "Fervex");
  }
  updateBenefit() {
    let amountOfBenefitToIncrease = this.computeAmountOfBenefitToDecrease();

    this.benefit += amountOfBenefitToIncrease;
    if (this.benefit > 50) {
      this.benefit = 50;
    }

    this.expiresIn -= 1;
  }

  protected computeAmountOfBenefitToDecrease(): number {
    if (this.expiresIn > 10) {
      return super.computeAmountOfBenefitToDecrease();
    }

    let amountOfBenefitToIncrease = 2;

    if (this.expiresIn <= 0) {
      amountOfBenefitToIncrease = -this.benefit;
    } else if (this.expiresIn <= 5) {
      amountOfBenefitToIncrease += 1;
    }

    return amountOfBenefitToIncrease;
  }
}
