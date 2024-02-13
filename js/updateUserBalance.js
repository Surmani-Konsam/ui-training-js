//function exported to update the account balance
import { withdraw } from "./withdrawAndDepositeFunction.js";
import { deposite } from "./withdrawAndDepositeFunction.js";



export function updateUserBalance(
  amount,
  depositeOrWithdraw,
  availableBalance
) {
  console.log("Account balance before", availableBalance);
  if (depositeOrWithdraw == "withdraw") {
    withdraw(availableBalance, amount);
  } else {
    deposite(amount, availableBalance);
  }
}
