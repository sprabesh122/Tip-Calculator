/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billInput = document.getElementById("billTotalInput");

const tipInput = document.getElementById("tipInput");

const numberofpeopleDiv = document.getElementById("numberOfPeople");

const perPersonTotal = document.getElementById("perPersonTotal");

// Get number of people from number of people div

let numberofPeople = Number(numberofpeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number

  const bill = Number(billInput.value);

  // console.log({bill})

  // get the tip from user & convert it into a percentage (divide by 100)

  const tip_Percentage = Number(tipInput.value) / 100;

  // console.log({tip_Percentage})

  // get the total tip amount

  const total_tip_amount = tip_Percentage * bill;

  // console.log({total_tip_amount})

  // calculate the total (tip amount + bill)

  const total = total_tip_amount + bill;

  // console.log({total})

  // calculate the per person total (total divided by number of people)

  const per_person_total = total / numberofPeople;

  // console.log({per_person_total})

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${per_person_total
    .toFixed(2)
    .toLocaleString("en-US")}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberofPeople++;

  // update the DOM with the new number of people
  numberofpeopleDiv.innerText = numberofPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberofPeople <= 1) {
    console.log("minimum number of people should be 1");
    return;
  }

  // decrement the amount of people
  numberofPeople--;

  // update the DOM with the new number of people
  numberofpeopleDiv.innerText = numberofPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};
