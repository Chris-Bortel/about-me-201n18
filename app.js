console.log('I am working');

//prompt user with five yes or no questions
//use .toUpperCase()
//let user know whether they are correct with alert
var userName = prompt('STOP! Who would cross the Bridge of Death must answer me these questions three, ere the other side he see: What...is your name?');
console.log(userName + ' is correct');

var quest = prompt('Is your quest to seek the holy grail?');
console.log(quest);
if (quest === 'yes'){
  alert('correct! ');
} else if (quest === 'no') {
  alert('Incorrect into the pit of death you go');
}

var color = prompt('Is your favorite color blue?');
console.log(color);
if (color === 'yes'){
  alert('correct! ');
} else if (color === 'no'){
  alert('Incorrect into the pit of death you go');
}

var assyria = prompt('Do you know the capitol Assyria');
console.log(assyria);
if (assyria === 'yes'){
  alert('correct! ');
} else if (assyria === 'no'){
  alert('Incorrect into the pit of death you go');
}

var airSpeed = prompt('do you know the average air-speed velocity of an unladen swallow?');
console.log(airSpeed);
if (airSpeed === 'yes'){
  alert('correct! ');
} else if (airSpeed === 'no'){
  alert('Incorrect into the pit of death you go');
} alert(userName + ' you are either dead, or alive');




