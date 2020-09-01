// Code your solutions in this file
function writeCards(names, event) {
  let newArr = []
  for(let i = 0; i < names.length; i++) {
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newArr
};

function countDown(number){
  let count = number;
  while(count >= 0) {
    console.log(count);
    count -= 1;
  }
};