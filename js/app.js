'use strict'

alert ('welcome to my website ^-^')

let userName = prompt ('what is your name?');
console.log ('the user entered:' + userName );

while (!userName){
userName = prompt ('please enter your name');
console.log ('the user entered:' + userName );
}
let counter =0
let myfavoritefood = prompt ('is mansaf my favorite food?').toLowerCase();
if (myfavoritefood === 'yes' || myfavoritefood === 'y')  {
    alert ('you guessed it right!') 
    counter++
    //console.log ('the user entered q1:' + myfavoritefood )
 

}
else {
    alert ('you gussed it wrong!')
}

let myfavoriteshow = prompt ('Do I like the Office?').toLowerCase();
if (myfavoriteshow ==='yes' || myfavoriteshow === 'y') {
    alert ('you are right!')
    counter++
    //console.log ('the user entered q2:'+ myfavoriteshow)

}
else {
    alert ('no! it is not correct')
}

let myfavoriteanime = prompt ('Do you know which anime I like the most?').toLowerCase();
if (myfavoriteanime === 'yes' || myfavoriteanime === 'y') {
    alert ('cool!')
    counter++
    //console.log( 'the user enterd q3:' + myfavoriteanime)
}
else {
    alert ('really?')
}

let myguessinggame = prompt ('Do you want to go on?').toLowerCase();
if (myguessinggame === 'yes' || myguessinggame === 'y') {
    alert ('great choice')
    counter++ 
    //console.log ('the user entered q4:' + myguessinggame)
}
else {
    alert (' come on! let us move on!')
}

let mywebsite = prompt ('Did you like my website?').toLowerCase();
if (mywebsite === 'yes' || mywebsite === 'y') {
    alert ('I appreciate it ^-^')
    counter++
    //console.log('the user entered q5:' + mywebsite)
}
else {
    alert ('too bad ):')
}



for (let x = 0; x <4; x++ ){
   let number = prompt ('which number is my favorite number?')
   if  (number ==7 ){
       alert ('you are right')
       counter++
       break 
   }
   else  if (number>7) {
       
       alert ('too high')
    
   }
    else {
        alert ('too low')
    }
}

for (let v=0; v<6; v++){
 let arrey= [ 'steins gate','erased','death parade']
 let favoritanimes = prompt ('Which anime is my favorite?').toLowerCase();
  console.log(favoritanimes)
     if ( arrey.includes(favoritanimes)){
        alert (' you gussed it right')
        counter++
        break
     }
     
     else {
         alert ('guess again')
         
     }
     
 }
alert (' you got '+ counter + '/7')














