class SavingsAccount extends Account
{
    constructor(number, interest)
    {
        super(number);
        this.interest= interest;
        this._balance=0.0;  //???
    }
    getNumber() {
        return super.getNumber();
    }
    getBalance() {
        return super.getBalance();
    }
    getInterest()
    {
return this.interest;
    }
setInterest(interest){
this.interest= interest;
}
    deposit(amount) {
     return super.deposit(amount);
    }

    withdraw(amount) {
       return  super.withdraw(amount);
    }

    addInterest()
    {
this._balance+=(this._balance*this.getInterest()/100);
    }
    endOfMonth()
{
    //this.addInterest(); ??
    return "Interest added SavingsAccount 2: balance:"+ super.getBalance()+ "interest:"+ this.getInterest();
}
    toString() {
        return super.toString + ": interest "+ this.interest;
    }
}
