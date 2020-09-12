// Code your solutions in this file
let array = ["Lisa", "Kaitlin", "Jan"]
function writeCards(array, event) {
  const newArray = []
for (let i = 0; i < array.length; i++){
  newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
}
return newArray;
}

function countDown(num) {
  let i = num
while (i >= 0) {
  console.log(i--);
}

}
