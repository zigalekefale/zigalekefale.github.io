var table = 3;           // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';  // Message
myFunction();
if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

function myFunction() {
  var person = prompt("Please enter a number");
  if (person != null) {
    table=person;
  }
}
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
