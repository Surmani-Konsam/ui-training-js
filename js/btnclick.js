//all the dom elements
let shapes = document.querySelector(".shapes");
let next_btn = document.querySelector(".nxt_btn");
const circleTick = document.querySelector(".tick");
const triangleTick = document.querySelector(".triangle_tick");
const squareTick = document.querySelector(".square_tick");
const header = document.querySelector(".learning_header");
const mainContent = document.querySelector(".learning_content");

//object for storage.
//provided if we add one more figure we need to only define the area of the figure and its respective perimeter formula
let shape = {
  name: "",

  sideOrRadius: "",

  isRadius: true,

  radius: "",

  base: "",

  height: "",

  //area specific to each figures
  area: function () {
    if (this.isRadius) {
        //if this.isRadius will calculate the area of circle
      return 3.14 * (this.radius * this.radius);
    } else if (this.name === ".triangle") {
        //else trianlge
      return 0.433 * this.base * this.height;
    } else {
        //else square
      return this.base * this.base;
    }
  },

  //perimeter specific to each figures
  perimeter: function () {
    if (this.isRadius) {
        //if radius then it will calculate the perimeter of circle
      return 2 * 3.14 * this.radius;
    } else if (this.name === ".triangle") {
        //else triangle
      return 3 * this.base;
    } else {
        //else square
      return 4 * this.base;
    }
  },
};
//end of our global object.


//function to reload the page all again bind to btn 'btn_reload'.
function reload() {
  location.reload();
}

//table content created for displaying in the final page after retrieving the value from the local storage.
function tableContent() {
  if (shape.name === ".triangle") {
    //retrieving the object from the local storage and parse it back to object.
    const objectRetrieved = JSON.parse(localStorage.getItem(".triangle"));

    //defining table structure for the shapes.
    mainContent.innerHTML =
      `<div class='last_page'> ` +
      `<div class='last_page_triangle'></div>` +
      `<h1 class='triangle_header'>Equilateral Triangle</h1>` +
      `<div class='row_container'>` +
      `<div class='first_row row'>` +
      `<div class='box first_column'>SIDE</div>` +
      `<div class='middle box'>S</div>` +
      `<div class='length box last_column'>${objectRetrieved.side}</div>` +
      `</div>` +
      `<div class='second_row row'>` +
      `<div class='area box first_column'>AREA</div>` +
      `<div class='middle box'>0.43 * S * S</div>` +
      `<div class='area_msr box last_column'>${objectRetrieved.area}</div>` +
      `</div>` +
      `<div class='third_row row'>` +
      `<div class='perimeter box first_column'>PERIMETER</div>` +
      `<div class='middle box'>3 * S</div>` +
      `<div class='perim_value box last_column'>${objectRetrieved.perimeter}</div>` +
      `</div>` +
      `<button class='btn_reload' onclick='reload()'>START AGAIN</button>`;
    ("</div>");
  } else if (shape.name === ".circle") {
    //retrieving the object from the local storage and parse it back to object.
    const objectRetrieved = JSON.parse(localStorage.getItem(".circle"));
    mainContent.innerHTML =
      `<div class='last_page'> ` +
      `<div class='last_page_circle'></div>` +
      `<h1 class='circle_header'>CIRCLE</h1>` +
      `<div class='row_container'>` +
      `<div class='first_row row'>` +
      `<div class='box first_column'>RADIUS</div>` +
      `<div class='middle box'>r</div>` +
      `<div class='length box last_column'>${objectRetrieved.radius}</div>` +
      `</div>` +
      `<div class='second_row row'>` +
      `<div class='area box first_column'>AREA</div>` +
      `<div class='middle box'>πr²</div>` +
      `<div class='area_msr box last_column'>${objectRetrieved.area}</div>` +
      `</div>` +
      `<div class='third_row row'>` +
      `<div class='perimeter box first_column'>PERIMETER</div>` +
      `<div class='middle box'>2πr</div>` +
      `<div class='perim_value box last_column'>${objectRetrieved.perimeter}</div>` +
      `</div>` +
      `<button class='btn_reload' onclick='reload()'>START AGAIN</button>`;
    ("</div>");
  } else {
    //retrieving the object from the local storage and parse it back to object.
    const objectRetrieved = JSON.parse(localStorage.getItem(".square"));
    mainContent.innerHTML =
      `<div class='last_page'> ` +
      `<div class='last_page_square'></div>` +
      `<h1 class='square_header'>SQUARE</h1>` +
      `<div class='row_container'>` +
      `<div class='first_row row'>` +
      `<div class='box first_column'>SIDE</div>` +
      `<div class='middle box'>S</div>` +
      `<div class='length box last_column'>${objectRetrieved.side}</div>` +
      `</div>` +
      `<div class='second_row row'>` +
      `<div class='area box first_column'>AREA</div>` +
      `<div class='middle box'>S * S</div>` +
      `<div class='area_msr box last_column'>${objectRetrieved.area}</div>` +
      `</div>` +
      `<div class='third_row row'>` +
      `<div class='perimeter box first_column'>PERIMETER</div>` +
      `<div class='middle box'>4 * S</div>` +
      `<div class='perim_value box last_column'>${objectRetrieved.perimeter}</div>` +
      `</div>` +
      `<button class='btn_reload' onclick='reload()'>START AGAIN</button>`;
    ("</div>");
  }
}

