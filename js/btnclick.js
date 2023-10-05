import { toggleTick } from "./function.js";

//for triggering click event when clicked over the displaye shapes.
document.querySelector(".circle").addEventListener("click", function () {
  toggleTick(this, ".circle");
});

//for triggering click event when clicked over the displaye shapes.
document.querySelector(".triangle").addEventListener("click", function () {
  toggleTick(this, ".triangle");
});

//for triggering click event when clicked over the displaye shapes.
document.querySelector(".square").addEventListener("click", function () {
  toggleTick(this, ".square");
});

