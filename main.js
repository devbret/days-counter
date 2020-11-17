function main() {
    //Primary program variables.
    const datePicker1 = document.querySelector(`#datePicker1`);
    const datePicker2 = document.querySelector(`#datePicker2`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Process the number of days between the selected date and the current date when the Submit button is pressed.
    submit.addEventListener(`click`, function(){
        //Ensure that the user has selected two dates before attempting to calculate results.
        if (datePicker1.value !== `` && datePicker2.value !== ``) {
            //Create two dates; those being the two separate dates selected by the user.
            const then = new Date(datePicker1.value);
            const thenAgain = new Date(datePicker2.value);
            //Split the datePicker variables value into usable strings inside separate array; intended to make displaying final results more appealing.
            const datePickerArray1 = datePicker1.value.split(`-`);
            const datePickerArray2 = datePicker2.value.split(`-`);
            //Display final results; ultimately a matter of how many milliseconds between the two dates, divided by the number of milliseconds in a day.
            output.innerHTML = `There are ${Math.abs(((then.getTime() - thenAgain.getTime()) / 86400000).toFixed(0))} days between ${datePickerArray1[1]}/${datePickerArray1[2]}/${datePickerArray1[0]} and ${datePickerArray2[1]}/${datePickerArray2[2]}/${datePickerArray2[0]}.`;
        }
    });
}
main();
