"use strict";
{
    //  Getter and setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        // public addManey(amount: number) {
        //     this._balance = this._balance + amount
        // }
        get Balance() {
            return this._balance;
        }
    }
    const PoorMen = new BankAccount(21212, 'mr. poor', 45);
    // PoorMen.addManey(125154)  // fun call 
    PoorMen.deposit = 50;
    // const newBalance = PoorMen.getBalance()  // fun call 
    const newBalance = PoorMen.Balance;
    console.log(newBalance);
    //
}
