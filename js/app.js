'use strict'

alert ('welcome to my website ^-^')

let userName = prompt ('what is your name?');
console.log ('the user entered:' + userName );

while (!userName){
userName = prompt ('please enter your name');
console.log ('the user entered:' + userName );
}

let myfavoritefood = prompt ('is mansaf my favorite food?').toLowerCase();
if (myfavoritefood === 'yes' || myfavoritefood === 'y')  {
    alert ('you guessed it right!')
    //console.log ('the user entered q1:' + myfavoritefood )
 

}
else {
    alert ('you gussed it wrong!')
}

let myfavoriteshow = prompt ('Do I like the Office?').toLowerCase();
if (myfavoriteshow ==='yes' || myfavoriteshow === 'y') {
    alert ('you are right!')
    //console.log ('the user entered q2:'+ myfavoriteshow)

}
else {
    alert ('no! it is not correct')
}

let myfavoriteanime = prompt ('Do you know which anime I like the most?').toLowerCase();
if (myfavoriteanime === 'yes' || myfavoriteanime === 'y') {
    alert ('cool!')
    //console.log( 'the user enterd q3:' + myfavoriteanime)
}
else {
    alert ('really?')
}

let myguessinggame = prompt ('Do you want to go on?').toLowerCase();
if (myguessinggame === 'yes' || myguessinggame === 'y') {
    alert ('great choice') 
    //console.log ('the user entered q4:' + myguessinggame)
}
else {
    alert (' come on! let us move on!')
}

let mywebsite = prompt ('Did you like my website?').toLowerCase();
if (mywebsite === 'yes' || mywebsite === 'y') {
    alert ('I appreciate it ^-^')
    //console.log('the user entered q5:' + mywebsite)
}
else {
    alert ('too bad ):')
}











