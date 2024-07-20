import { Pharmacy } from "./pharmacy";
import { writeFile } from "fs";
import { Drug } from "./entities/Drug";
import { Fervex, HerbalTea, MagicPill } from "./entities";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40),
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(structuredClone(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
writeFile("output.json", JSON.stringify(log, null, 2), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
