{
    // Encapsulation in OOP

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        public addManey(amount: number) {
            this._balance = this._balance + amount
        }

        private getBalance() {
            return this._balance;
        }
    }

    class StudentAcount extends BankAccount {
        test() {
            this._balance
        }
    }

    const PoorMen = new BankAccount(21212, 'mr. poor', 45);
    PoorMen.addManey(125154)
    
   


    //
}