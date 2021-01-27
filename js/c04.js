var table = 9; // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1; // Set counter to 1
var msg = ''; // Message
var camvasNames = ['Filler', 'Paperback', 'EBook', 'Audio Book', 'Hard back'];

if (operator === 'addition') {
	// Do addition
	while (i < 4) {
		msg += camvasNames[i] + ' Price: ' + '$' + (i+table) + '<br />';
		i++;
		table++;
	}
} else {
	// Do multiplication
	while (i < 4) {
		msg += camvasNames[i] + ' Price: ' + '$' + (i*table) + '<br />';
		i++;
		table++;
	}
}


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
