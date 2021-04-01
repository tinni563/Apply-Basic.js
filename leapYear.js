const year = 3589;
let remainder = year % 4;
if (remainder ==0) {
    console.log('Your year is a Leap Year');

}
else{
    console.log('Your year is not a Leap Year');
}

function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else{
        return false;
    }
}

const check2000 = isLeapYear(1700);
console.log(check2000);

