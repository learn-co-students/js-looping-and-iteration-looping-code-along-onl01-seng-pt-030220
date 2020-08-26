// Code your solutions in this file
function writeCards(array, eventName){
    const answer = []
    for (let i = 0;i < array.length; i++){
        answer.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return answer
}

function countDown(n){
    while (n >= 0){
        console.log(n)
        n--
    }
}