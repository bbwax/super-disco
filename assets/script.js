$(document).ready(function () {
    const currentDayEl = $('#currentDay');
    const containerEl = $('.container');
    const tableEl = $('.table');
    const thead = $('.thead');
    



    //display current day
    function displayDay() {
        const date = moment().format('dddd,  MMM DD, YYYY');
        currentDayEl.text(date);

    }

    function loadLocal(){
        const valueString = JSON.parse(localStorage.getItem("server")); // ["poo","peee"]
        return valueString || [];
    }

    displayDay();

    //display 1 hour timeblocks from 5:00 to 24:00
    function createSchedule() {
        for (let i = 5; i < 24; i++) {
            var currentHour = moment().hour();
            if (currentHour > i) {
                var class1 = "table-danger";
            }
            else if (currentHour == i) {
                var class1 = "table-active";
            }
            else {
                var class1 = "table-success";
            }
            const values = loadLocal()
            const index = i - 5;
            const data = values[index] || "";

            thead.append($(` <tr>
                                <th scope="row">${i + ':00'}</th>
                                <td class=${class1}><textarea class="text-area" style="border-left:none">${data}</textarea></td>
                                <td><button type="button" class="save-button btn btn-outline-info">Save</button></td>
                            </tr>`));
        }
        var buttonEl = $('.save-button');
        
        function saveLocal() {
            var textValues = $('.text-area');
            const values = [];
            for(const val of textValues){
                values.push(val.value);
            }
            var valueString = JSON.stringify(values);
            localStorage.setItem("server", valueString);


        }
        for (var button of buttonEl) {
            button.addEventListener('click', saveLocal);
        }



    }
    createSchedule();
});