"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";
/*Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".*/


/* classes I struggle with most.. Partially used AI here since I couldnt figure it out */

class TAccount {
    static accountNames = {normal: "Brukskonto", saving: "Sparekonto", credit: "Kreditkonto", pension: "Pensionkonto"};

    #type = "";
    constructor (aType) {
        this.#type = aType
    }
    setType (aType) {
    printOut ("The account type changed from " + this.#type + " to " + aType);
    this.#type = aType;
}
toString() {
    return this.#type;
    
}
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* const Names = [" Alice", "Bob", "Charlie", "Diana", "Ethan"];
const Primes = [2, 3, 5, 7, 11];
const misc = [1.1, true, "a"];*/

const info = new TAccount(normal, saving, credit, pension);
printOut (Object.values(info).join(", "));
printOut (newLine);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const myAccount = new TAccount ("Normal");
printOut (myAccount.toString())
myAccount.setType = "Saving";
printOut(myAccount.toString());



printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

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
