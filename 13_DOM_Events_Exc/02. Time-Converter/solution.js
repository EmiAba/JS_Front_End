function attachEventsListeners() {
    const convertButtonElements = document.querySelectorAll('input[type=button][value=Convert]');
    const inputElements = document.querySelectorAll('input[type=text]');

    const toSeconds = (value, unit) => {
        switch (unit) {
            case 'days':
                return value * 24 * 60 * 60;
            case 'hours':
                return value * 60 * 60;
            case 'minutes':
                return value * 60;
            case 'seconds':
                return value;
        }
    };

    const converters = {
        days(seconds) {
            return seconds / 60 / 60 / 24;
        },
        hours(seconds) {
            return seconds / 60 / 60;
        },
        minutes(seconds) {
            return seconds / 60;
        },
        seconds(seconds) {
            return seconds;
        }
    }

    for (const buttonElement of convertButtonElements) {
        buttonElement.addEventListener('click', (e) => {
            // const inputElement = e.currentTaerget.parentElement.querySelector('input[type=text]');
            const currentInputElement = e.currentTarget.previousElementSibling;
            
            for (const inputElement of inputElements) {
                const seconds = toSeconds(Number(currentInputElement.value), currentInputElement.id);
                inputElement.value = converters[inputElement.id](seconds);
            }
        });
    }
}

// //function attachEventsListeners() {
//     let daysInput = document.getElementById('days');
//     let hoursInput = document.getElementById('hours');
//     let minutesInput = document.getElementById('minutes');
//     let secondsInput = document.getElementById('seconds');

//     let daysBtn = document.getElementById('daysBtn');
//     let hoursBtn = document.getElementById('hoursBtn');
//     let minutesBtn = document.getElementById('minutesBtn');
//     let secondsBtn = document.getElementById('secondsBtn');

//     daysBtn.addEventListener('click', function() {
//         let days = daysInput.value;
//         hoursInput.value = days * 24;
//         minutesInput.value = days * 1440;
//         secondsInput.value = days * 86400;
//     });

//     hoursBtn.addEventListener('click', function() {
//         let hours = hoursInput.value;
//         daysInput.value = hours / 24;
//         minutesInput.value = hours * 60;
//         secondsInput.value = hours * 60 * 60;
//     });

//     minutesBtn.addEventListener('click', function() {
//         let minutes = minutesInput.value;
//         hoursInput.value = minutes / 60;
//         daysInput.value = minutes / 60 / 24;
//         secondsInput.value = minutes * 60;
//     });

//     secondsBtn.addEventListener('click', function() {
//         let seconds = secondsInput.value;
//         hoursInput.value = seconds / 60 / 60;
//         minutesInput.value = seconds / 60;
//         daysInput.value = seconds / 60 / 60 / 24;
//     });
// }