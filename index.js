// Code your solutions in this file
function writeCards(cards, event) {
    let funCards = []
    for (let i = 0; i < cards.length; i++) {
      funCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return funCards;
  }
  
  function countDown(num) {
    while (num > 0) {
      console.log(num);
      num--;
    }
    console.log(num)
  } 
