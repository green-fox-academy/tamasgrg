'use strict';

const db = require('../db');

let Ship = function() {

  constructor(capacity = 50)
    this.capacity = capacity
}
  


Ship.fillShip = function(queryString) {
  let caliber = queryString.caliber;
  let amount = parseInt(queryString.amount);
  // let capacity = 12500;
  console.log(this.capacity);
  // let shipStatus = currentAmmo / capacity * 100;

  // let fillStatus = {
  //   "received": caliber,
  //   "amount": amount,
  //   "shipstatus": shipStatus,
  //   "ready": db.ready,
  // }


  if (amount > 0) {
    if (caliber === ".25") {
      db.caliber25 += amount;
      let currentAmmo = db.caliber25 + db.caliber30 + db.caliber50;

      // console.log(db.caliber25);
      // console.log(this.capacity);
      // return fillStatus;
    }


    // return 666;
    // if (caliber )
  } else {
    return 'You need to define the amount of ammunition correctly';
  }

}
  
module.exports = Ship;