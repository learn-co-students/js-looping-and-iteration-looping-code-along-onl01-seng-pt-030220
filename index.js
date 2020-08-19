// Code your solutions in this file

function writeCards(cards, event) {
  let newCards = []
  for (let i = 0; i < cards.length; i++) {
    newCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  }
  return newCards;
}

function countDown(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  console.log(num)
}