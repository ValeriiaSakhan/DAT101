"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const part1Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

printOut ("Legende = " + part1Array.length + ", Verdi = " + [part1Array.length - 1]);
let part1Text = "";
for (let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
const value = part1Array [i]; // -> every index of part1Array
if (i === part1Array.length -1) {
    part1Text += value.toString () + ".";
} else { 
    part1Text += value.toString () + ", ";
}
part1Text += value.toString() + ", ";
}
printOut (part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const part2Text  = part1Array.join(", ");
printOut (part2Text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Greeting = "Hello there, how are you?";
const myArray = part3Greeting.split(" ");

let part3Text = "";
for (let i = 0; i < myArray.length; i++) {
    const word = myArray [i];
    part3Text += "Index: " + i.toString() + " = " + word + newLine;
}

printOut(part3Text);
printOut (newLine);




printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const Girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray (aArray, aName) {
    let deleteIndex = .1;
    for (let i = 0; i < aArray.length; i++) {
        const name = aArray [i];
        aArray.splice(deleteIndex,1);
        if (name === aName) {
            //Her kan vi slette elementet for eksempel "hilde";
            //MEN Dette gjør vi ikke her! Her løper vi igjen, og må slette seinere!
            //Vi må lagre ideksen i en variabel som skal slettes seinere
            //If you delete an element inside the loop, the array’s indexes shift, so the loop skips the next element and doesn’t check it.
            deleteIndex = i;
            break;


        }
    }
    //Teste on du kan slette
    if (deleteIndex >= 0 ) {
        printOut(aName + " is found, and deleted. ")
    } else {
        printOut (aName + " is not found!");
    }
}

removeNameFromArray (Girls, "Ingrid");
printout (Girls)

printOut (newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
