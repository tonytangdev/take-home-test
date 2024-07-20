import { Drug } from "./Drug";
import { HerbalTea } from "./HerbalTea";

export class Fervex extends HerbalTea {
  constructor(expiresIn: number, benefit: number) {
    super(expiresIn, benefit, "Fervex");
  }
  updateBenefit() {
    if (this.expiresIn > 10) {
      super.updateBenefit();
      return;
    }

    let amoutOfBenefitToIncrease = this.computeAmoutOfBenefitToDecrease();

    this.benefit += amoutOfBenefitToIncrease;
    if (this.benefit > 50) {
      this.benefit = 50;
    }

    this.expiresIn -= 1;
  }

  protected computeAmoutOfBenefitToDecrease(): number {
    let amoutOfBenefitToIncrease = 2;

    if (this.expiresIn <= 0) {
      amoutOfBenefitToIncrease = -this.benefit;
    } else if (this.expiresIn <= 5) {
      amoutOfBenefitToIncrease += 1;
    }

    return amoutOfBenefitToIncrease;
  }
}
