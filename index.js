// Code your solutions in this file
function writeCards(arrayNames, event) {
    const customMessage = [];
    for (let i = 0; i < arrayNames.length; i++) {
        customMessage.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`);
    };
    return customMessage;
};

function countDown(num) {
    for (let i = num; i >=0; i--) {
        console.log(i);
    };
};