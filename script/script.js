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

let labels = document.querySelectorAll('.form-label');
let formInput = document.querySelectorAll('.form-control');

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



    if (dayInput.value.length == 0 || monthInput.value.length == 0 || yearInput.value.length == 0) {

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
    let isValid = 1;
    labels[2].style.color = "black";
    formInput[2].style.borderColor = "#e7e7e7";

    if (yearInput.value > currentDate.getFullYear()) {
        validationYearv.style.display = 'block';
        yearOutput.innerHTML = "--";
        monthOutput.innerHTML = "--";
        dayOutput.innerHTML = "--";
        isValid = 0;

    }

    if (yearInput.value == "") {
        validationYear.style.display = 'block';
        isValid = 0;
    }
    if (isValid == 0) {
        labels[2].style.color = "#e75764";
        formInput[2].style.borderColor = "#e75764";
    }

}



function validateDay() {
    validationDayv.style.display = 'none';
    validationDay.style.display = 'none';
    labels[0].style.color = "black";
    formInput[0].style.borderColor = "#e7e7e7";


    let isValid = 1;
    if (monthInput.value == 4 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
        isValid = 0;
    }
    if (monthInput.value == 6 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
        isValid = 0;
    }
    if (monthInput.value == 9 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
        isValid = 0;

    }
    if (monthInput.value == 11 && dayInput.value == 31) {
        validationDayv.style.display = 'block';
        isValid = 0;

    }
    if (yearInput.value % 4 !== 0 && monthInput.value == 2 && dayInput.value > 28) {
        validationDayv.style.display = 'block';
        isValid = 0;

    }
    if (yearInput.value % 4 == 0 && monthInput.value == 2 && dayInput.value > 29) {
        validationDayv.style.display = 'block';
        isValid = 0;

    }
    if (dayInput.value > 31 || dayInput.value < 0 || dayInput.value === 0) {
        validationDayv.style.display = 'block';
        isValid = 0;

    }

    if (dayInput.value == "") {
        validationDay.style.display = 'block';
        isValid = 0;
    }

    if (isValid == 0) {
        labels[0].style.color = "#e75764";
        formInput[0].style.borderColor = "#e75764";
    }
    if (validationDayv.style.display == 'block' || validationDay.style.display == 'block') {
        yearOutput.innerHTML = "--";
        monthOutput.innerHTML = "--";
        dayOutput.innerHTML = "--";
    }
}

function validateMonth() {
    validationMonthv.style.display = 'none';
    validationMonth.style.display = 'none';
    labels[1].style.color = "black";
    formInput[1].style.borderColor = "#e7e7e7";


    let isValid = 1;
    if (monthInput.value > 12 || monthInput.value < 0 || monthInput.value === 0) {
        validationMonthv.style.display = 'block';
        isValid = 0;

    }
    if (monthInput.value == "") {
        validationMonth.style.display = 'block';
        isValid = 0;

    }
    if (isValid == 0) {
        labels[1].style.color = "#e75764";
        formInput[1].style.borderColor = "#e75764";
    }
    if (validationMonthv.style.display == 'block') {
        yearOutput.innerHTML = "--";
        monthOutput.innerHTML = "--";
        dayOutput.innerHTML = "--";
    }
}


myButton.addEventListener("click", () => {
    calculate();
    validateYear();
    validateDay();
    validateMonth();
})







dayInput.addEventListener('input', () => {
    validationDay.style.display = 'none';
    validationDayv.style.display = 'none';
    labels[0].style.color = "black";
    formInput[0].style.borderColor = "#9b81ca";


})
monthInput.addEventListener('input', () => {
    validationMonth.style.display = 'none';
    validationMonthv.style.display = 'none';
    labels[1].style.color = "black";
    formInput[1].style.borderColor = "#9b81ca";



})
yearInput.addEventListener('input', () => {
    validationYear.style.display = 'none';
    validationYearv.style.display = 'none';
    labels[2].style.color = "black";
    formInput[2].style.borderColor = "#9b81ca";


})









