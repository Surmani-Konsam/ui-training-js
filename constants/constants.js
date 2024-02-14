export const APP_CONSTANTS = {
  ASSETS: {
    INDIA: "assets/India_Flag.jpg",
    USA: "assets/usa.png",
    CANADA: "assets/canada.png",
    SUB_TEXT: "Come Choose from millions of products",
  },
  STYLECOLORS: {
    BLACK: "black",
    COLORBACKGROUND: "#001b71",
  },
  SELECTORSIDS: {
    ABOUTUS: "about_us_id",
    SOLUTIONS: "solutions_id",
    LOCATIONS: "locations_id",
  },
  SELECTORS: {
    ABOUTUSBUTTON: document.getElementById("about_us_id"),
    SOLUTIONSBUTTON: document.getElementById("solutions_id"),
    LOCATIONSBUTTON: document.getElementById("locations_id"),
    BUTTONS: document.querySelectorAll(".btn_style"),
    COUNTRYLIST: document.getElementById("country_list_id"),
    CONTENTID: document.getElementById("content_id_container"),
    CONTENTFRAGMENT: document.createDocumentFragment(),
    ACCORDIANCONTAINERID: document.getElementById("accordian_container_id"),

    ACC: document.getElementsByClassName("toggle"),
    ACCORDIANTOGGLEFIRSTBLOCK: document.getElementsByClassName(
      "accordion_toggle_firstBlock"
    ),
  },
  ERRORCONSTANTS: {
    ERRORCONSTS: "Network response was not ok",
    FETCHERROR: "Error fetching the JSON file:",
  },
  DISPLAYCONSTANTS: {
    NONE: "none",
    BLOCK: "block",
  },
  COLORCLASS: {
    GREY: "colorGrey",
    PINK: "colorPink",
  },
  CLASSLIST: {
    COUNTRYNAME: "country_name_style",
    IMAGESTYLE: "image_style",
    COUNTRYSTYLE: "country_style",
    CITYALIGNMENT: "city_alignment",
    ROW: "row",
  },
};

//styleColors.js
export const black = "black";
export const colorBackground = "#001b71";

//selectorsIds.js
export const aboutUs = "about_us_id";
export const solutions = "solutions_id";
export const locations = "locations_id";

//selectors.js
export const aboutUsButton = document.getElementById("about_us_id");
export const solutionsButton = document.getElementById("solutions_id");
export const locationsButton = document.getElementById("locations_id");
export const buttons = document.querySelectorAll(".btn_style");
export const countryList = document.getElementById("country_list_id");
export const contentId = document.getElementById("content_id_container");
export const contentFragment = document.createDocumentFragment();
export const accordianContainerId = document.getElementById(
  "accordian_container_id"
);

export const acc = document.getElementsByClassName("toggle");
export const accordianToggleFirstBlock = document.getElementsByClassName(
  "accordion_toggle_firstBlock"
);

//errorConstants.js
export const errorConsts = "Network response was not ok";
export const fetchErrorConst = "Error fetching the JSON file:";

//displayProperties.js
export const none = "none";
export const block = "block";

//colorClass.js
export const grey = "colorGrey";
export const pink = "colorPink";

//classListConsts.js
export const countryNameConst = "country_name_style";
export const imagStyle = "image_style";
export const countryStyle = "country_style";
export const chennai = "chennai_block";
export const row = "row";
