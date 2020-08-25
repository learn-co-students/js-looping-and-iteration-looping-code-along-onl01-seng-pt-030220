// Code your solutions in this file

function writeCards(array, event) {
    let i = 0
    let new_arr = []
    while ( i < array.length) {
        
        new_arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
        i++
    }
    return new_arr;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    }
}