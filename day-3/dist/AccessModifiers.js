"use strict";
{
    //Access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addManey(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAcount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const PoorMen = new BankAccount(21212, 'mr. poor', 45);
    PoorMen.addManey(125154);
    const newBalance = PoorMen.getBalance();
    console.log(newBalance);
    //
}