//common function for reuse in the nextBtn function.
function calculateAreaAndObjectOfTheShape() {
    //if triangle
    if (shape["name"] === ".triangle") {
    header.textContent = "2. Enter Side (Base & Height)";
    shapes.style.cssText =
        "display:inline-block; text-align:center; color : white";
    shapes.innerHTML =
        "Enter Base <input type='number' class='base'/> <div  class='height_parent'>Enter Height <input type='number'  class='height'/></div>";
    next_btn.textContent = "CALCULATE";

    /*
    next_btn.removeEventListener("click", calculateAreaAndObjectOfTheShape),to stop listening
    for clicks that would trigger the calculateAreaAndObjectOfTheShape function.
    */
    next_btn.removeEventListener("click", calculateAreaAndObjectOfTheShape);

    next_btn.addEventListener("click", () => {
        shape["height"] = document.querySelector(".height").value; // Set shape["height"] here
        shape["base"] = document.querySelector(".base").value;
        const triangleObject = {
        side: shape["base"] + " cm",
        area: shape.area() + " sq cm",
        perimeter: shape.perimeter() + " cm",
        };

        localStorage.setItem(shape["name"], JSON.stringify(triangleObject));
        tableContent();
    });
  } 
  //if circle
  else if (shape["name"] === ".circle") {
    header.textContent = "2. Enter Radius";
    shapes.style.cssText =
      "display:inline-block; text-align:center; color : white";
    shapes.innerHTML = "<input type='number' class='radius' style='' /> ";

    next_btn.textContent = "CALCULATE";

    next_btn.removeEventListener("click", calculateAreaAndObjectOfTheShape);

    next_btn.addEventListener("click", () => {
      shape["radius"] = document.querySelector(".radius").value; // Set shape["radius"] here
      console.log("object", shape);
      const circleObject = {
        radius: shape["radius"] + " cm",
        area: shape.area() + " sq cm",
        perimeter: shape.perimeter() + " cm",
      };

      localStorage.setItem(shape["name"], JSON.stringify(circleObject));
      tableContent();
    });
  }
  //if Square
   else {
    header.textContent = "2. Enter Side";
    shapes.style.cssText =
      "display:inline-block; text-align:center; color : white";
    shapes.innerHTML = "<input type='number' class='side' /> ";

    next_btn.textContent = "CALCULATE";

    next_btn.removeEventListener("click", calculateAreaAndObjectOfTheShape);

    next_btn.addEventListener("click", () => {
      shape["base"] = document.querySelector(".side").value; // Set shape["radius"] here
      console.log("object", shape);
      const circleObject = {
        side: shape["base"] + " cm",
        area: shape.area() + " sq cm",
        perimeter: shape.perimeter() + " cm",
      };

      localStorage.setItem(shape["name"], JSON.stringify(circleObject));
      tableContent();
    });
  }
}
//end of calculateAreaAndObjectOfTheShape().

//nextBtn function
function nextBtn(shapeName, isRadius) {
  shape["name"] = shapeName;
  shape["isRadius"] = isRadius;
  next_btn.textContent = "NEXT";
  next_btn.style.cssText =
    "border : 2px solid white; background-color: black; color: white; padding-top : 8px;" +
    " box-sizing: border-box; text-align: center; cursor: pointer";
//this event will be removed inside the function calculateAreaAndObjectOfTheShape
  next_btn.addEventListener("click", calculateAreaAndObjectOfTheShape);
}
//end of nextBtn function

//toggleTick function
function toggleTick(shape, shapeName, isRadius) {
  console.log("class name", shapeName, "isRadius :", isRadius);
  const ticks = document.querySelectorAll(".tick");
  ticks.forEach((tick) => {
    tick.style.opacity = "0";
  });
  const tick = shape.querySelector(".tick"); //again selecting to make the opacity set to 1.
  tick.style.opacity = "1"; //this will make the check image opacity from 0 to 1 with a transition set to 0.3 secs.
  nextBtn(shapeName, isRadius); //here concept of closure will come... it will search for value of currentShape in its parent environmennt.
}
//end of toggleTick function

//for triggering click event when clicked over the displaye shapes.
document.querySelector(".circle").addEventListener("click", function () {
  toggleTick(this, ".circle", true);
});


//for triggering click event when clicked over the displaye shapes.
document.querySelector(".triangle").addEventListener("click", function () {
  toggleTick(this, ".triangle", false);
});


//for triggering click event when clicked over the displaye shapes.
document.querySelector(".square").addEventListener("click", function () {
  toggleTick(this, ".square", false);
});
