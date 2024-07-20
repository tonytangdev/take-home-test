import { Drug } from "./Drug";

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Fervex", expiresIn, benefit);
  }
  updateBenefit() {
    let amoutOfBenefitToIncrease = 1;
    if (this.expiresIn <= 0) {
      amoutOfBenefitToIncrease = -this.benefit;
    } else {
      if (this.expiresIn <= 10) {
        amoutOfBenefitToIncrease += 1;
      }
      if (this.expiresIn <= 5) {
        amoutOfBenefitToIncrease += 1;
      }
    }
    this.benefit += amoutOfBenefitToIncrease;
    this.expiresIn -= 1;
  }
}
