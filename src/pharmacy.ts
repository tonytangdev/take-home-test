import { Drug } from "./entities/Drug";

export class Pharmacy {
  constructor(public drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
    }

    return this.drugs;
  }
}
