//imported arrays
import { accounts } from "./accounts.js";

const fetchUsers = accounts;

/*
  * Function to validate userDetails
   * @param {*} cardNumber
   * @param {*} PIN
   * @param {*} amount
   * @param {*} updateUserBalance { a call back function to update the current balance of the user}
   * @param {*} depositeOrWithdraw
*/
export function userDetails(
  cardNumber,
  PIN,
  amount,
  updateUserBalance,
  depositeOrWithdraw
) {
  try {
    let count = 0;
    fetchUsers.forEach((x) => {
      count++;
      if (x.cardNo === Number(cardNumber) && x.pin === PIN) {
        count--;
        updateUserBalance(amount, depositeOrWithdraw, x.balance);
      }
      if (count === fetchUsers.length) {
        console.log("Invalid Card No or PIN");
      }
    });
  } catch (err) {
    console.log("Error in loading user", err);
  }
}
