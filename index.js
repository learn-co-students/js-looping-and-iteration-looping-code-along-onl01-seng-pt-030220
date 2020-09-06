// Code your solutions in this file
function writeCards(arr, eventName) {
    let newArr = [];
  
    for( let i = 0; i < arr.length; i++){
       newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    };
  
    return newArr;
  };
  
  function countDown(num) {
    let i = 0;
  
    while (i <= num)  {
      console.log(num--);
    }
  };