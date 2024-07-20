import { Drug } from "./Drug";

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Magic Pill", expiresIn, benefit);
  }
  updateBenefit() {
    // MagicPill never expires and never loses its benefit
  }
}
