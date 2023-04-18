let myButton = document.getElementById("button");
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

let dayOutput = document.getElementById("day_output");
let monthOutput = document.getElementById("month_output");
let yearOutput = document.getElementById("year_output");


let validationDay = document.getElementById('valid_day');
let validationDayv = document.getElementById('valid_dayv');
let validationMonth = document.getElementById('valid_month');
let validationMonthv = document.getElementById('valid_monthv');
let validationYear = document.getElementById('valid_year');
let validationYearv = document.getElementById('valid_yearv');


let currentDate = new Date();

function calculate() {

    let birthmonth = monthInput.value;
    let birthdate = dayInput.value;
    let birthyear = parseInt(yearInput.value);

    let oldDate = new Date(birthmonth + '/' + birthdate + '/' + birthyear);
    let difference = currentDate.getTime() - oldDate.getTime();
    let differenceDays = Math.ceil(difference / (60 * 60 * 1000 * 24));

    let years = Math.floor(differenceDays / 365.25);
    let months = Math.floor((differenceDays - years * 365.25) / 30.4375);
    let days = Math.floor(differenceDays - years * 365.25 - months * 30.4375);


    if (isNaN(years) || isNaN(years) || isNaN(years)) {
        yearOutput.innerHTML = "--";
        monthOutput.innerHTML = "--";
        dayOutput.innerHTML = "--";

    } else {

        yearOutput.innerHTML = years;
        monthOutput.innerHTML = months;
        dayOutput.innerHTML = days;
    }

}


function validateYear() {
    if (yearInput.value > currentDate.getFullYear()) {
        validationYearv.style.display = 'block';
        yearOutput.innerHTML = "--";
        monthOutput.innerHTML = "--";
        dayOutput.innerHTML = "--";
    }

}

function validateDay() {
    validationDayv.style.display = 'none';

    if (monthInput.value == 4 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
    }
    if (monthInput.value == 6 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
    }
    if (monthInput.value == 9 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
    }
    if (monthInput.value == 11 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
    }
    if (yearInput.value % 4 !== 0 && monthInput.value == 2 && dayInput.value > 28) {
        validationDayv.style.display = 'block';
    }
    if (yearInput.value % 4 == 0 && monthInput.value == 2 && dayInput.value > 29) {
        validationDayv.style.display = 'block';
    }
    if (dayInput.value > 31 || dayInput.value < 1) {
        validationDayv.style.display = 'block';
    }
    if (validationDayv.style.display == 'block') {
        yearOutput.innerHTML = "--";
        monthOutput.innerHTML = "--";
        dayOutput.innerHTML = "--";
    }

}

function validateMonth() {
    validationMonthv.style.display = 'none';
    if (monthInput.value > 12 || monthInput.value < 1) {
        validationMonthv.style.display = 'block';
    }
}


// console.log(currentDate.getFullYear());

myButton.addEventListener("click", () => {

    if (dayInput.value == "") {
        validationDay.style.display = 'block';
        dayOutput.innerHTML = "";
    }
    if (monthInput.value == "") {
        validationMonth.style.display = 'block';
    }
    if (yearInput.value == "") {
        validationYear.style.display = 'block';
    }


    calculate();
    validateYear();
    validateDay();
    validateMonth();
})







dayInput.addEventListener('input', () => {
    validationDay.style.display = 'none';
    validationDayv.style.display = 'none';
    // fun();
})
monthInput.addEventListener('input', () => {
    validationMonth.style.display = 'none';
    // fun();
})
yearInput.addEventListener('input', () => {
    validationYear.style.display = 'none';
    validationYearv.style.display = 'none';

})










