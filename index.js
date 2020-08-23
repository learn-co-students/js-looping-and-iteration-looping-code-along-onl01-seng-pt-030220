// Code your solutions in this file
function writeCards(array){
let arr=[]

for(let index=0; index < array.length; index++)
{
   arr[index]= `Thank you, ${array[index]}, for the wonderful surprise gift!`
}
return arr
}


function countDown(count){

while(count >= 0 )
{
 console.log(count--)
}

}
