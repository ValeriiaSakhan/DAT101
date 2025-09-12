"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let a = 2;
let b = 3;
let c = 4;
let d = 6;
let AnswerFormula= (a+(b*(a-c))*d);
let Answer = AnswerFormula;
printOut(Answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------")
let cm = 34;
let m = 25;
let inch = 2.54;
const MetersCOnvert = m*100;
const TotalOfCm = MetersCOnvert+cm;
const InchesAnswer = TotalOfCm/inch;
printOut(InchesAnswer);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let days = 3;
let hours = 12;
let mins = 14;
let seconds = 45;
const DaysToMinutes = (days*24)*60;
const HoursToMinutes = (hours*60);
const SecondsToMinutes = (seconds/60);
let Sum = DaysToMinutes+HoursToMinutes+SecondsToMinutes+mins
printOut(" " + days + " days" + " " + hours + " hours" + " " + mins + " minutes" + " " + seconds + " seconds will be" + " " + Sum + " in minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const RAHHHHSAVEMEMINUTES = 6322.52;

const days1 = Math.floor(RAHHHHSAVEMEMINUTES / 1440);
const afterdays = RAHHHHSAVEMEMINUTES % 1440;

const hours1 = Math.floor(afterdays / 60);
const afterhours = afterdays % 60;

const minutes1 = Math.floor(afterhours);

const seconds1 = Math.floor((afterhours - minutes1) * 60 );

printOut(RAHHHHSAVEMEMINUTES + " minutes is " + days1 + " days, " + hours1 + " hours " + minutes1 + " minutes and "  + seconds1 + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let AmountDollars = 54;
let AmountNok = 54;
const NOKtoDOLLARCourse = 0.099;
const DOLLARRtoNOKCourse = 10.05;
const Answer54DollarToNok = Math.floor (AmountDollars*10.05);
const Answer54nokToDollar = Math.floor (AmountNok*0.099);
printOut(" 54 Dollars in nok is around " + Answer54DollarToNok + " nok " + " while 54 nok to dollars is around" + Answer54nokToDollar + " dollars ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let text = "There is much between heaven and earth that we do not understand.";
const AmountOfCharacters = text.length;
printOut (" The amount of letters in this sentence is " + AmountOfCharacters);
printOut(newLine);

const Character19 = text[18];
printOut(" The 19th character is! "+ Character19);
printOut(newLine);

const CharactersFrom35plus8 = text.slice (34,34+8);
printOut(" Here is the print out from 35 + 8! " + CharactersFrom35plus8);
printOut(newLine);

const WhenEarth = text.indexOf("earth");
printOut (" Earth starts at " + WhenEarth);
printOut (newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let number1 = 5;
let number2 = 3;
if (number1 > number2) {
printOut (" Yes "+ number1 + " Is greater than "+ number2);
} else { printOut(" No ");
    } 
printOut(newLine);

let number11=7;
let number12 = 7;
if (number11 = number12) {
    printOut (" Yes number "+ number11+ " is equal to number "+ number12);
} else { (number11 > number12);
    printOut (" Yes number "+ number11+ " is greater to number "+ number12);
} 
printOut (newLine);

const alfabet1 = a;
const alfabet2 = b;
const svar7c = "a>b";
printOut(" According to this genius formula " + svar7c + " a is indeed greater than b");
print (newLine)

const value1 = 1;
const abcd = "a";
const svar7d = "1>a";
printOut(" According to this genius formula " + svar7d + " 1 is indeed greater than abcd, am I sure? No ");
print (newLine)

const value2500 = 2500;
const abcd1 = "abcd";
const svar7e = "2500<abcd";
printOut(" According to this genius formula " + svar7e + " 2500 is indeed less than abcd ");
print (newLine)

const arne = "thomas";
const thomas = "arne";
const svar7f = (arne!==thomas);
printOut(" Does Arne equal Thomas? Or does Thomas equal Arne? But does Arne Thomas and Thomas equal Arne? Or is it the other way around? ");
print (newLine)
printOut(" The wheel has spoken the answer is: Arne does not equal thomas, because arne not thomas " + svar7f);
print (newLine)

const number3 = 2;
const number5 = 5;
const svar7g = (number3!==number5);
printOut(" 2 does not equal 5: " + svar7g);
print(newLine)

const statement1 = "abcd";
const statement2 = "bcd";
const svar7h = (statement1>statement2);
printOut ("abcd is greater than bcd");
print(newLine)

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let answer8a = Number("254");
printOut(" Number 254 is number " + answer8a);
printOut(newLine)

let answer8b = Number("57.23");
printOut(" Number 57.23 is number " + answer8b);
printOut(newLine)

let answer8c = Number("25");
printOut(" Number 25 kroner is number " + answer8c);
printOut(newLine)


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let r = (Math.floor)(Math.random()*360 + 1);
printOut(" The random number iiiiiisss! " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const TotalDays = 131;
const TotalWeeks = Math.floor (TotalDays/7);
const TheOrphan = (TotalDays)%7;
printOut("Its " + TotalWeeks + " weeks and " + TheOrphan + " days! ");
printOut(newLine);