// Task No- 01
// Math Operations

function mindGame (num){
    let operations= ((((num * 3) +10) /2)-5)
    return operations;
    }
    
    const total= mindGame (20);
    console.log (total);


// Task No-02
// Finding Even & Odd  String

function evenOdd (string1){
    let string = (string1);
    console.log(string.length);
      if (string.length % 2 ===0) {
        return 'even' ;
      }
      else {
        return 'odd' ;
      }
}
const str = evenOdd ('web-developer');
console.log (str)



// Task No-03
// Substraction Operations

function isLGSeven (number1){
    let substractions = (number1 - 7);
    if (substractions < 7){
        return substractions;
    }
    else if (substractions >= 7){
        let largeNumber= (number1 * 2)
        return largeNumber;
    }
}
    
    const totalSubstraction= isLGSeven (20);
    console.log (totalSubstraction);



// Task No-04
// From Numbers Array To Finding Bad/Negative Data

function findingBadData(number){
  let badNumber=[]
  for(let i = 0; i < number.length; i++) {
    const num =number[i]
    if(num < 0){
      badNumber.push(num)
    }
  }
  const result =badNumber.length
  return result;
};
const numbers=[12,25,33,-55,-96]
const numberData=findingBadData(numbers)
console.log(numberData)



// // Task No-05
// // Gems And Diamond Related Operations

function gemsToDiamond (gems1, gems2, gems3){
    let totalDiamonds= (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
    console.log (totalDiamonds);
    let totalGemsAndDiamonds= (420 + 960 + 1935);
    
       if (totalGemsAndDiamonds < 1000*2){
        return totalGemsAndDiamonds;
    }
    else if (totalGemsAndDiamonds >= 1000*2){
        let smallNumber= (totalGemsAndDiamonds - 2000)
        return smallNumber;
    }
    }

    const totalOperations=  gemsToDiamond (20, 30, 45 );
    console.log (totalOperations);



