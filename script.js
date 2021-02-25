// Add current day of the week, month and day using Moment.js
let currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').append(currentDate);

// Create a div, add row and hour classes, add hours to each row and append to .container
const hoursArr = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

for (i = 0; i < hoursArr.length; i++) {
    // Use flex bootstrap to fix these divs!
    let hrDiv = $('<div>').addClass('hour description').text(hoursArr[i]);
    textDiv = $('<div>').addClass('row textarea description');
    saveDiv = $('<div>').addClass('time-block saveBtn');
    $('.container').append(hrDiv, textDiv, saveDiv);

    // let currentHour = moment().format('HH A');
    
    // if (currentHour.isBefore(hoursArr[i])) {
    //     hrDiv.addClass('past');
    // } else if (currentHour.isSame(hoursArr[i]) ) {
    //     hrDiv.addClass('present');
    // } else {
    //     hrDiv.addClass('future');
    // };
};

