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

const displayToday = () => {
  // today display
  const today = moment().format("dddd, MMMM Do, HH:mm A");
  $('#currentDay').text(today);
};

const fillTimeTable = () => {
  for (var hour = 0; hour < totalHours; hour++) { 
    var realHour = hour + 9;
    // add one hour while iterating for loop
    timeTableElement = hourBeginning.add(1,'h').format('HH:mm A');

    // determine the currentState based on the conditions
    if (currentHour == realHour) {
        currentState = 'present';
    } else if (currentHour < realHour) {
        currentState = 'past';
    } else {
        currentState = 'future';
    }

    var appendBlock = 
        `<div id="hour-${realHour}" class="row time-block ${currentState}">
            <div class="col-md-1 hour">${timeTableElement}</div>
            <textarea class="col-md-10 description ${realHour}"></textarea>
            <button class="btn saveBtn col-md-1">
                <i class="fas fa-save"></i>
            </button>
        </div>`;

    $(".container").append(appendBlock);
    }
  loadSchedule();
}

// Function calls
displayToday();
fillTimeTable();
$('.saveBtn').on('click', saveSchedule);

