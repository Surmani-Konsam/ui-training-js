
/*
  * Function to validate userDetails
   * @param {*} amount
   * @param {*} availableBalance
*/
export function withdraw(availableBalance, amount) {
  console.log("money to withdraw : ", amount);
  if (amount < availableBalance) {
    availableBalance -= amount;
    console.log("Current Balance", availableBalance);
  } else {
    console.log(
      "you don't have sufficient amount to withdraw with current balance of : ",
      availableBalance
    );
  }
}

/*
  * Function to validate userDetails
   * @param {*} amount
   * @param {*} availableBalance
*/
export function deposite(availableBalance,amount){
    console.log("money to deposite : ", amount);
    availableBalance += amount;
    console.log("Current Balance", availableBalance);
}
