'use strict';
let userName=prompt('Please Enter Your Name');
console.log(userName);
alert('Welcome ' + userName + ' to my website');
confirm(userName +' let\'s see if you can answer the following question with yes or no about me')

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
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}

let qNumber2=prompt('Do you think im a skilled driver ?');

switch (qNumber2.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber2 + ' is'+ ' correct' );
  alert ('yes i\'m a skilled driver thank you');
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber2 + ' is'+ ' not correct' );
  alert ('that\s Not correct');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}

let qNumber3=prompt('Do you think that i\'m a graphic disginer ?');

switch (qNumber3.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber3 + ' is'+ ' correct' );
  alert ('yes i\'m ');
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber3 + ' is'+ ' not correct' );
  alert ('that\s Not correct i\'m a graphic designer');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}

let qNumber4=prompt('Do you think that i like to drink coffee ?');

switch (qNumber4.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber4 + ' is'+ ' correct' );
  alert ('yes i\'m ');
  break;
case 'NO' :
case 'N' :
//console.log('the answer ' + qNumber4 + ' is'+ ' not correct' );
  alert ('that\s Not correct');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}

let qNumber5=prompt('do you think that i\'m still in my twenty ?');

switch (qNumber5.toUpperCase()) {
case 'YES' :
case 'Y' :
//console.log('the answer ' + qNumber5 + ' is'+ ' correct' );
  alert ('yes that\'s correct');
  break;
case 'NO' :
case 'N' :
////console.log('the answer ' + qNumber5 + ' is'+ ' not correct' );
  alert ('that\s Not correct');
  break;
default:
  alert(userName + (' You should answer with Yes/Y or No/N'));
}

alert('thanks ' + userName + ' for answering all the question' );



