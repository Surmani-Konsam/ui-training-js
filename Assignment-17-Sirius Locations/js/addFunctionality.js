import { APP_CONSTANTS } from "../../constants/constants.js";

/*
 * Function to addContent
 * @param {*} btnId {this will check the btnId when clicked on any button available on the ABOUT US page}
 */
function addContent(btnId) {
  switch (btnId) {
    case APP_CONSTANTS.SELECTORSIDS.ABOUTUS:
      APP_CONSTANTS.SELECTORS.CONTENTID.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK;
      APP_CONSTANTS.SELECTORS.COUNTRYLIST.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      APP_CONSTANTS.SELECTORS.ACCORDIANCONTAINERID.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      break;
    case APP_CONSTANTS.SELECTORSIDS.SOLUTIONS:
      APP_CONSTANTS.SELECTORS.ACCORDIANCONTAINERID.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK;
      APP_CONSTANTS.SELECTORS.CONTENTID.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      APP_CONSTANTS.SELECTORS.COUNTRYLIST.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      accordianFunction();
      break;
    case APP_CONSTANTS.SELECTORSIDS.LOCATIONS:
      APP_CONSTANTS.SELECTORS.COUNTRYLIST.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK;
      APP_CONSTANTS.SELECTORS.CONTENTID.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      APP_CONSTANTS.SELECTORS.ACCORDIANCONTAINERID.style.display =
        APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      countryListAssignment();
      break;
    default:
      break;
  }
}

/*
 * Function to populate article tag with className : countryList
 */
function countryListAssignment() {
  APP_CONSTANTS.SELECTORS.COUNTRYLIST.style.display =
    APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK;
  fetch("./data/locations.json")
    .then((response) => {
      //if response is not ok then throw error
      if (!response.ok) {
        throw new Error(APP_CONSTANTS.ERRORCONSTANTS.ERRORCONSTS);
      }
      return response.json();
    })
    .then((data) => {
      let rowDiv;
      let rowDivCountry;
      let rowDivCity;
      let rowDivContact;
      let countryName;
      let flagImage;
      appendChildFunction(
        data,
        rowDiv,
        rowDivCountry,
        rowDivCity,
        rowDivContact,
        countryName,
        flagImage
      );
    })
    .catch((error) => {
      //if there is error in reading the json file will catch the error and log it to the console.
      console.error(APP_CONSTANTS.ERRORCONSTANTS.FETCHERROR, error);
    });
}

/*
 * Function to perform accordian function on page Solutions
 */
function accordianFunction() {
  APP_CONSTANTS.SELECTORS.ACCORDIANTOGGLEFIRSTBLOCK[0].nextElementSibling.style.display =
    APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK;
  for (let i = 1; i < APP_CONSTANTS.SELECTORS.ACC.length; i++) {
    APP_CONSTANTS.SELECTORS.ACC[i].nextElementSibling.style.display =
      APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
  }
  let i;

  for (i = 0; i < APP_CONSTANTS.SELECTORS.ACC.length; i++) {
    APP_CONSTANTS.SELECTORS.ACC[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK) {
        panel.style.display = APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
      } else {
        panel.style.display = APP_CONSTANTS.DISPLAYCONSTANTS.BLOCK;
        // panel.style.opacity = 0;
        // panel.style.transition = "opacity 0.5s ease";
      }
    });
  }
}

/*
 * Function to createElement
 * @param {*} btnId {this will check the btnId when clicked on any button available on the ABOUT US page}
 * @param {*} data
 * @param {*} rowDiv
 * @param {*} rowDivCountry
 * @param {*} rowDivCity
 * @param {*} rowDivContact
 * @param {*} countryName
 * @param {*} flagImage
 */
function appendChildFunction(
  data,
  rowDiv,
  rowDivCountry,
  rowDivCity,
  rowDivContact,
  countryName,
  flagImage
) {
  data.forEach((element, index) => {
    rowDiv = document.createElement("div");
    countryName = document.createElement("div");
    flagImage = document.createElement("img");
    rowDivCountry = document.createElement("div");
    rowDivContact = document.createElement("div");
    rowDivCity = document.createElement("div");

    countryName.innerText = element.country;
    countryNameCityNameAlignment(
      flagImage,
      element.country,
      rowDivCountry,
      element.city
    );

    rowDivCity.innerText = element.city;
    rowDivCity.style.width = "140px";
    rowDivCity.style.textAlign = "left";
    rowDivContact.innerText = element.contact;

    addClassList(
      countryName,
      flagImage,
      rowDivCountry,
      rowDivCity,
      rowDivContact,
      rowDiv
    );

    oddAndEvenIndexBackgroundColor(
      index,
      rowDiv,
      rowDivCountry,
      countryName,
      rowDivCity,
      rowDivContact
    );

    if (element.city === "Chennai") {
      rowDivCity.classList.add(APP_CONSTANTS.CLASSLIST.CITYALIGNMENT);
    }

    appendChild(
      rowDivCountry,
      countryName,
      flagImage,
      rowDiv,
      rowDivCity,
      rowDivContact,
      APP_CONSTANTS.SELECTORS.CONTENTFRAGMENT,
      APP_CONSTANTS.SELECTORS.COUNTRYLIST
    );
  });
}

