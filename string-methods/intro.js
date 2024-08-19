// region task

// function User(fullName){
//     this.fullName = fullName;
//     this.creditLimit = 1000;
//     this.balans = 0;
//     this.precentOfMinPayment = 10;
//     this.getBalance = function () {
//         if (this.balance) {
            
//         }
//     }
// }

// const client = new User("ulya amirli")
// console.log(client);



// task 1

// function Letter(text) {
//     this.text = text;
    
//     this.countLetters = function() {
//         return this.text.replace().length;
//     }
// }

// let text = new Letter("John Doe");
// console.log(text.countLetters()); 

// let text1 = new Letter("A beautiful game");
// console.log(text1.countLetters()); 


// task 2

// function slitnoyeName () {
//     this.firstName = firstName;
//     this.lastName = lastName;  

//     if (nameParts.length === 2) {
//         this.firstName = nameParts;
//         this.lastName = nameParts;     alinmadi task
        
//         console.log();
        
//     } else {
//         console.log("Zehmət olmasa, adinizi «AD SOYAD» kimi daxil edin.");
//     }
// }


//task 3

// let num1 = 16792;
// let num2 = 5437;
// let product = num1 * num2;


// let productString = product.toString();
// let sixthDigit = productString[5];

// console.log(" 6-ci rəqem: " + sixthDigit);

// task 4

// let price = prompt("Zehmət olmasa, qiymeti 530.90 formatinda daxil edin:");
// let priceParts = price.split('.');

// if (priceParts.length === 2) {
//     let manat = parseInt;
//     let qepik = parseInt;

//     console.log(`${manat} manat ${qepik} qepik`);
    
// }else {
   
//     console.log("Zehmet olmasa, qiymeti 530.90 düzgün daxil edin.");
// }

// task 5

// let fullName = prompt("enter your name")
// let nameShorted = fullName.slice(0 , fullName.indexOf(" ")) + fullName.slice(fullName.indexOf(" "), fullName.indexOf(' ')+2)+ `.`+fullName.slice(fullName.lastIndexOf(" ")+1, fullName.lastIndexOf(" ")+2)+`.`
// console.log(nameShorted);

// task 6

const userInput = prompt("<<YYYY.MM.DD>> formatinda tarix daxil edin")

function showDate(date){
    const splitedText = date.split(".");
    const year = isNaN(splitedText[0]);
    const month = isNaN(splitedText[1]);
    const day = isNaN(splitedText[2]);

    if(!year && !month && !day){
        console.log();
    }
}


// task 12

const changeFirstLetter = (word, letter) => {
    
}