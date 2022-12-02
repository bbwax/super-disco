
const currentDayEl = $('#currentDay');






//display current day
function displayDay(){
    const date = moment().format('dddd,  MMM DD, YYYY');
    currentDayEl.text(date);
    
}

displayDay();

//display 1 hour timeblocks from 5:00 to 24:00
