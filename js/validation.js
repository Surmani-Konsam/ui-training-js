import { visible_error,error_value1,error_value2,grey_border,red_border,cvvInvalid,cvvRequired,cardExpiryInvalid,cardExpiryRequired,cardNumberIsInvalid,cardNumberIsRequired,pinDigitError,pinRequired } from "./constantserror.js";
import { first_name_error,last_name_error,email_error,expiry_error,card_error,cvv_error,contact_error,pin_error } from "./errorElement.js";
import { contactRegex,emailRegex,usernameRegex } from "./regex.js";
import { first_name,last_name,email,contact_border,pin_border,cardNumber_border,cvv_border,expiryTag } from "./formInputValue.js";



document.querySelector("#form_body").onsubmit = ()=>{

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



  //value fetched from the input tags
  const first_name_value = first_name.value;
  const last_name_value = last_name.value;
  const email_value = email.value;
  const contact = contact_border.value;
  const pin = pin_border.value;
  const cardNumber = cardNumber_border.value;
  const cvv = cvv_border.value;
 

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
    showError(pin_error, pinRequired);
    setBorderStyle(pin_border, red_border);
    returnFormSubmit = false;
  } else if (pin.trim().length !== 6) {
    showError(pin_error, pinDigitError);
    setBorderStyle(pin_border, red_border);
    returnFormSubmit = false;
  } else {
    hideError(pin_error);
    setBorderStyle(pin_border, grey_border);
  }

  // card number validation
  if (cardNumber.trim() === "") {
    showError(card_error, cardNumberIsRequired);
    setBorderStyle(cardNumber_border, red_border);
    returnFormSubmit = false;
  } else if (cardNumber.trim().length !== 16) {
    showError(card_error, cardNumberIsInvalid);
    setBorderStyle(cardNumber_border, red_border);
    returnFormSubmit = false;
  } else {
    hideError(card_error);
    setBorderStyle(cardNumber_border, grey_border);
  }

  //to string, because the document.getElementById() -> getsv value in type string.
  const expiry = expiryTag.value;

  // if empty string expiry this if condition will be implemented
  if (!expiry) {
    showError(expiry_error, cardExpiryRequired);
    expiry_error.classList.add(visible_error);
    expiry_error.classList.add(error_value1);
    returnFormSubmit = false;
  }
  // else this block will be implemented to be compared with the currentDate the input tag need to be converted to Date object
  else {
    const expiryDate = new Date(expiry);
    const currentDate = new Date();

    if (expiryDate < currentDate) {
      showError(expiry_error, cardExpiryInvalid);
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
    showError(cvv_error, cvvRequired);
    setBorderStyle(cvv_border, red_border);
    returnFormSubmit = false;
  } else if (cvv.trim().length !== 3) {
    showError(cvv_error, cvvInvalid);
    setBorderStyle(cvv_border, red_border);
    returnFormSubmit = false;
  } else {
    hideError(cvv_error);
    setBorderStyle(cvv_border, grey_border);
  }

  //at the end returning the boolean if true all the input tag have right value else an input tag have an error.
  return returnFormSubmit;
}


