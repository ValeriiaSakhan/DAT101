"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

let wakeUpTime = 8;
if (wakeUpTime == 6) {
  printOut("I have to take the car to school!");
} else if (wakeUpTime == 8) {
  printOut("I have to take the train to school!");
}  else printOut("If I wake up exactly 7 I can take the bus to school")
printOut(newLine);


printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
let x = -4
if (x > 0) {
  printOut (x + " is bigger than. It is a positive number ");
} else if (x < 0) {
  printOut (x + " smaller than 0. it is a negative number ");
} else printOut (x + " is equal to 0 ");
printOut(newLine);

printOut("--- Part 6 og 7 ----------------------------------------------------------------------------------------------");
let r = (Math.floor)(Math.random()*8 + 1);
if (r > 4 && r <= 6) {
  printOut (r + " Mp. The image is perfect size. Thank you ");
} else if (r <= 4) {
  printOut (r + " Mp. The image is too small! ");
} else printOut (r + " Mp. The image is too big! ");
printOut(newLine);

printOut("--- Part 8 og 9 ----------------------------------------------------------------------------------------------");
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut (monthName + ". You must take vitamin D grandpa ")
} else printOut (monthName + ". You don't need to take your meds yay ")
printOut(newLine);

switch (monthName) {
  case "January":
  case "Mars":
  case "Mai":
  case "Juli":
  case "August":
  case "October":
  case "December":
  printOut (monthName + " has 31 days in it ");
break
  case "February":
    printOut (monthName + " has 28-29 days in it ");
    break
  case "April":
  case "June":
  case "September":
  case "November":
    printOut (monthName + " has 30 days in it. ")
    break
} 

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const monthList1 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth1 = monthList1.length;
const monthName1 = monthList1[Math.floor(Math.random() * noOfMonth1)];

switch (monthName1) {
  case "Mars":
  case "Mai":
    printOut (monthName1 +". Unfortunately we are closed due to reconstruction! Come back in April or June! ")
    break
  case "April":
  case "January":
  case "June":
  case "February":
  case "September":
  case "November":
  case "January":
  case "Juli":
  case "August":
  case "October":
  case "December":
    printOut (monthName1 + ". We are open! But we are closing in march and may for reconstruction :p ")
    break 
}

/*pasting this in for myself since it was hard to keep track on task and I had to remember the months xD

Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month. */