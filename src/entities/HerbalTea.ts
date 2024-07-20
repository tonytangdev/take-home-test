import { Drug } from "./Drug";

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Herbal Tea", expiresIn, benefit);
  }
  updateBenefit() {
    const amoutOfBenefitToIncrease = this.expiresIn <= 0 ? 2 : 1;
    this.benefit += amoutOfBenefitToIncrease;
    
    this.expiresIn -= 1;
  }
}
