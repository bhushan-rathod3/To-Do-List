// ## Online Payment System

// Create Payment class with amount, date.
// Subclasses: CreditCardPayment, PayPalPayment, CryptoPayment.
// Abstraction: Hide sensitive details like #cardNumber.

class Payment{    
    constructor(amount , date){
        if(this.constructor === 'Payment'){
            throw new Error("This Class is supposed to be abstract");
        }
        this.amount = amount;
        this.date = date;
    }

}

class CreditCardPayment extends Payment {
    #cardNumber;

    constructor(amount, date, cardNumber) {
        super(amount, date); 
        this.#cardNumber = cardNumber; 
    }
}

class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.email = email;
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }
}


const creditCardPayment = new CreditCardPayment(5000,'2025-02-04',1284281);
const payPalPayment = new PayPalPayment(5000,'2025-02-04','bsr@gmail.com');
const cryptoPayment = new CryptoPayment(5000,'2025-02-04','cryp@crypto');

console.log(creditCardPayment.cardNumber); //Won't be logged as it is private
console.log(payPalPayment.amount);