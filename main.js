function main() {
    //Primary program variables.
    const datePicker = document.querySelector(`#datePicker`);
    const submit = document.querySelector(`#submit`);
    const timer = document.querySelector(`#timer`);
    //Process the number of days between the selected date and the current date when the Submit button is pressed.
    submit.addEventListener(`click`, function(){
        //Create two dates; those being the current date and the date selected by the user.
        const then = new Date(datePicker.value);
        const now = new Date();
        //Split the datePicker variable value into usable strings inside an array; intended to make displaying final results more appealing.
        const datePickerArray = datePicker.value.split(`-`);
        //Display final results.
        timer.innerHTML = `There are ${Math.abs(((then.getTime() - now.getTime()) / 86400000).toFixed(0))} days between today and ${datePickerArray[1]}/${datePickerArray[2]}/${datePickerArray[0]}.`;
    });
}
main();
