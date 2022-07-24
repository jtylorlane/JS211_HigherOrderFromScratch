//.map
const mapArray = [5, 10, 20, 30]; 

const updatedArray = mapArray.map(x => x * 3);

console.log(updatedArray)


//.reduce() 
const foodArray = [77.00, 53.00, 21.00, 10.05]

const startingValue = 0;
const sumWithInitial = foodArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue, startingValue
  );

console.log(sumWithInitial)


//filter() 
const filterArray = ['mike', 'president', 'texas', 'football', 'names', 'drops'];

const result = filterArray.filter(word => word.length >= 6);

console.log(result);


// 
let numberArray = [6, 12, 3, 1, 40];

function isEven(num) {
  if (num % 2==0) 
    return true;
}

numberArray = numberArray.filter(isEven)
console.log(numberArray);

