'use strict';
let score=0;

function getusername(){
let userName=prompt('Please Enter Your Name');
console.log(userName);
alert('Welcome ' + userName + ' to my website');



 let userName=prompt('Please Enter Your Name');
 console.log(userName);
 alert('Welcome ' + userName + ' to my website');



confirm(userName +' let\'s see if you can answer the following question with yes or no about me')
}
getusername()

function getquestion1(){
let qNumber1=prompt('Did we meet Before ?')
switch (qNumber1.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber1 + ' is'+ ' not correct' );
  alert ('that\'s not correct we never meet');
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber1 + ' is'+ ' correct' );
  alert ('that\s correct we never meet');
  score++;
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}
}
getquestion1();
function getquestion2(){
let qNumber2=prompt('Do you think im a skilled driver ?');

switch (qNumber2.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber2 + ' is'+ ' correct' );
  alert ('yes i\'m a skilled driver thank you');
  score++;
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber2 + ' is'+ ' not correct' );
  alert ('that\s Not correct');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}
}
getquestion2();
function getquestion3(){
let qNumber3=prompt('Do you think that i\'m a graphic disginer ?');

switch (qNumber3.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber3 + ' is'+ ' correct' );
  alert ('yes i\'m ');
  score++;
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber3 + ' is'+ ' not correct' );
  alert ('that\s Not correct i\'m a graphic designer');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}
}
getquestion3();
function getquestion4(){
let qNumber4=prompt('Do you think that i like to drink coffee ?');

switch (qNumber4.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber4 + ' is'+ ' correct' );
  alert ('yes i\'m ');
  score++;
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber4 + ' is'+ ' not correct' );
  alert ('that\s Not correct');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}
}
 getquestion4();
 function getquestion5(){
let qNumber5=prompt('do you think that i\'m still in my twenty ?');

switch (qNumber5.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber5 + ' is'+ ' correct' );
  alert ('yes that\'s correct');
  score++;
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber5 + ' is'+ ' not correct' );
  alert ('that\s Not correct');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}
 }
 getquestion5();
 function getquestion6(){
let qNumber6=parseInt(prompt('can u guess my age ?', 'you can try 4 times to guess my age'));
console.log(qNumber6);
let counter = 1;
for ( let i = 1 ; i < 4 ; i++ ) {
  if (qNumber6 > 29){
    qNumber6 =prompt('thats too high guess again');
    counter++;
  } else if (qNumber6 < 29) {
    qNumber6 =prompt('thats too low guess again');
    counter++;
  }else {
    alert('thats correct');
    score++;
    break;
  }
}

if (counter === 4){
  alert('you have your chance to guess the answer ! my age is 29');
}
 }
getquestion6();
function getquestion7(){
let favM = ['interstellar','arrival', 'black Panther','avengers']
let qNumber7 =prompt('waht is my fav-movie ?',' hints interstellar - arrival - black Panther - avengers ')
qNumber7=qNumber7.toLocaleLowerCase()
let count = 1;
for (let i=1; i < 6 ; i++) {
  if (qNumber7===favM[0] || qNumber7===favM[1] || qNumber7===favM[2] || qNumber7===favM[3]){
    alert('thats correct');
    score++;
    break;
  }else {
    alert ('No Try Again');
    qNumber7 =prompt('Guess Again');
    count++;
  }
}
if (count === 6) {
  alert('you run out of attempts and my fav-movies are interstellar - arrival - black Panther - avengers');
}
console.log (score);
}
getquestion7();
alert('thanks ' + ' for answering all the question and your score is '+ score );



