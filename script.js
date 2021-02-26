// Add current day of the week, month and day using Moment.js
let currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').append(currentDate);

// Declare business hours array
const hoursArr = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

// Create divs for the row container, hourly divs, text areas and save buttons
for (i = 0; i < hoursArr.length; i++) {    
    const rowDiv = $('<div>').addClass('row time-block');
    const textArea = $('<textarea>').attr('id', 'text' + i).addClass('col-10');
    const hrDiv = $('<div>').addClass('hour col-1 pt-3').text(hoursArr[i]);
    const saveDiv = $('<div>').attr('id', i).addClass('saveBtn col-1 img-fluid d-flex justify-content-center align-items-center').append('<img src="./img/save.png">');
    rowDiv.append(hrDiv, textArea, saveDiv);
    $('.container').append(rowDiv);

    // Get events from localStorage (if any)
    let persist = localStorage.getItem(i);
    textArea.val(persist);

    //  Check current hour against hoursArr and add styling for present vs future vs past
    let currentHour = moment(moment(), 'h A');
    let hourCompare = moment(hoursArr[i], 'h A');
    
    if (moment().format('h A') === moment(hourCompare).format('h A')) {
        textArea.addClass('present');
    } else if (currentHour.isBefore(hourCompare)) {
        textArea.addClass('future');
    } else {
        textArea.addClass('past');
    };
};

// Add save button click functionality to save tasks to localStorage
$('.saveBtn').click(function () {
    let btnId = $(this).attr('id');
    let task = $('#text' + btnId).val();
    localStorage.setItem(btnId, task);
});

