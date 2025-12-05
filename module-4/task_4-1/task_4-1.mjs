"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";
/*Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".*/


const AccountTypes = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionkonto",
};

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};



class Taccount {
    #type = 0;
    #balance = 0;
    #withdrawcount = 0;
    #currencytype = null;

    constructor (type) {
        this.#type = type;
        this.#currencytype = CurrencyTypes.NOK;
    }
   
toString () {
    return this.#type;
}

setType (aType) {
    this.#withdrawcount = 0;
    let Output1 = "The account type has changed from " + this.toString();
    this.#type = aType;
    Output1 += " to " + (this.toString());
    printOut (Output1);
}


getBalance () {
    return this.#balance + this.#currencytype.denomination;
}

doDeposit (aAmount) {
    this.#withdrawcount = 0;
    this.#balance = this.#balance;
    let NewDeposit = this.#balance + aAmount;
    this.#balance = NewDeposit.toFixed(2);
    return "A deposit of " + aAmount + this.#currencytype.denomination + ". New balance is " + this.#balance + this.#currencytype.denomination;
} 


doWithdraw (aAmount) {
    switch (this.#type) {

        case AccountTypes.Pension:
            printOut ("You cannot withdraw from " + this.#type);
            return;

        case AccountTypes.Saving:
            this.#withdrawcount++;
            if (this.#withdrawcount > 3) {
                printOut ("You have reached the max withdraw count of 3 on your " + this.#type + ". Please switch account type and try again.");
                return;
            }
            break;

    }

      if (aAmount > this.#balance) {
        printOut ("Attempting to withdraw " + aAmount + this.#currencytype.denomination + "...");
        printOut ("Issuficient funds. Current balance is " + this.#balance + this.#currencytype.denomination);
        return;

    }

    this.#balance = this.#balance;
    let NewWithdraw = this.#balance - aAmount;
    this.#balance = NewWithdraw.toFixed(2);
    return "A withdraw of " + aAmount + this.#currencytype.denomination + ". New balance is " + this.#balance + this.#currencytype.denomination;
    printOut (newLine);
    }

setCurrencyType (aType) {
    if(this.#currencytype == undefined) {
        this.#currencytype = CurrencyTypes.NOK;
        return;
    }
    if (this.#currencytype === aType) {
        return; } 
    let NewBalance = this.#balance * (aType.value / this.#currencytype.value);
    printOut("The currency has changed from " + this.#currencytype.name + " to " + aType.name);
      printOut("New balance is " + NewBalance.toFixed(2) + aType.denomination);
        this.#balance = NewBalance.toFixed(2);
        this.#currencytype = aType;
    
}


}


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let task1answer = Object.values (AccountTypes).join (", ");
printOut (task1answer);
printOut (newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let task2answer = new Taccount (AccountTypes.Normal);
printOut (task2answer.toString());
printOut (task2answer.setType(AccountTypes.Saving));
printOut (task2answer.toString());
printOut (newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let task3answer = new Taccount;
printOut (task3answer.doDeposit(75));
printOut (task3answer.doWithdraw(25));
printOut (task3answer.doWithdraw(100));
printOut ("My current balance is " + task3answer.getBalance());
printOut (newLine);



printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let task4answer = new Taccount (AccountTypes.Saving);
printOut (task4answer.doDeposit(100));
printOut (task4answer.doWithdraw(15));
printOut (task4answer.doWithdraw(15));
printOut (task4answer.doWithdraw(15));
printOut (task4answer.doWithdraw(15));
printOut (task4answer.setType(AccountTypes.Pension));
printOut (task4answer.doWithdraw(3));
printOut (task4answer.setType(AccountTypes.Saving));
printOut (task4answer.doWithdraw(3));
printOut (task4answer.doWithdraw(276));
printOut ("My current balance is " + task4answer.getBalance());
printOut (newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let task5answer = new Taccount;
printOut (task5answer.doDeposit(150));
printOut (newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let task6answer = new Taccount;
printOut (task6answer.doDeposit(350));
printOut (task6answer.setCurrencyType(CurrencyTypes.EUR));
printOut (task6answer.doWithdraw(134));
printOut (task6answer.setCurrencyType(CurrencyTypes.USD));
printOut (task6answer.doWithdraw(22));
printOut (newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let task7answer = new Taccount;
printOut ("I couldnt figure out how to do the convertion for deposit, and when I tried the code would break :c. ");
printOut (newLine);
