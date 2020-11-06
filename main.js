function main() {
    //Program variables.
    const months = document.querySelector(`#months`);
    const days = document.querySelector(`#days`);
    const years = document.querySelector(`#years`);
    const selection = document.querySelector(`#selection`);
    const submit = document.querySelector(`#submit`);
    const timer = document.querySelector(`#timer`);
    //Making sure a given selected date exists, given the number of days in each month. Is a support function.
    function checkDays() {
        const mV = Number(months.value);
        const dV = Number(days.value);
        if (mV === 1 && dV > 28) {
            return false;
        } 
        if ((mV === 3 || mV === 5 || mV === 8 || mV === 10) && dV === 31) {
            return false;
        }
        return true;
    }
    //Change the date selection, given the input. As assigned during every loop of the forEach array method.
    [months,days,years].forEach(function(d){
        d.addEventListener(`input`, function(){
            //If the date doesn't exist, inform the user. Otherwise display selection.
            if (!checkDays()) {
                selection.innerHTML = `That date does not exist.`;
            } else {
                selection.innerHTML = `${1 + Number(months.value)}/${days.value}/${years.value}`;
            }
        });
    });
    //Process the number of days between the selected date and the current date.
    submit.addEventListener(`click`, function(){
        const then = new Date(years.value, months.value, days.value);
        const now = new Date();
        if (!checkDays()) {
            timer.innerHTML = `That date does not exist.`;
        } else {
            timer.innerHTML = `There are exactly ${Math.abs(((then.getTime() - now.getTime()) / 86400000).toFixed(0))} days between today and ${1 + Number(months.value)}/${days.value}/${years.value}.`;
        }
    });
}
main();