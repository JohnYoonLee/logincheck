//labwork pt 1

const lab1 = function percentile() {
let number = prompt("Please enter a number :");
number = parseFloat(number);

let QuantityValue = document.querySelector(".Quantity");
console.log(QuantityValue)
QuantityValue.innerHTML = `Quantity: ${number}`;

let percentage = prompt("Please enter a percentage :");
percentage = parseFloat(percentage);
TruePercentage = percentage * .01;
NewNumber = number * TruePercentage
let PercentageValue = document.querySelector(".Percent");
PercentageValue.innerHTML = `${percentage}% of Quantity, ${number}, is ${NewNumber}`
}
lab1()

//labwork pt 2
const lab2pt1 = function grading(){
    let number = prompt("Please enter a grade between 1 and 100 :");  
    console.log(number) 
    number = parseInt(number);
    let ifStr="";
if (number>90)
    ifStr="If, A";
else if (number>80)
    ifStr="If, B";
else if (number>70)
    ifStr="If, C";
else if (number>60)
    ifStr="If, D";
else
    ifStr="If, F";
    let FinalGrade = document.querySelector(".Grade1");
    FinalGrade.innerHTML = ifStr
    }
const lab2pt2 = function grading() {
    let number = prompt("Please enter a grade between 1 and 100 :");  
    console.log(number) 
   
    let switchStr ="";
    switch(true) {
        case number > 90:
        switchStr ="Switch: A"
        break;
        case number > 80:
        switchStr ="Switch: B"
        break;
        case number > 70:
        switchStr ="Switch: C"
        break;
        case number > 60:
        switchStr ="Switch: D"
        break;
        default:
        switchStr ="Switch: F"
    } 
    let FinalGrade = document.querySelector(".Grade2");
    FinalGrade.innerHTML =`${switchStr}`
}
lab2pt1()
lab2pt2()

//labworkpt3()
const lab3 = function punishment(){
    let badguy = prompt("Who are the lines for? :");
    let lines = prompt("What will the line be? :");
    let count = prompt("How many times will they right the line? :");
    count = parseInt(count);
    console.log("Writer: ", badguy);
    for (let number = 0; number < count;){
        console.log(lines);
        number = number + 1;
    }
    
}
lab3()

//labworkpt4
const lab4 = function punishment(){
    let consequence = document.querySelector(".Part5")
    let badguy = prompt("Who are the lines for? :");
    let lines = prompt("What will the line be? :");
    let count = prompt("How many times will they right the line? :");
    
    count = parseInt(count);
    
    console.log("Writer: ", badguy);
    
    let number = 1; 
    
    let lineStr =""

    while (number <= count)
        {
        lineStr += `${number} ${lines} <br>`
        number = number + 1;
        console.log(number)
    }
    consequence.innerHTML = lineStr;
    
}

lab4()

//labwork part 5
lab5 = () => {
    let consequence = document.querySelector(".Part5")
    let badguy = prompt("Who are the lines for? :");
    let lines = prompt("What will the line be? :");
    let count = prompt("How many times will they right the line? :");
    
    count = parseInt(count);
    
    console.log("Writer: ", badguy);
    
    let number = 1; 
    
    let lineStr =""

    while (number <= count)
        {
        lineStr += `${number} ${lines} <br>`
        number = number + 1;
        console.log(number)
    }
    consequence.innerHTML = lineStr;
}
lab5()

//labwork part 6
const lab6pt1 = function multiplication()
{
    let timestable1 = document.querySelector(".tables1")
    let productStr = ""
    for (let factor1=1; factor1 <= 12; factor1++){
        for (let factor2=1; factor2<= 12; factor2++){
            let product = factor1 * factor2;
            
            productStr += `${factor1} X ${factor2} = ${product}<br>`;
        }
    }
    console.log(productStr)
    timestable1.innerHTML = productStr;
}


function createtables(factor1){
    let timestable2 = document.querySelector(".tables2")
    let productStr = ""
    for(let index = 1; index < 13; index++){
        product = factor1 * index; 
        productStr += `${factor1} X ${index} = ${product}<br>`;
    }
    timestable2.innerHTML = productStr;
}
const lab6pt2 = function timestable(){
    for (let factor1=1; factor1 <= 12; factor1++){
        createtables(factor1);
        console.log(createtables);
    }
}


function createtable(factor1){
    let timestable2 = document.querySelector(".tables2")
    let productStr = ""
    for(let delimiter = 1; delimiter < 13; index++){
        product = factor1 * delimiter; 
        productStr += `${factor1} X ${index} = ${product}<br>`;
    }
    timestable2.innerHTML = productStr;
}

const alltables= function timestable(){
    for (let factor1=1; factor1 <= 12; factor1++){
        createtable(factor1);
        console.log(createtable);
    }
}


lab6pt1()
lab6pt2()
alltables()

//Hoisting in terms of a function is calling a function before it is defined in the code
//Hoisting in terms of variables is using a variable before its been assigned in the code


HoistDemo()

function HoistDemo() {

    console.log("Hello. This is being hoisted");

}

console.log(hoisted)
var hoisted

//EMCA have migitated hoisting issues by establishing 'let' and 'const' that are able to prevent accessing those variables
//before their declaration