// declare global variables

// Set the beginning hour to be 9AM
var hourBeginning = moment().startOf('day').add(8,'h');
// totalHours = 9AM to 7PM = 10 hours
var totalHours = 10;
// Get current hour
var currentHour = moment().format('H');
// initializes timeTableElement and currentState of present, future, and past;
var timeTableElement;
var currentState;

