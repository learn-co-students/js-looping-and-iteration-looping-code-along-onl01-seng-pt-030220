// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  function writeCards(arr, event){
    let completedCards = []
    for (let i = 0; i < arr.length; i++) {
        completedCards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
        // console.log(`${arr[i]}`)
      }
      return completedCards;
  }


  

function countDown(num) {
    // let i = 0; // the initialization moved OUTSIDE the body of the loop!
    while (num > 0) {
      console.log(num);
      num--; // the iteration moves INSIDE the body of the loop!
    }
   
    console.log(num);
  }
   
 
