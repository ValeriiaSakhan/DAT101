"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function TodaysDate () {
    const event = new Date();
    printOut(event.toLocaleString("no-NB", { timeZone: "UTC" }));
}
TodaysDate()
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function DaysUntilRelease () {
    
function TodaysDate () {
    const event = new Date();
    printOut(event.toLocaleString("no-NB", { timeZone: "UTC" }));
}
TodaysDate()


    let ReleaseDate = new Date (`2026-05-04`);
    let Today = new Date ();

    const Difference = ReleaseDate - Today;
    const diffDays = Math.ceil(Difference / (1000 * 60 * 60 * 24));
    printOut (diffDays);
}

    DaysUntilRelease();
    printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

let Radius = Math.ceil(Math.random()*10);


function FindingDiameterCircumferenceArea (Radius) {
    let Diameter = (2*Radius);
    let Circumference = (2*Math.PI*Radius);
    let Area = (Math.PI*Radius**2);


    printOut ("The diameter of a circle with radius " + Radius + " is " + Diameter.toFixed(1) + ". The Circumference is " + Circumference.toFixed(1) + ". And the Area is " + Area.toFixed(1) + ".");

}

FindingDiameterCircumferenceArea (Radius);
printOut (newLine);




printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle. */

let width = Math.ceil(Math.random()*25);
let height = Math.ceil(Math.random()*25);

function CircumferenceAndArea (width, height) {
    let Circumference = 2*(width + height);
    let Area = width * height;

    printOut ("The Circumference of a Rectangle with " + width + " in width and " + height + " in height is " + Circumference + " and the area of this rectangle is" + Area);

}

CircumferenceAndArea (width, height);
printOut (newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. 


let celsius = Math.ceil(Math.random()*40);
let fahrenheit = Math.ceil(Math.random()*500);
let kelvin = Math.ceil(Math.random()*500);

let typeCel = "C";
let typeFar = "F";
let typeKel = "K";
*/

function ConvertionCFK (temp, type) {
    let celsius, fahrenheit, kelvin;
    if (type === "C") {
        celsius = temp;
        fahrenheit = temp * (9/5) + 32;
        kelvin = temp + 273.15;
    } else if (type === "F") {
        fahrenheit = temp;
        celsius = (temp - 32) * (5/9);
        kelvin = (temp - 32) * 5/9 + 273.15;
    } else if (type === "K") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
    } else { (printOut(" This is not a type/tempreture"))
    return;
    }

    printOut ("the celsius value is " + Math.round(celsius) + ", the fahrenheit value is " + Math.round(fahrenheit) + " and last but not least, the kelvin value is " + Math.round(kelvin));

}

ConvertionCFK (Math.ceil(Math.random()*40), "C");
ConvertionCFK (Math.ceil(Math.random()*500), "F");
ConvertionCFK (Math.ceil(Math.random()*500), "K");


printOut(newLine);



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100)
*/

function FoodVATexclusion (gross, type) {
    let vatType = type.toLowerCase();
    let vat;

    if (vatType === "normal") {
        vat = 25;
    } else if (vatType === "food") {
        vat = 15;
     } else if (["hotel", "transport", "cinema"].includes(vatType)) {
        vat = 10;
    } else {
        printOut("Unknown VAT group!");
        return;
    }

    let ExcludedTax = (100 * gross) / (vat + 100);
     printOut ("This type " + vatType + " costs " + ExcludedTax + " without VAT");
}

FoodVATexclusion (Math.ceil(Math.random()*5000), "normal");
FoodVATexclusion (Math.ceil(Math.random()*5000), "food");
FoodVATexclusion (Math.ceil(Math.random()*5000), "hotel");
FoodVATexclusion (Math.ceil(Math.random()*5000), "transport");
FoodVATexclusion (Math.ceil(Math.random()*5000), "cinema");
FoodVATexclusion (Math.ceil(Math.random()*5000), "goblins");


printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function CalculationSDT (Speed, Distance, Time ) {
    let Nullcount = 0;

    if (Speed == null) { Nullcount++
    }if (Distance == null) { Nullcount++
    }if (Time == null) { Nullcount++ }

    if (Nullcount > 1) {
        printOut ("NaN");
        return NaN;
    }
   

    if (Speed == null) {
        Nullcount++
        Speed = Distance/Time;
        printOut ("If Distance is " + Distance + " and time is " + Time + " speed is " + Speed);
    } else if (Distance == null) {
        Nullcount++
        Distance = Speed*Time;
        printOut ("If speed is " + Speed + " and time is " + Time + " Distance is " + Distance);
    } else if (Time == null) {
        Nullcount++
        Time = Speed/Distance;
        printOut ("If speed is " + Speed + " and distance is " + Distance + " time is " + Time);
    } else return (NaN);

}

CalculationSDT (null, 239, 90);
CalculationSDT (22, null, 33);
CalculationSDT (null, null, 44);
CalculationSDT (null, 239, 90);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.*/

function ProgrammingBasement (text, max, character, boolean){
    if (text.length>=max) {
        printOut ("The text size is " + text.length + " so it is within the 100 limit.");
        return text;
    }

    let ToAdd = max - text.length;
    let Additional = character.repeat (ToAdd);

    let Answer;
    if (boolean) {
        Answer = text + Additional;
    } else {(Answer = Additional + text) }

    printOut (Answer);
    return Answer;
}

printOut (ProgrammingBasement ("This is a great text", 50, " a", true));
printOut (newLine);



printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*function mathsFun() {
  let currentNumber = 1;

  for (let line = 1; line <= 200; line++) {
    let leftSum = 0;
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber;
      currentNumber++;
    }

    let rightSum = 0;
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber;
      currentNumber++;
    }

    if (leftSum !== rightSum) {
      printOut(`Line ${line} failed! Left = ${leftSum}, Right = ${rightSum}`);
      return;
    }
  }

  printOut("Maths fun!");*/

function mathsFun() {
  let currentNumber = 1;

  for (let line = 1; line <= 200; line++) {
    let leftSum = 0;
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber;
      currentNumber++;
    }

    let rightSum = 0;
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber;
      currentNumber++;
    }

    if (leftSum !== rightSum) {
      printOut("Line ${line} failed! Left = ${leftSum}, Right = ${rightSum}");
      return;
    }
  }
 }

  printOut("Maths fun!");

printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/

/*function Factorial (number) {
    let factor;
    for (let i = 0; i>number, i++)
        for (i++, (number-i));
    let factor = number * (number - i)
    
}*/

function Factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

printOut(Factorial(Math.floor(Math.random()*22+1)));
