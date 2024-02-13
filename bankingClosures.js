import { updateUserBalance } from "./js/updateUserBalance.js";
import { userDetails } from "./js/fetchDetails.js";

//main function
/*
 * Function to validate userDetails
 * @param {*} cardNumber
 * @param {*} PIN
 * @param {*} amount
 * @param {*} userDetails { a call back function to get the userDetails : cardNumber and pin to validate }
 * @param {*} depositeOrWithdraw
 */
function bankFunction(
  cardNumber,
  PIN,
  amount,
  userDetails,
  depositeOrWithdraw
) {
  this.cardNumber = cardNumber;
  this.PIN = PIN;
  this.aamount = amount;
  this.depositeOrWithdraw = depositeOrWithdraw;
  this.bankingOperation = function () {
    userDetails(cardNumber, PIN, amount, updateUserBalance, depositeOrWithdraw);
  };
}

const obj = new bankFunction(
  "4000000000000000",
  1234,
  60,
  userDetails,
  "withdraw"
);

obj.bankingOperation();
