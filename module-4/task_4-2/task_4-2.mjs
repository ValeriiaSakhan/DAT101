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
    let deleteIndex = -1;
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
printOut (Girls)

printOut (newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const Boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus" ];
const MergeThemArrays = Boys.concat(Girls);
printOut ("Da array is here: "  + newLine + MergeThemArrays + newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook {
    #Title = "";
    #Author = "";
    #ISBN = "";

    constructor (aTitle, aAuthor, aISBN) {
        this.#Title = aTitle;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;

    }

toString() {
    return ("The book " + this.#Title + " was written by " + this.#Author + " you can find it by its ISBN: " + this.#ISBN);
}

}

const book1 = new TBook ("Time Crime", "Nixzz","8238192381923913");
const book2 = new TBook ("Adventure of a witch!", "Julianne Evensen","912398444423839");
const book3 = new TBook ("Just a dusty book", "No one important","123881238231231");

const bookArray = [book1, book2, book3];
for (let book of bookArray) {
    printOut (book.toString());
    printOut (newLine);
}





printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

const keys = Object.keys(EWeekDays);

for (let i4 = 0; i4 < keys.length; i4++){
    const key = keys[i4]; //Current key, eks, "WeekDay1"
    const day = EWeekDays[key]; //Corresponding object with value and name
    //worked on it with Emma so the answer will probably look the same*

    printOut(key + ": value = " + day.value + ", name = " + day.name);
}

//tried following w3 schools but it didnt really work
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let numbers2 = [];
for(let i = 0; i < 35; i++) {
    numbers2.push(Math.ceil(Math.random() * 20));
}

let ascending = numbers2.slice().sort(function(a, b) {
    return a - b;
});

let descending = numbers2.slice().sort(function(a, b) {
    return b - a;
});

printOut("Original array: " + numbers2.join(", "));
printOut("Ascending: " + ascending.join(", "));
printOut("Descending: " + descending.join(", "));

printOut(newLine);

//this and the rest of the tasks I worked on with Emma and Ieva
printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let count = {};
for(let num of numbers2) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

let freqMap = {};
for(let num in count) {
    let freq = count[num];
    if(!freqMap[freq]) {
        freqMap[freq] = [];
    }
    freqMap[freq].push(Number(num));
}

let sortedFreqs = Object.keys(freqMap).sort((a,b)=>b-a);

printOut("Numbers and their frequencies:");
for(let num in count) {
    printOut(num + "->" + count[num]);
}

printOut(newLine + "Frequencies and corresponding numbers (most frequent first): ");
for(let freq of sortedFreqs) {
    let num = freqMap[freq].sort((a, b ) => a - b);
    printOut(freq + "->" + num.join(", ")); 
}
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let arr = [];


for (let r = 0; r < 5; r++) { // Create 5 rows
  arr[r] = [];           // create a singular one row
  for (let c = 0; c < 9; c++) { //yay 9 columns
    arr[r][c] = `Row ${r}, Col ${c}`;  // set cell text
  }
}
for (let r = 0; r < 5; r++) {
  let rowText = "";
  for (let c = 0; c < 9; c++) {
    rowText += arr[r][c] + " | ";
  }
  printOut(rowText);
}

