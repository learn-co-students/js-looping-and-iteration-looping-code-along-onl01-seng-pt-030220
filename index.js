// Code your solutions in this file
const array = ["Ada", "Brendan", "Ali"] 
const event = 'birthday'

const messages = []

function writeCards(array, event){ 
    for (let i = 0 ; i < array.length ; i++ ) { 
    const meow = (`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    console.log(meow)
    messages.push(meow)
    }
    return messages
}


function countDown(number){
while (number >= 0){
    console.log(number)
    number--
}
}
