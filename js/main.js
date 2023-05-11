// for pin genarate 
function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
// for 4 digit pin 
function getPin() {
    const pin = genaratePin();
    const pintText = pin + '';
    if (pintText.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//  for genarate btn 
document.getElementById('pin-genarate-btn').addEventListener('click', function () {
    const pin = getPin();
    const pinInput = document.getElementById('pin-input');
    pinInput.value = pin;
})

// for get tyed number 






document.getElementById('calucator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberField = document.getElementById('number-input');
    const numberFieldText = numberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            numberField.value = '';
        } else if (number === '<') {
            const digit = numberFieldText.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            numberField.value = remainingDigit;
        }
    } else {
        numberField.value = numberFieldText + number;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const numberField = document.getElementById('number-input');
    const numberFieldText = numberField.value;

    const pinInput = document.getElementById('pin-input');
    const pintInpiutText = pinInput.value;

    const pinSuccessMessage = document.getElementById('success-message')
    const pinWorngMessage = document.getElementById('worng-message');

    if (numberFieldText === pintInpiutText) {
        pinSuccessMessage.style.display = 'block';
        pinWorngMessage.style.display = 'none';
    } else if (numberFieldText != pintInpiutText) {
        pinWorngMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})