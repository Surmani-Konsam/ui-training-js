import { paymentMethods } from "./paymentConstants.js";
import { shapes,next_btn,header,mainContent } from "./domConstants.js";

//toggleTick function
export function toggleTick(shape, shapeName) {
    const ticks = document.querySelectorAll(".tick");
    ticks.forEach((tick) => {
      tick.style.opacity = "0";
    });
    const tick = shape.querySelector(".tick"); //again selecting to make the opacity set to 1.
    tick.style.opacity = "1"; //this will make the check image opacity from 0 to 1 with a transition set to 0.3 secs.
    nextBtn(shapeName); //here concept of closure will come... it will search for value of currentShape in its parent environmennt.
  }
  //end of toggleTick function
  
  //nextBtn function
  function nextBtn(shapeName) {
    shape["name"] = shapeName;
    next_btn.textContent = "NEXT";
    next_btn.classList.add("next_btn_style");
    //this event will be removed inside the function calculateAreaAndObjectOfTheShape
    next_btn.addEventListener("click", calculateAreaAndObjectOfTheShape);
  }
  //end of nextBtn function
  
  //object for storage.
  //provided if we add one more figure we need to only define the area of the figure and its respective perimeter formula
  let shape = {
    name: "",
  
    sideOrRadius: "",
  
    radius: "",
  
    base: "",
  
    height: "",
  
    //area specific to each figures
    area: function () {
      switch (this.name) {
        case ".circle":
          return Math.ceil(3.14 * (this.radius * this.radius));
        case ".triangle":
          return Math.ceil(0.433 * this.base * this.height);
        case ".square":
          return Math.ceil(this.base * this.base);
      }
    },
  
    //perimeter specific to each figures
    perimeter: function () {
      switch (this.name) {
        case ".circle":
          return Math.ceil(2 * 3.14 * this.radius);
        case ".triangle":
          return Math.ceil(3 * this.base);
        case ".square":
          return Math.ceil(4 * this.base);
      }
    },
  };
  //end of our global object.
  
  
  //common function for reuse in the nextBtn function.
  function calculateAreaAndObjectOfTheShape() {
    //if triangle
    if (shape["name"] === ".triangle") {
      header.textContent = paymentMethods.filter(
        (x) => x.key === ".triangle"
      )[0].header;
  
      shapes.classList.add("shapes_triangle_style");
  
      const baseTextNode = document.createTextNode("Enter Base ");
      const triangleInputTag = document.createElement("input");
      triangleInputTag.setAttribute("type", "number");
      triangleInputTag.classList.add("base");
      triangleInputTag.id = "triangle_input";
  
      const heightParentDiv = document.createElement("div");
      heightParentDiv.classList.add("height_parent");
  
      const heightLabel = document.createTextNode("Enter Height ");
  
      // Create the input field for height
      const heightInput = document.createElement("input");
      heightInput.setAttribute("type", "number");
      heightInput.classList.add("height");
      heightInput.id = "triangle_height";
  
      // Append the label and input to the 'height_parent' div
      heightParentDiv.appendChild(heightLabel);
      heightParentDiv.appendChild(heightInput);
  
  
      shapes.innerHTML = "";
  
      shapes.appendChild(baseTextNode);
      shapes.appendChild(triangleInputTag);
      shapes.appendChild(heightParentDiv);
  
  
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
      header.textContent = paymentMethods.filter(
        (x) => x.key === ".circle"
      )[0].header;
  
  
      // shapes.classList.add("shape_circle_style");
      const circleInputTag = document.createElement('input');
      circleInputTag.setAttribute('type','number');
      circleInputTag.classList.add('radius');
      circleInputTag.id = 'circle_input';
  
      shapes.innerHTML = '';
      shapes.append(circleInputTag);
  
      // const circleInnerHtml =
      //   "<input type='number' class='radius' id='circle_input'/> ";
      // shapes.innerHTML = circleInnerHtml;
  
      next_btn.textContent = "CALCULATE";
  
      next_btn.removeEventListener("click", calculateAreaAndObjectOfTheShape);
  
      next_btn.addEventListener("click", () => {
        shape["radius"] = document.querySelector(".radius").value; // Set shape["radius"] here
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
      header.textContent = paymentMethods.filter(
        (x) => x.key === ".square"
      )[0].header;
      shapes.classList.add("shape_square_style");
  
      const squareInputTag = document.createElement('input');
      squareInputTag.type = 'number';
      squareInputTag.classList.add('side');
      squareInputTag.id = 'square_input';
  
      shapes.innerHTML = '';
      shapes.append(squareInputTag);
  
      // const squareInnerHtml =
      //   "<input type='number' class='side' id='square_input'/>";
      // shapes.innerHTML = squareInnerHtml;
  
      next_btn.textContent = "CALCULATE";
  
      next_btn.removeEventListener("click", calculateAreaAndObjectOfTheShape);
  
      next_btn.addEventListener("click", () => {
        shape["base"] = document.querySelector(".side").value; // Set shape["radius"] here
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
  
  //table content created for displaying in the final page after retrieving the value from the local storage.
  function tableContent() {
    if (shape.name === ".triangle") {
      //retrieving the object from the local storage and parse it back to object.
      let objectRetrieved = JSON.parse(localStorage.getItem(".triangle"));
      let side = objectRetrieved.side;
      innerHtmlContent(
        "Equilateral Triangle",
        "SIDE",
        "0.433 * S * S",
        "3 * S",
        "s",
        objectRetrieved,
        side,
        "last_page_triangle"
      );
    } else if (shape.name === ".circle") {
      //retrieving the object from the local storage and parse it back to object.
      let objectRetrieved = JSON.parse(localStorage.getItem(".circle"));
      let side = objectRetrieved.radius;
      innerHtmlContent(
        "Circle",
        "RADIUS",
        "π r2",
        "2 π r",
        "r",
        objectRetrieved,
        side,
        "last_page_circle"
      );
    } else {
      //retrieving the object from the local storage and parse it back to object.
      let objectRetrieved = JSON.parse(localStorage.getItem(".square"));
      let side = objectRetrieved.side;
      innerHtmlContent(
        "Square",
        "SIDE",
        "S * S",
        "4 * S",
        "s",
        objectRetrieved,
        side,
        "last_page_square"
      );
    }
  }
  
  //function to reload the page all again bind to btn 'btn_reload'.
  function reload() {
    location.reload();
  }
  
  function innerHtmlContent(
    shapeHeader,
    shapeSide,
    area,
    perimeter,
    sideSymbol,
    objectRetrieved,
    side,
    shapeClass
  ) {
    console.log(objectRetrieved);
    const lastPageDiv = document.createElement("div");
    lastPageDiv.classList.add("last_page");
  
    // Create a div element with the specified shapeClass
    const shapeDiv = document.createElement("div");
    shapeDiv.classList.add(shapeClass);
  
    // Create an h1 element with class 'triangle_header' and set the shapeHeader text
    const headerElement = document.createElement("h1");
    headerElement.classList.add("triangle_header");
    headerElement.textContent = shapeHeader;
  
    // Create a div element with class 'row_container'
    const rowContainerDiv = document.createElement("div");
    rowContainerDiv.classList.add("row_container");
  
    // Create first row elements
    const firstRowDiv = document.createElement("div");
    firstRowDiv.classList.add("first_row", "row");
  
    const firstColumnDiv = document.createElement("div");
    firstColumnDiv.classList.add("box", "first_column");
    firstColumnDiv.textContent = shapeSide;
  
    const middleDiv = document.createElement("div");
    middleDiv.classList.add("middle", "box");
    middleDiv.textContent = sideSymbol;
    // console.log('side symbol',sideSymbol); everything is good till here.
  
    const lastColumnDiv = document.createElement("div");
    lastColumnDiv.classList.add("length", "box", "last_column");
    lastColumnDiv.textContent = side;
    // console.log('side :',side);
  
    //first row all appended here
    firstRowDiv.appendChild(firstColumnDiv);
    firstRowDiv.appendChild(middleDiv);
    firstRowDiv.appendChild(lastColumnDiv);
  
    // Create second row elements
    const secondRowDiv = document.createElement("div");
    secondRowDiv.classList.add("second_row", "row");
  
    const areaColumnDiv = document.createElement("div");
    areaColumnDiv.classList.add("area", "box", "first_column");
    areaColumnDiv.textContent = "AREA";
  
    const areaMiddleDiv = document.createElement("div");
    areaMiddleDiv.classList.add("middle", "box");
    areaMiddleDiv.textContent = area;
  
    const areaValueDiv = document.createElement("div");
    areaValueDiv.classList.add("area_msr", "box", "last_column");
    areaValueDiv.textContent = objectRetrieved.area;
  
    secondRowDiv.appendChild(areaColumnDiv);
    secondRowDiv.appendChild(areaMiddleDiv);
    secondRowDiv.appendChild(areaValueDiv);
  
    // Create third row elements
    const thirdRowDiv = document.createElement("div");
    thirdRowDiv.classList.add("third_row", "row");
  
    const perimeterColumnDiv = document.createElement("div");
    perimeterColumnDiv.classList.add("perimeter", "box", "first_column");
    perimeterColumnDiv.textContent = "PERIMETER";
  
    const perimeterMiddleDiv = document.createElement("div");
    perimeterMiddleDiv.classList.add("middle", "box");
    perimeterMiddleDiv.textContent = perimeter;
  
    const perimeterValueDiv = document.createElement("div");
    perimeterValueDiv.classList.add("perim_value", "box", "last_column");
    perimeterValueDiv.textContent = objectRetrieved.perimeter;
  
    thirdRowDiv.appendChild(perimeterColumnDiv);
    thirdRowDiv.appendChild(perimeterMiddleDiv);
    thirdRowDiv.appendChild(perimeterValueDiv);
  
    // Create the reload button
    const reloadButton = document.createElement("button");
    reloadButton.classList.add("btn_reload");
    reloadButton.textContent = "START AGAIN";
    reloadButton.addEventListener("click", reload);
  
    // Append the elements in the correct order
    rowContainerDiv.appendChild(firstRowDiv);
    rowContainerDiv.appendChild(secondRowDiv);
    rowContainerDiv.appendChild(thirdRowDiv);
    rowContainerDiv.appendChild(reloadButton);
  
    lastPageDiv.appendChild(shapeDiv);
    lastPageDiv.appendChild(headerElement);
    lastPageDiv.appendChild(rowContainerDiv);
  
    // Clear mainContent before appending
    mainContent.innerHTML = "";
  
    // Append lastPageDiv to mainContent
    mainContent.appendChild(lastPageDiv);
  }
  