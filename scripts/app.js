//1

const numbers = [10,20,30,40,50];

const sum = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
const average = sum / numbers.length;

console.log("Average:", average );

////////////////////////////////////////////////////////////////////


//2

const people = [
    { name: "Luka", age: 18},
    { name: "Giorgi", age: 16},
    { name: "Irina", age: 21},
    { name: "Nika", age: 20},
    { name: "Natia", age: 17},
];

console.log(people);

////////////////////////////////////////////////////////////////////


//3

const personalInformation = {
    firstName: "Luka",
    lastName: "Sadoiani",
    address: ["Lubliana St." , "Apt1" , "Tbilisi"],
    age: 18,
    phoneNumbers: ["+995555444333" , "+995555222111"],
};

console.log(personalInformation);

////////////////////////////////////////////////////////////////////


//4

const sentence = `My name is ${personalInformation.firstName}, My age is ${personalInformation.age}, My address is ${personalInformation.address[0]}`;

console.log(sentence);

////////////////////////////////////////////////////////////////////