/*
 * Function to appendChild
 * @param {*} rowDiv
 * @param {*} rowDivCountry
 * @param {*} rowDivCity
 * @param {*} rowDivContact
 * @param {*} countryName
 * @param {*} flagImage
 * @param {*} contentFragment
 *  @param {*} countryList
 */
function appendChild(
  rowDivCountry,
  countryName,
  flagImage,
  rowDiv,
  rowDivCity,
  rowDivContact,
  contentFragment,
  countryList
) {
  rowDivCountry.appendChild(countryName);
  rowDivCountry.appendChild(flagImage);
  rowDiv.appendChild(rowDivCountry);
  rowDiv.appendChild(rowDivCity);
  rowDiv.appendChild(rowDivContact);
  contentFragment.appendChild(rowDiv);
  countryList.append(contentFragment);
}

/*
 * Function to add classList to the createdElement
 * @param {*} rowDiv
 * @param {*} rowDivCountry
 * @param {*} rowDivCity
 * @param {*} rowDivContact
 * @param {*} countryName
 * @param {*} flagImage
 */
function addClassList(
  countryName,
  flagImage,
  rowDivCountry,
  rowDivCity,
  rowDivContact,
  rowDiv
) {
  countryName.classList.add(APP_CONSTANTS.CLASSLIST.COUNTRYNAME);
  countryName.classList.add("adjustAlignment");
  flagImage.classList.add(APP_CONSTANTS.CLASSLIST.IMAGESTYLE);
  rowDivCountry.classList.add(APP_CONSTANTS.CLASSLIST.COUNTRYSTYLE);
  rowDivCity.classList.add("cityAlignment");
  rowDivContact.classList.add("contactAlignment");
  rowDiv.classList.add(APP_CONSTANTS.CLASSLIST.ROW);
}

/*
 * Function to check if index is odd or even and then add classList for background color change
 * @param {*} index
 * @param {*} rowDiv
 * @param {*} rowDivCountry
 * @param {*} rowDivCity
 * @param {*} rowDivContact
 * @param {*} countryName
 */
function oddAndEvenIndexBackgroundColor(
  index,
  rowDiv,
  rowDivCountry,
  countryName,
  rowDivCity,
  rowDivContact
) {
  if (index % 2 === 0) {
    rowDiv.classList.add(APP_CONSTANTS.COLORCLASS.GREY);
    rowDivCountry.classList.add(APP_CONSTANTS.COLORCLASS.GREY);
    countryName.classList.add(APP_CONSTANTS.COLORCLASS.GREY);
    rowDivCity.classList.add(APP_CONSTANTS.COLORCLASS.GREY);
    rowDivContact.classList.add(APP_CONSTANTS.COLORCLASS.GREY);
  } else {
    rowDiv.classList.add(APP_CONSTANTS.COLORCLASS.PINK);
    rowDivCountry.classList.add(APP_CONSTANTS.COLORCLASS.PINK);
    rowDivCity.classList.add(APP_CONSTANTS.COLORCLASS.PINK);
    countryName.classList.add(APP_CONSTANTS.COLORCLASS.PINK);
    rowDivContact.classList.add(APP_CONSTANTS.COLORCLASS.PINK);
  }
}

/*
 * Function to align the div tag for United states, India and Canada
 * @param {*} flag
 * @param {*} countryName
 * @param {*} rowDivCountry
 */
function countryNameCityNameAlignment(flag, countryName, rowDivCountry) {
  switch (countryName) {
    case "United States":
      flag.src = APP_CONSTANTS.ASSETS.USA;
      break;
    case "India":
      flag.src = APP_CONSTANTS.ASSETS.INDIA;
      rowDivCountry.classList.add("adjustBlock");
      accordianFunction();
      break;
    default:
      flag.src = APP_CONSTANTS.ASSETS.CANADA;
      break;
  }
}

/*
 * Function to load page
 */
export function loadThePage() {
  APP_CONSTANTS.SELECTORS.ACCORDIANCONTAINERID.style.display =
    APP_CONSTANTS.DISPLAYCONSTANTS.NONE;
  APP_CONSTANTS.SELECTORS.BUTTONS.forEach((button) => {
    button.addEventListener("click", () => {
      APP_CONSTANTS.SELECTORS.BUTTONS.forEach((btn) => {
        btn.style.backgroundColor = APP_CONSTANTS.STYLECOLORS.BLACK;
      });

      //use of block scope
      {
        button.style.backgroundColor =
          APP_CONSTANTS.STYLECOLORS.COLORBACKGROUND;
        addContent(button.id);
      }
    });
  });
}
