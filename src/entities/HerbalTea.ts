import { Drug } from "./Drug";

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Herbal Tea", expiresIn, benefit);
  }
  updateBenefit() {
    throw new Error("Method not implemented.");
  }
}
