let oldDate = new Date(2025, 2, 18);

let newerDate = new Date(2025, 3, 13);

let quantityMilliSeconds = newerDate - oldDate;

let millisecondPerDay = 1000 * 60 * 60 * 24;

let quantityDays = quantityMilliSeconds / millisecondPerDay;


console.log(quantityDays);
