'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accNr: number): any[] {
  let nameAndBalance: any[] = [];
  accounts.forEach((value: any) => {
    if (value.accountNumber == accNr) {
      nameAndBalance.push(value.clientName, value.balance);
    }
  });
  return nameAndBalance;
}

console.log(getNameAndBalance(23456311));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount (list: any[], accNrFrom: number, accNrTo: number, amount: number) {
  let accNrs = [];
  const errorMsg: string = '404 - account not found';
  const okMsg: string = `Transfer successful, ${amount} has been transferred from ${accNrFrom} to ${accNrTo}`;
  list.forEach((value) => accNrs.push(Object.values(value)[1]));
  if (accNrs.includes(accNrFrom) == false || accNrs.includes(accNrTo) == false) console.log(errorMsg);
  else {
    list.forEach((value) => {
      if (value.accountNumber == accNrFrom) value.balance -= amount;
      if (value.accountNumber == accNrTo) value.balance += amount;
    });
    console.log(okMsg);
  }
}

transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};