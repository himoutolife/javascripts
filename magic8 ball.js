let userName =(' '); //lets user input name
userName ? console.log(`Hello ${userName}`) : console.log('Hello');

let userQuestion = ' '; //lets user enter question
console.log (`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ' ';

switch(randomNumber){
  case 0:
    eightBall = 'Meh';
    break;
  case 1:
    eightBall = 'Go get pizza instead';
    break;
  case 2:
    eightBall = 'Absolutely not';
    break;
  case 3:
    eightBall = 'FUCK YEAH MOTHERFUCKER';
    break;
  case 4:
    eightBall = 'Error 404: reply not found';
    break;
  case 5:
    eightBall = 'Hell yes!';
    break;
  case 6:
    eightBall = 'Too sleepy to respond right now';
    break;
  case 7:
    eightBall = 'all signs point to maybe';
    break;
  case 8:
    eightBall = 'need more caffeine';
    break;
}
console.log(`The 8 ball answered with: ${eightBall}`)