// constants which are not changing
const visible_error = "visible_error";
const error_value1 = "error";
const error_value2 = "hide_error";
const red_border = "1px solid #ad1111";
const grey_border = "1px solid #d0d0d0";



function validateForm() {
  // function to show error when left empty or mismatch with the regex
  function showError(element, message) {
    element.classList.add(visible_error);
    element.textContent = message;
    element.classList.add(error_value1);
  }

  // hide error function
  function hideError(element) {
    element.classList.remove(visible_error);
    element.classList.add(error_value2);
  }

  // to set the border style to red color when error
  function setBorderStyle(element, style) {
    element.setAttribute("style", `border: ${style}`);
  }

  // validate field will be used primarily for user_first_name,user_last_name and emailId
  function validateField(value, regex, element, errorElement, errorMessage) {
    // if input given is empty
    if (value.trim() === "") {
      showError(errorElement, `${errorMessage} is required`);
      setBorderStyle(element, red_border);
      return false;
    }

    // if input doesn't matcht the regex
    if (!regex.test(value.trim())) {
      showError(errorElement, `${errorMessage} is invalid`);
      setBorderStyle(element, red_border);
      return false;
    }

    // if matches with the regex
    hideError(errorElement);
    setBorderStyle(element, grey_border);
    return true;
  }

  let returnFormSubmit = true;

  // Define error elements with div tag for the error text content below the input tags
  const first_name_error = document.querySelector(".first_name_error");
  const last_name_error = document.querySelector(".last_name_error");
  const email_error = document.querySelector(".email_address_error");
  const contact_error = document.querySelector(".contact_number_error");
  const pin_error = document.querySelector(".pin_code_error");
  const card_error = document.querySelector(".card_number_error");
  const cvv_error = document.querySelector(".cvv_error");
  const expiry_error = document.querySelector(".expiry_date_error");

  // the input tags for the user input
  const first_name = document.getElementById("first_name");
  const last_name = document.getElementById("last_name");
  const email = document.getElementById("email_address");
  const contact_border = document.getElementById("contact_number");
  const pin_border = document.getElementById("pin_code");
  const cardNumber_border = document.getElementById("card_number");
  const cvv_border = document.getElementById("cvv_number");

  //value fetched from the input tags
  const first_name_value = first_name.value;
  const last_name_value = last_name.value;
  const email_value = email.value;
  const contact = document.getElementById("contact_number").value;
  const pin = document.getElementById("pin_code").value;
  const cardNumber = document.getElementById("card_number").value;
  const cvv = document.getElementById("cvv_number").value;

  // regex defined for user_first_name, last_name and email_id
  const usernameRegex = /^[A-Z][a-zA-Z]{0,29}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  const contactRegex = /^[0][789]\d{9}$/;

  // user first name validation
  returnFormSubmit = validateField(
    first_name_value,
    usernameRegex,
    first_name,
    first_name_error,
    "First Name"
  );

  // user last name validation
  returnFormSubmit = validateField(
    last_name_value,
    usernameRegex,
    last_name,
    last_name_error,
    "Last Name"
  );

  // user email id validation
  returnFormSubmit = validateField(
    email_value,
    emailRegex,
    email,
    email_error,
    "Email Address"
  );

  // user contact number validation
  returnFormSubmit = validateField(
    contact,
    contactRegex,
    contact_border,
    contact_error,
    "Contact number"
  );

  //validation defined here again for the pin number, card_number,expiry date and cvv since they don't required any regex for validation hence segregated
  // pin number validation
  if (pin.trim() === "") {
    showError(pin_error, "Pin number is required");
    setBorderStyle(pin_border, red_border);
    returnFormSubmit = false;
  } else if (pin.trim().length !== 6) {
    showError(pin_error, "Pin must be of 6 numbers");
    setBorderStyle(pin_border, red_border);
    returnFormSubmit = false;
  } else {
    hideError(pin_error);
    setBorderStyle(pin_border, grey_border);
  }

  // card number validation
  if (cardNumber.trim() === "") {
    showError(card_error, "Card Number is required");
    setBorderStyle(cardNumber_border, red_border);
    returnFormSubmit = false;
  } else if (cardNumber.trim().length !== 16) {
    showError(card_error, "Card Number is invalid");
    setBorderStyle(cardNumber_border, red_border);
    returnFormSubmit = false;
  } else {
    hideError(card_error);
    setBorderStyle(cardNumber_border, grey_border);
  }

  //to string, because the document.getElementById() -> getsv value in type string.
  const expiry = document.getElementById("expiry_date").value;

  // if empty string expiry this if condition will be implemented
  if (!expiry) {
    showError(expiry_error, "Card expiry is required");
    expiry_error.classList.add(visible_error);
    expiry_error.classList.add(error_value1);
    returnFormSubmit = false;
  }
  // else this block will be implemented to be compared with the currentDate the input tag need to be converted to Date object
   else {
    const expiryDate = new Date(expiry);
    const currentDate = new Date();

    if (expiryDate < currentDate) {
      showError(expiry_error, "Card expiry is not valid");
      expiry_error.classList.add(visible_error);
      expiry_error.classList.add(error_value1);
      returnFormSubmit = false;
    } else {
      hideError(expiry_error);
      expiry_error.classList.remove(visible_error);
      expiry_error.classList.add(error_value2);
    }
  }

  // cvv number validation
  if (cvv.trim() === "") {
    showError(cvv_error, "CVV is required");
    setBorderStyle(cvv_border, red_border);
    returnFormSubmit = false;
  } else if (cvv.trim().length !== 3) {
    showError(cvv_error, "CVV is invalid");
    setBorderStyle(cvv_border, red_border);
    returnFormSubmit = false;
  } else {
    hideError(cvv_error);
    setBorderStyle(cvv_border, grey_border);
  }

  //at the end returning the boolean if true all the input tag have right value else an input tag have an error.
  return returnFormSubmit;
}
