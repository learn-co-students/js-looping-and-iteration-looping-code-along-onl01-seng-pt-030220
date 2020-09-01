
function writeCards(arr, eventName) {
  let newArr = [];

  for( let i = 0; i < arr.length; i++){
     newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  };

  return newArr;
};

// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(num) {
  let i = 0;

  while (i <= num)  {
    console.log(num--);
  }
};


// function countDown(startingNumber) {
//   while (startingNumber > 0) {
//     console.log(startingNumber);
//     startingNumber -= 1;
//   }
  
//   console.log(startingNumber);
// };

// countDown(12);
