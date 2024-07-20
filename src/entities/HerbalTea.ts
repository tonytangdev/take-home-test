import { Drug } from "./Drug";

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number, name: string = "Herbal Tea") {
    super(name, expiresIn, benefit);
  }
  updateBenefit() {
    const amoutOfBenefitToIncrease = this.computeAmoutOfBenefitToDecrease();
    this.benefit += amoutOfBenefitToIncrease;

    if (this.benefit > 50) {
      this.benefit = 50;
    }

    this.expiresIn -= 1;
  }

  protected computeAmoutOfBenefitToDecrease(): number {
    return this.expiresIn <= 0 ? 2 : 1;
  }
}
