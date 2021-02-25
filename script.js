// Add current day of the week, month and day using Moment.js
let currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').append(currentDate);

// Create a div, add row and hour classes, add hours to each row and append to .container
const hoursArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

for (i = 0; i < hoursArr.length; i++) {
    // Use flex bootstrap to fix these divs!
    let textArea = $('<textarea>').addClass('description');
    let hrDiv = $('<div>').addClass('hour col-1').text(hoursArr[i]);
    let textDiv = $('<div>').addClass('row col-10');
    let saveDiv = $('<div>').addClass('saveBtn col-1').append('<img src="./img/save.png">');
    textDiv.append(textArea);
    $('.container').addClass('container').append(hrDiv, textDiv, saveDiv);

    // let currentHour = moment().format('HH A');
    
    // if (currentHour.isBefore(hoursArr[i])) {
    //     hrDiv.addClass('past');
    // } else if (currentHour.isSame(hoursArr[i]) ) {
    //     hrDiv.addClass('present');
    // } else {
    //     hrDiv.addClass('future');
    // };

    function saveText() {};
};

