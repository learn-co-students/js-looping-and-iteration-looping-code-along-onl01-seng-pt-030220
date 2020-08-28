// Code your solutions in this file

function writeCards(names, surprise) {
    let thankYou = [];
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }
    return thankYou;
}
     
 
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }