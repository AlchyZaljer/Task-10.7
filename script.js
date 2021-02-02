let minValue = null;
let maxValue = null;
let answerNumber = null;
let orderNumber = 1;
let answerPhrase = '';
let gameRun;
let phraseRandom = null;
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
const introField = document.querySelector('#introField');

document.querySelector('#btnStart').addEventListener('click', (event) => {
    document.querySelector('.setting-title').classList.toggle('unseen');
    document.querySelector('.promo-title').classList.toggle('unseen');
    document.querySelector('.setting-card').classList.toggle('unseen');
    document.querySelector('.promo-img').classList.toggle('unseen');
    document.querySelector('#btnSetting').classList.toggle('unseen');
    document.querySelector('#btnStart').classList.toggle('unseen');
    // переход к карточке с диапозоном
})

document.querySelector('#btnSetting').addEventListener('click', (event) => {
    minValue = parseInt(document.querySelector('#minValueSetting').value);
    maxValue = parseInt(document.querySelector('#maxValueSetting').value);

    if (isNaN(minValue)) {
        minValue = 0
    }

    if (isNaN(maxValue)) {
        maxValue = 100
    }

    if (minValue > maxValue) {
        let a = minValue;
        let b = maxValue;
        minValue = b;
        maxValue = a;
    }

    minValue = ((minValue % 10 == -9) || (minValue % 10 == 1)) ? (minValue - 1) : minValue;
    maxValue = ((maxValue % 10 == 9) || (maxValue % 10 == -1)) ? (maxValue + 1) : maxValue;
    answerNumber = middle();
    gameRun = true;

    document.querySelector('.intro-title').classList.toggle('unseen');
    document.querySelector('.setting-title').classList.toggle('unseen');
    document.querySelector('.intro-card').classList.toggle('unseen');
    document.querySelector('.setting-card').classList.toggle('unseen');
    document.querySelector('#btnSetting').classList.toggle('unseen');
    document.querySelector('#btnIntro').classList.toggle('unseen');
    // переход к карточке с условием

    introField.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю!`;
    orderNumberField.innerText = orderNumber;
    queryPhrase();
})

document.querySelector('#btnIntro').addEventListener('click', (event) => {
    document.querySelector('.intro-title').classList.toggle('unseen');
    document.querySelector('.play-title').classList.toggle('unseen');
    document.querySelector('.intro-card').classList.toggle('unseen');
    document.querySelector('.play-card').classList.toggle('unseen');
    document.querySelector('#btnIntro').classList.toggle('unseen');
    document.querySelector('#btnRetry').classList.toggle('unseen');
    // переход к карточке с игрой
})

document.querySelector('#btnRetry').addEventListener('click', function () {
    document.querySelector('#minValueSetting').value = '';
    document.querySelector('#maxValueSetting').value = '';
    document.querySelector('.setting-title').classList.toggle('unseen');
    document.querySelector('.play-title').classList.toggle('unseen');
    document.querySelector('.setting-card').classList.toggle('unseen');
    document.querySelector('.play-card').classList.toggle('unseen');
    document.querySelector('#btnSetting').classList.toggle('unseen');
    document.querySelector('#btnRetry').classList.toggle('unseen');
    // перезаппуск карточки с игрой
    
    minValue = null;
    maxValue = null;
    answerNumber = null;
    answerPhrase = '';
    orderNumber = 1;
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue <= minValue) {
            wrongPhrase();
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = middle();
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            queryPhrase();
        }
    }
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue >= maxValue) {
            wrongPhrase();
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = middle();
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            queryPhrase();
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun) {
        phraseRandom = Math.round(Math.random() * 5);

        switch (phraseRandom) {
            case 0:
                answerPhrase = 'Я всегда угадываю!';
                break;
            case 1:
                answerPhrase = 'Спасибо за игру!';
                break;
            case 2:
                answerPhrase = 'Это успех!';
                break;
            case 3:
                answerPhrase = 'У меня получилось!';
                break;
            case 4:
                answerPhrase = 'Было легко!';
                break;
            case 5:
                answerPhrase = 'Элементарно!';
                break;
        }
    }

    answerField.innerText = answerPhrase;
    gameRun = false;
})

function middle() {
    return Math.ceil((minValue + maxValue) / 2);
}

function wrongPhrase() {
    phraseRandom = Math.round(Math.random() * 4);

    switch (phraseRandom) {
        case 0:
            answerPhrase = 'Кажется, здесь какая-то ошибка!';
            break;
        case 1:
            answerPhrase = 'Я сдаюсь..';
            break;
        case 2:
            answerPhrase = 'Так не честно!';
            break;
        case 3:
            answerPhrase = 'Вы загадали неправильное число!';
            break;
        case 4:
            answerPhrase = 'Я так не играю..';
            break;
    }

    answerField.innerText = answerPhrase;
}

function queryPhrase() {
    phraseRandom = Math.round(Math.random() * 9);

    switch (phraseRandom) {
        case 0:
            answerPhrase = `Быть может, это число ${answerNumber }?`;
            break;
        case 1:
            answerPhrase = `Хммм, это число ${answerNumber }?`;
            break;
        case 2:
            answerPhrase = `Да это легко! Число ${answerNumber }?`;
            break;
        case 3:
            answerPhrase = `Может быть, Вы загадали ${answerNumber }?`;
            break;
        case 4:
            answerPhrase = `Наверне, это число ${answerNumber }?`;
            break;
        case 5:
            answerPhrase = `Кажется, я догадываюсь, это число ${answerNumber }?`;
            break;
        case 6:
            answerPhrase = `Предполагаю, Вы выбрали число ${answerNumber }?`;
            break;
        case 7:
            answerPhrase = `Мне кажется, это может быть число ${answerNumber }?`;
            break;
        case 8:
            answerPhrase = `Это, случайно, не число ${answerNumber }?`;
            break;
        case 9:
            answerPhrase = `Думаю, Вы задумали число ${answerNumber }?`;
            break;
    }

    answerField.innerText = answerPhrase;
}

function queryPhrase() {
    phraseRandom = Math.round(Math.random() * 9);

    switch (phraseRandom) {
        case 0:
            answerPhrase = `Быть может, это число `;
            break;
        case 1:
            answerPhrase = `Хммм, это число `;
            break;
        case 2:
            answerPhrase = `Да это легко! Число `;
            break;
        case 3:
            answerPhrase = `Может быть, Вы загадали `;
            break;
        case 4:
            answerPhrase = `Наверне, это число `;
            break;
        case 5:
            answerPhrase = `Кажется, я догадываюсь, это число `;
            break;
        case 6:
            answerPhrase = `Предполагаю, Вы выбрали число `;
            break;
        case 7:
            answerPhrase = `Мне кажется, это может быть число `;
            break;
        case 8:
            answerPhrase = `Это, случайно, не число `;
            break;
        case 9:
            answerPhrase = `Думаю, Вы задумали число `;
            break;
    }

    const numberOrTextAnswer = numberToText();
    answerField.innerText = answerPhrase + numberOrTextAnswer + '?';
}

function numberToText() {
    let number = answerNumber;
    let varNumber = null; // переменная для вычислений
    let textNumber = ''; // часть текста для составления номера
    let text = '';
    let minusFlag = false;
    let numberLength = String(number).length;

    if (number < 0) {
        minusFlag = true;
        number = Math.abs(number);
    }

    if (number == 0) {
        text = 'ноль';
    }

    if ((numberLength == 1) && (number !== 0)) {
        varNumber = number;
        text = for1_9();
    }

    if (numberLength == 2) {
        if (number < 20) {
            varNumber = number;
            text = for11_19();
        } 
        else if (number % 10 == 0) {
            varNumber = number;
            text = for10_90();
        } 
        else {
            varNumber = number - number % 10;
            let text1 = for10_90();
            varNumber = number % 10;
            text = text1 + ' ' + for1_9();
        }
    }

    if (numberLength == 3) {
        if (number % 100 == 0) {
            varNumber = number;
            text = for100_900();
        } 
        else if (number % 10 == 0) {
            varNumber = number - number % 100;
            let text1 = for100_900();
            varNumber = number % 100;
            text = text1 + ' ' + for10_90();
        } 
        else {
            varNumber = number - number % 100;
            let text1 = for100_900();
            varNumber = number % 100;
            if (varNumber < 10) {
                text = text1 + ' ' + for1_9();
            } 
            else if (varNumber < 20) {
                text = text1 + ' ' + for11_19();
            } 
            else {
                varNumber = varNumber - varNumber % 10;
                let text2 = text1 + ' ' + for10_90();
                varNumber = number % 10;
                text = text2 + ' ' + for1_9();
            }
        }
    }

    if (numberLength == 4) {
        if (number % 1000 == 0) {
            varNumber = number;
            text = for1000_9000();
        } 
        else if (number % 100 == 0) {
            varNumber = number - number % 1000;
            let text1 = for1000_9000();
            varNumber = number % 1000;
            text = text1 + ' ' + for100_900();
        } 
        else if (number % 10 == 0) {
            varNumber = number - number % 1000;
            let text1 = for1000_9000();
            varNumber = number % 1000 - number % 100;
            let text2 = text1 + ' ' + for100_900();
            varNumber = number % 100;
            text = text2 + ' ' + for10_90();
        } 
        else if (number % 1000 - number % 10 == 0) {
            varNumber = number - number % 1000;
            let text1 = for1000_9000();
            varNumber = number % 10;
            text = text1 + ' ' + for1_9();
        } 
        else if (number % 100 - number % 10 == 0) {
            varNumber = number - number % 1000;
            let text1 = for1000_9000();
            varNumber = number % 1000 - number % 10;
            let text2 = text1 + ' ' + for100_900();
            varNumber = number % 10;
            text = text2 + ' ' + for1_9();
        } 
        else if (number % 1000 - number % 100 == 0) {
            varNumber = number - number % 1000;
            let text1 = for1000_9000();
            varNumber = number % 100;

            if (varNumber < 20) {
                text = text1 + ' ' + for11_19();
            } 
            else if (varNumber % 10 == 0) {
                text = text1 + ' ' + for10_90();
            } 
            else {
                varNumber = varNumber - varNumber % 10;
                let text2 = for10_90();
                varNumber = number % 10;
                text = text1 + ' ' + text2 + ' ' + for1_9();
            }
        } else {
            varNumber = number - number % 1000;
            let text1 = for1000_9000();
            varNumber = number % 1000 - number % 100;
            let text2 = text1 + ' ' + for100_900();
            varNumber = number % 100;

            if (varNumber < 20) {
                text = text2 + ' ' + for11_19();
            } 
            else if (varNumber % 10 == 0) {
                text = text2 + ' ' + for10_90();
            } 
            else {
                varNumber = varNumber - varNumber % 10;
                let text3 = for10_90();
                varNumber = number % 10;
                text = text2 + ' ' + text3 + ' ' + for1_9();
            }
        }
    }

    if (minusFlag) {
        text = 'минус ' + text;
    }

    if (text.length < 21) {
        return text;
    } 
    else {
        if (minusFlag) {
            number = -number;
        }

        return number;
    }

    function for1000_9000() {
        switch (varNumber) {
            case 1000:
                textNumber = 'тысяча';
                break;
            case 2000:
                textNumber = 'две тысячи';
                break;
            case 3000:
                textNumber = 'три тысячи';
                break;
            case 4000:
                textNumber = 'четыре тысячи';
                break;
            case 5000:
                textNumber = 'пять тысяч';
                break;
            case 6000:
                textNumber = 'шесть тысяч';
                break;
            case 7000:
                textNumber = 'семь тысяч';
                break;
            case 8000:
                textNumber = 'восемь тысяч';
                break;
            case 9000:
                textNumber = 'девять тысяч';
                break;
        }

        return textNumber;
    }

    function for100_900() {
        switch (varNumber) {
            case 100:
                textNumber = 'сто';
                break;
            case 200:
                textNumber = 'двести';
                break;
            case 300:
                textNumber = 'триста';
                break;
            case 400:
                textNumber = 'четыреста';
                break;
            case 500:
                textNumber = 'пятьсот';
                break;
            case 600:
                textNumber = 'шестьсот';
                break;
            case 700:
                textNumber = 'семьсот';
                break;
            case 800:
                textNumber = 'восемьсот';
                break;
            case 900:
                textNumber = 'девятьсот';
                break;
        }

        return textNumber;
    }

    function for10_90() {
        switch (varNumber) {
            case 10:
                textNumber = 'десять';
                break;
            case 20:
                textNumber = 'двадцать';
                break;
            case 30:
                textNumber = 'тридцать';
                break;
            case 40:
                textNumber = 'сорок';
                break;
            case 50:
                textNumber = 'пятьдесят';
                break;
            case 60:
                textNumber = 'шестьдесят';
                break;
            case 70:
                textNumber = 'семьдесят';
                break;
            case 80:
                textNumber = 'восемьдесят';
                break;
            case 90:
                textNumber = 'девяносто';
                break;
        }

        return textNumber;
    }

    function for11_19() {
        switch (varNumber) {
            case 11:
                textNumber = 'одиннадцать';
                break;
            case 12:
                textNumber = 'двенадцать';
                break;
            case 13:
                textNumber = 'тринадцать';
                break;
            case 14:
                textNumber = 'четырнадцать';
                break;
            case 15:
                textNumber = 'пятнадцать';
                break;
            case 16:
                textNumber = 'шестнадцать';
                break;
            case 17:
                textNumber = 'семнадцать';
                break;
            case 18:
                textNumber = 'восемнадцать';
                break;
            case 19:
                textNumber = 'девятнадцать';
                break;
        }

        return textNumber;
    }

    function for1_9() {
        switch (varNumber) {
            case 1:
                textNumber = 'один';
                break;
            case 2:
                textNumber = 'два';
                break;
            case 3:
                textNumber = 'три';
                break;
            case 4:
                textNumber = 'четыре';
                break;
            case 5:
                textNumber = 'пять';
                break;
            case 6:
                textNumber = 'шесть';
                break;
            case 7:
                textNumber = 'семь';
                break;
            case 8:
                textNumber = 'восемь';
                break;
            case 9:
                textNumber = 'девять';
                break;
        }

        return textNumber;
    }
}