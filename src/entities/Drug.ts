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
    const amoutOfBenefitToDescrease = this.computeAmoutOfBenefitToDecrease();
    this.benefit -= amoutOfBenefitToDescrease;
    if (this.benefit < 0) {
      this.benefit = 0;
    }

    this.expiresIn -= 1;
  }

  protected computeAmoutOfBenefitToDecrease(): number {
    return this.expiresIn <= 0 ? 2 : 1;
  }
}
