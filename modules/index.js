// Your code goes here!
import { calculateAspectRatio } from "./aspect-ratio.js";

import { modulo, percentage, percentageOf, difference } from "./percentage.js";

const moduloForm = document.getElementById("modulo-form");
moduloForm.addEventListener("change", function () {
  const modulo1 = document.getElementById("modulo_1").value;
  const modulo2 = document.getElementById("modulo_2").value;
  let result = modulo(modulo1, modulo2);
  if (result) {
    document.getElementById("modulo_result").value = result;
  } else {
    document.getElementById("modulo_result").value = 0;
  }
});

const percentageForm = document.getElementById("percentage-form");
percentageForm.addEventListener("change", function () {
  const percentage1 = document.getElementById("percentage_1").value;
  const percentage2 = document.getElementById("percentage_2").value;
  let result2 = percentage(percentage1, percentage2);
  if (result2) {
    document.getElementById("percentage_result").value = result2;
  } else {
    document.getElementById("percentage_result").value = 0;
  }
});

const percentageOfForm = document.getElementById("percentageOf-form");
percentageOfForm.addEventListener("change", function () {
  const percentage3 = document.getElementById("percentageOf_1").value;
  const percentage4 = document.getElementById("percentageOf_2").value;
  let result3 = percentageOf(percentage3, percentage4);
  if (result3) {
    document.getElementById("percentageOf_result").value = result3;
  } else {
    document.getElementById("percentageOf_result").value = 0;
  }
});

const differenceOf = document.getElementById("difference-form");
differenceOf.addEventListener("change", function () {
  const difference1 = document.getElementById("difference_1").value;
  const difference2 = document.getElementById("difference_2").value;
  let result4 = difference(difference1, difference2);
  if (result4) {
    document.getElementById("difference_result").value = result4;
  } else {
    document.getElementById("difference_result").value = 0;
  }
});
