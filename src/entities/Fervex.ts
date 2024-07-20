import { Drug } from "./Drug";

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Fervex", expiresIn, benefit);
  }
  updateBenefit() {
    this.benefit += 1;
    this.expiresIn -= 1;
  }
}
