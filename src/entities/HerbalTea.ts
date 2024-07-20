import { Drug } from "./Drug";

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number, name: string = "Herbal Tea") {
    super(name, expiresIn, benefit);
  }
  updateBenefit() {
    const amountOfBenefitToIncrease = this.computeAmountOfBenefitToIncrease();
    this.benefit += amountOfBenefitToIncrease;

    if (this.benefit > 50) {
      this.benefit = 50;
    }

    this.expiresIn -= 1;
  }

  protected computeAmountOfBenefitToIncrease(): number {
    return this.expiresIn <= 0 ? 2 : 1;
  }
}
