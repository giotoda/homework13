//1.
let number = getRandomNumbers();
function oddOrEven (number){
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(oddOrEven(number));
//4.
function getRandomNumbers(){
    let randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}
//3.
let squareSide = getRandomNumbers();
function squareArea(a){
     return areaOfRectangle (a , a);
}
console.log(squareArea(squareSide));
//6.
let n = Math.round(Math.random() * 100)
function generateRandomNumbersArray (n){
    let numberArray= [];
    for(let i = 0 ; i < n ; i++ ){
        numberArray.push(getRandomNumbersFromRange (min , max));
    }
    return numberArray;
}

let randomNumbers = generateRandomNumbersArray (n);

