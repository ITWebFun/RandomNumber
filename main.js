let randomNumsParagraph = document.getElementById('randomNums');

function printRandomNumber() {
    let randomNum = Math.random()*100;

    if (randomNum < 50) {
        randomNumsParagraph.innerHTML = `${Math.round(randomNum)} is less than 50`;
    } else if (randomNum > 50) {
        randomNumsParagraph.innerHTML = `${Math.round(randomNum)} is bigger than 50`;
    } else {
        randomNumsParagraph.innerHTML = `${Math.round(randomNum)} is equal to 50`;
    }
}