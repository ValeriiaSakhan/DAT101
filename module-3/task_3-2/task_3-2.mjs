"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let txtPrintValue = "";
for (let i = 1; i <= 10; i++) {
    txtPrintValue += " " + i.toString();
}
printOut(txtPrintValue + newLine);

let txtPrintValue1 = "";
for (let i = 10; i>=1; i--) {
    txtPrintValue1 += " " + i.toString();
}

printOut(txtPrintValue1 + newLine);

printOut("--- Part 1 version 2 (more correct) ----------------------------------------------------------------------------------------------");

let a1 = "";
let a2 = "";
for (let i = 1, j = 10; i<=10; i++, j--) {
    a1 += " " + i.toString();
    a2 += " " + j.toString();
}
printOut(a1 + newLine);
printOut(a2 + newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let GuessedVariable;

do {
    GuessedVariable = Math.floor(Math.random()*60) + 1;
} while (GuessedVariable !== 7);
printOut (GuessedVariable + newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ake the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time*/

let Variable1 = 56;
let timeStarted = Date.now();
let GuessedVariable1 = Math.floor(Math.random()*1000000) + 1;
let attempts = 1;

while (GuessedVariable1 !== Variable1) {
    GuessedVariable1  = Math.floor(Math.random()*1000000) + 1;
    attempts++;
    }

let timeStopped = Date.now();
let elapsed = timeStopped - timeStarted;

printOut ("The number is " + GuessedVariable1);
printOut ("Attempts: " + attempts);
printOut ("Time (ms): " + elapsed);
print(newLine)

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).*/

let PrimeNumbers = "";
let DivisionAnswer = 1

for (let i = 1; i <= 200; i++) {

}
while (PrimeNumbers/PrimeNumbers == DivisionAnswer){
    printOut("PrimeNumbers")
}




printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.*/

let Number1 = "";
for (let i = 1;i <= 7; i++){
    Number1 += "" + i.toString();
    printOut("K1R" + i + "  " + "K2R" + i + "  " + "K3R" + i + "  "+ "K4R" + i + "  "+ "K5R" + i + "  "+ "K6R" + i + "  "+ "K7R" + i + "  "+ "K8R" + i + "  "+ "K9R" + i + "  ");

}
printOut(newLine);



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
*/
for (let i = 5;i >= 1; i--){ 
let Student1Grade = Math.floor(Math.random()*236+1);
if (Student1Grade <= (0.40*236)){
    printOut ("This students grade is " + Student1Grade + " This means his grade falls within the F range");
} else if (Student1Grade >= (0.41*236) && Student1Grade <= (0.52*236)) {
    printOut ("This students grade is " + Student1Grade + " This means his grade falls within the E range");
} else if (Student1Grade >= (0.53*236) && Student1Grade <= (0.64*236)) {
    printOut ("This students grade is " + Student1Grade + " This means his grade falls within the D range");
} else if (Student1Grade >= (0.65*236) && Student1Grade <= (0.76*236)) {
    printOut ("This students grade is " + Student1Grade + " This means his grade falls within the C range");
} else if (Student1Grade >= (0.77*236) && Student1Grade <= (0.88*236)) {
    printOut ("This students grade is " + Student1Grade + " This means his grade falls within the B range");
} else printOut("This students grade is " + Student1Grade + " This means his grade falls within the A range");

printOut(newLine);
} 
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function matchNumber(aText, aNumber) {
  let count = 0;
  for (let i = 0; i < aText.length; i++) {
    if (aText.charAt(i) === aNumber.toString()) {
      count++;
    }
  }
  return count;
}
let throws = 0;
let fullStraight = false;
let yahtzee = false;
let tower = false; // 2 + 4 of a kind
let threePairs = false; // 3 pairs e.g., 112233
do {
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  const d3 = Math.ceil(Math.random() * 6);
  const d4 = Math.ceil(Math.random() * 6);
  const d5 = Math.ceil(Math.random() * 6);
  const d6 = Math.ceil(Math.random() * 6);
  throws++;
  const t = d1.toString() + d2.toString() + d3.toString() + d4.toString() + d5.toString() + d6.toString();

  let c1 = matchNumber(t, 1);
  let c2 = matchNumber(t, 2);
  let c3 = matchNumber(t, 3);
  let c4 = matchNumber(t, 4);
  let c5 = matchNumber(t, 5);
  let c6 = matchNumber(t, 6);
  const t2 = c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString();

  const cm1 = matchNumber(t2, 1); // count of numbers that appear once
  const cm2 = matchNumber(t2, 2); // count of numbers that appear twice
  const cm3 = matchNumber(t2, 3); // count of numbers that appear thrice
  const cm4 = matchNumber(t2, 4); // count of numbers that appear four times
  const cm5 = matchNumber(t2, 5); // count of numbers that appear five times
  const cm6 = matchNumber(t2, 6); // count of numbers that appear six times
  // Check for full straight
  if (cm1 === 6 && !fullStraight) {
    // We have a full straight
    fullStraight = true;
    printOut("Full straight: " + t + " (throws: " + throws + ")");
  }
  // Check for yahtzee
  if (cm6 === 1 && !yahtzee) {
    // We have yahtzee
    yahtzee = true;
    printOut("Yahtzee: " + t + " (throws: " + throws + ")");
  }
  //check for tower
  if (cm4 === 1 && cm2 === 1 && !tower) {
    // We have a tower
    tower = true;
    printOut("Tower: " + t + " (throws: " + throws + ")");
  }
  //check for three pairs
  if (cm2 === 3 && !threePairs) {
    // We have three pairs
    threePairs = true;
    printOut("Three pairs: " + t + " (throws: " + throws + ")");
  }
} while (!fullStraight || !yahtzee || !tower || !threePairs);
printOut(newLine);





/*


let TrippleRoll = 0;


    while (i < dices.length){
    if (dices[TrippleRoll] == "1") {
        count++;
    } 
    i++
        }

        if (count==3);
        TripplePair++;

    printOut ("You have " +  tripplePair + " tripple pair of " + dices);


if (count==3);
tripplePair++;

    if (tripplePair == 2);
    break




while (i < dices.length){
    if (dices[i] == 1) {
        count++;
    } }
    i++
if (count==3);
printOut ("You have a triple pair of " + i);



    let count = 0;
while (count >= 0, count++);
*/

/*let dice1 = Math.floor(Math.random()*6+1);
let dice2 = Math.floor(Math.random()*6+1);
let dice3 = Math.floor(Math.random()*6+1);
let dice4 = Math.floor(Math.random()*6+1);
let dice5 = Math.floor(Math.random()*6+1);
let dice6 = Math.floor(Math.random()*6+1);

let MinDiceRoll = 0;
while (dice1.){
    dice1 =
}*/



/*let TextTest = "Dette er en test";
let minTextSize = 100;
while (TextTest.length<minTextSize){
    TextTest = "&nbsp;" + TextTest;
}
printOut (TextTest + newLine);*/
