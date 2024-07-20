export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit() {
    const amountOfBenefitToDescrease = this.computeAmountOfBenefitToDecrease();
    this.benefit -= amountOfBenefitToDescrease;
    if (this.benefit < 0) {
      this.benefit = 0;
    }

    this.expiresIn -= 1;
  }

  protected computeAmountOfBenefitToDecrease(): number {
    return this.expiresIn <= 0 ? 2 : 1;
  }
}
