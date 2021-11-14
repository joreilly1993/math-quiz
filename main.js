let studentGrade = 0;
let titleAndGrade = document.getElementById('title-and-grade');
let gradeDiv = document.createElement('div');
gradeDiv.classList.add('grade-styling');
let percentageScore = document.createElement('div');
percentageScore.classList.add('grade-styling');




function tryAgainBtn() {
    let tryAgainBtn = document.createElement('button');
    tryAgainBtn.textContent = "Reset Questions";
    tryAgainBtn.classList.add('try-again-btn');
    gradeDiv.appendChild(tryAgainBtn);

      tryAgainBtn.addEventListener('click', (e) => {
        location.reload();
      });
};

function percentage() {
    gradeDiv.appendChild(percentageScore);
    if (studentGrade === 0) {
        percentageScore.textContent = '0%';
    }
    else if (studentGrade === 1) {
        percentageScore.textContent = '10%';
    }
    else if (studentGrade === 2) {
        percentageScore.textContent = '20%';
    }
    else if (studentGrade === 3) {
        percentageScore.textContent = '30%';
    }
    else if (studentGrade === 4) {
        percentageScore.textContent = '40%';
    }
    else if (studentGrade === 5) {
        percentageScore.textContent = '50%';
    }
    else if (studentGrade === 6) {
        percentageScore.textContent = '60%';
    }
    else if (studentGrade === 7) {
        percentageScore.textContent = '70%';
    }
    else if (studentGrade === 8) {
        percentageScore.textContent = '80%';
    }
    else if (studentGrade === 9) {
        percentageScore.textContent = '90%';
    }
    else if (studentGrade === 10) {
        percentageScore.textContent = '100%';
    }
}






let firstBtnDiv = document.createElement('div');
firstBtnDiv.textContent = 'Div 1';

let secondBtnDiv = document.createElement('div');
secondBtnDiv.textContent = 'Div 2';

let thirdBtnDiv = document.createElement('div');
thirdBtnDiv.textContent = 'Div 3';

let fourthBtnDiv = document.createElement('div');
fourthBtnDiv.textContent = 'Div 4';

let fifthBtnDiv = document.createElement('div');
fifthBtnDiv.textContent = 'Div 5';

let sixthBtnDiv = document.createElement('div');
sixthBtnDiv.textContent = 'Div 6';

let seventhBtnDiv = document.createElement('div');
seventhBtnDiv.textContent = 'Div 7';

let eighthBtnDiv = document.createElement('div');
eighthBtnDiv.textContent = 'Div 8';


let ninthBtnDiv = document.createElement('div');
ninthBtnDiv.textContent = 'Div 9';


let tenthBtnDiv = document.createElement('div');
tenthBtnDiv.textContent = 'Div 10';






let firstTimesSix = document.createElement('div');
firstTimesSix.textContent = 'Div 11';

let secondTimesSix = document.createElement('div');
secondTimesSix.textContent = 'Div 12';

let thirdTimesSix = document.createElement('div');
thirdTimesSix.textContent = 'Div 13';

let fourthTimesSix = document.createElement('div');
fourthTimesSix.textContent = 'Div 14';

let fifthTimesSix = document.createElement('div');
fifthTimesSix.textContent = 'Div 15';

let sixthTimesSix = document.createElement('div');
sixthTimesSix.textContent = 'Div 16';

let seventhTimesSix = document.createElement('div');
seventhTimesSix.textContent = 'Div 17';

let eighthTimesSix = document.createElement('div');
eighthTimesSix.textContent = 'Div 18';


let ninthTimesSix = document.createElement('div');
ninthTimesSix.textContent = 'Div 19';


let tenthTimesSix = document.createElement('div');
tenthTimesSix.textContent = 'Div 20';




let container = document.querySelector('#container');
let quizQuestions = document.querySelector('#quiz-questions');
let sixTimesDiv = document.createElement('div');
sixTimesDiv.classList.add('border');
let timesSixDiv = document.createElement('div');
timesSixDiv.classList.add('border');
quizQuestions.appendChild(sixTimesDiv);
quizQuestions.appendChild(timesSixDiv);



let sixTimesArr = [firstBtnDiv, secondBtnDiv, thirdBtnDiv, fourthBtnDiv, fifthBtnDiv, sixthBtnDiv, seventhBtnDiv, eighthBtnDiv, ninthBtnDiv, tenthBtnDiv];

sixTimesArr.sort(() => Math.random() - 0.5);


for (let i=0; i<sixTimesArr.length; i++) {
    sixTimesDiv.appendChild(sixTimesArr[i]);
}



let timesSixArr = [firstTimesSix, secondTimesSix, thirdTimesSix, fourthTimesSix, fifthTimesSix, sixthTimesSix, seventhTimesSix, eighthTimesSix, ninthTimesSix, tenthTimesSix];

timesSixArr.sort(() => Math.random() - 0.5);


for (let i=0; i<timesSixArr.length; i++) {
    timesSixDiv.appendChild(timesSixArr[i]);
}



/*
firstSixSubmit.addEventListener('click', (e) => {
    let firstSixInput = document.getElementsByTagName("input")[0].value;
    console.log(firstSixInput);
    if (firstSixInput === '6') {
        firstSixSubmit.style = "color: white; background-color: green";
        firstSixSubmit.value = "Correct!";
        let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        firstBtnDiv.appendChild(successImg);
        firstSixSubmit.disabled = true;
        document.getElementById('first-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        
    } 
    else if (firstSixInput.length === 0) {
    }
    else {
        firstSixSubmit.style = "color: white; background-color: red";
        firstSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        firstBtnDiv.appendChild(incorrectImg);
        document.getElementById('first-six-input').disabled = true;
        firstSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

secondSixSubmit.addEventListener('click', (e) => {
    let secondSixInput = document.getElementsByTagName("input")[2].value;
    console.log(secondSixInput);
    if (secondSixInput === '12') {
        secondSixSubmit.style = "color: white; background-color: green";
        secondSixSubmit.value = "Correct!";
        let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        secondBtnDiv.appendChild(successImg);
        secondSixSubmit.disabled = true;
        document.getElementById('second-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    } 
    else if (secondSixInput.length === 0) {
    }
    else {
        secondSixSubmit.style = "color: white; background-color: red";
        secondSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        secondBtnDiv.appendChild(incorrectImg);
        document.getElementById('second-six-input').disabled = true;
        secondSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

thirdSixSubmit.addEventListener('click', (e) => {
    let thirdSixInput = document.getElementsByTagName("input")[4].value;
    console.log(thirdSixInput);
    if (thirdSixInput === '18') {
        thirdSixSubmit.style = "color: white; background-color: green";
        thirdSixSubmit.value = "Correct!";
        let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        thirdBtnDiv.appendChild(successImg);
        thirdSixSubmit.disabled = true;
        document.getElementById('third-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    } 
    else if (thirdSixInput.length === 0) {
    }
    else {
        thirdSixSubmit.style = "color: white; background-color: red";
        thirdSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        thirdBtnDiv.appendChild(incorrectImg);
        document.getElementById('third-six-input').disabled = true;
        thirdSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

fourthSixSubmit.addEventListener('click', (e) => {

    let fourthSixInput = document.getElementsByTagName("input")[6].value;
    console.log(fourthSixInput);
        if (fourthSixInput === '24') {
            fourthSixSubmit.style = "color: white; background-color: green";
            fourthSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        fourthBtnDiv.appendChild(successImg);
        fourthSixSubmit.disabled = true;
        document.getElementById('fourth-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (fourthSixInput.length === 0) {
        }
        else {
        fourthSixSubmit.style = "color: white; background-color: red";
        fourthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        fourthBtnDiv.appendChild(incorrectImg);
        document.getElementById('fourth-six-input').disabled = true;
        fourthSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

fifthSixSubmit.addEventListener('click', (e) => {

    let fifthSixInput = document.getElementsByTagName("input")[8].value;
    console.log(fifthSixInput);
        if (fifthSixInput === '30') {
            fifthSixSubmit.style = "color: white; background-color: green";
            fifthSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        fifthBtnDiv.appendChild(successImg);
        fifthSixSubmit.disabled = true;
        document.getElementById('fifth-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (fifthSixInput.length === 0) {
        }
        else {
        fifthSixSubmit.style = "color: white; background-color: red";
        fifthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        fifthBtnDiv.appendChild(incorrectImg);
        document.getElementById('fifth-six-input').disabled = true;
        fifthSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

sixthSixSubmit.addEventListener('click', (e) => {

    let sixthSixInput = document.getElementsByTagName("input")[10].value;
    console.log(sixthSixInput);
        if (sixthSixInput === '36') {
            sixthSixSubmit.style = "color: white; background-color: green";
            sixthSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        sixthBtnDiv.appendChild(successImg);
        sixthSixSubmit.disabled = true;
        document.getElementById('sixth-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (sixthSixInput.length === 0) {
        }
        else {
        sixthSixSubmit.style = "color: white; background-color: red";
        sixthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        sixthBtnDiv.appendChild(incorrectImg);
        document.getElementById('sixth-six-input').disabled = true;
        sixthSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

seventhSixSubmit.addEventListener('click', (e) => {

    let seventhSixInput = document.getElementsByTagName("input")[12].value;
    console.log(seventhSixInput);
        if (seventhSixInput === '42') {
            seventhSixSubmit.style = "color: white; background-color: green";
            seventhSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        seventhBtnDiv.appendChild(successImg);
        seventhSixSubmit.disabled = true;
        document.getElementById('seventh-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (seventhSixInput.length === 0) {
        }
        else {
        seventhSixSubmit.style = "color: white; background-color: red";
        seventhSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        seventhBtnDiv.appendChild(incorrectImg);
        document.getElementById('seventh-six-input').disabled = true;
        seventhSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

eighthSixSubmit.addEventListener('click', (e) => {

    let eighthSixInput = document.getElementsByTagName("input")[14].value;
    console.log(eighthSixInput);
        if (eighthSixInput === '48') {
            eighthSixSubmit.style = "color: white; background-color: green";
            eighthSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        eighthBtnDiv.appendChild(successImg);
        eighthSixSubmit.disabled = true;
        document.getElementById('eighth-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (eighthSixInput.length === 0) {
        }
        else {
        eighthSixSubmit.style = "color: white; background-color: red";
        eighthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        eighthBtnDiv.appendChild(incorrectImg);
        document.getElementById('eighth-six-input').disabled = true;
        eighthSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

ninthSixSubmit.addEventListener('click', (e) => {

    let ninthSixInput = document.getElementsByTagName("input")[16].value;
    console.log(ninthSixInput);
        if (ninthSixInput === '54') {
            ninthSixSubmit.style = "color: white; background-color: green";
            ninthSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        ninthBtnDiv.appendChild(successImg);
        ninthSixSubmit.disabled = true;
        document.getElementById('ninth-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (ninthSixInput.length === 0) {
        }
        else {
        ninthSixSubmit.style = "color: white; background-color: red";
        ninthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        ninthBtnDiv.appendChild(incorrectImg);
        document.getElementById('ninth-six-input').disabled = true;
        ninthSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});

tenthSixSubmit.addEventListener('click', (e) => {

    let tenthSixInput = document.getElementsByTagName("input")[18].value;
    console.log(tenthSixInput);
        if (tenthSixInput === '60') {
            tenthSixSubmit.style = "color: white; background-color: green";
            tenthSixSubmit.value = "Correct!";
            let successImg = document.createElement('img');
        successImg.style.width = "25px";
        successImg.style.height = "25px";
        successImg.src = "images/success.png"
        tenthBtnDiv.appendChild(successImg);
        tenthSixSubmit.disabled = true;
        document.getElementById('tenth-six-input').disabled = true;
        studentGrade = studentGrade + 1;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
        }
        else if (tenthSixInput.length === 0) {
        }
        else {
        tenthSixSubmit.style = "color: white; background-color: red";
        tenthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        tenthBtnDiv.appendChild(incorrectImg);
        document.getElementById('tenth-six-input').disabled = true;
        tenthSixSubmit.disabled = true;
        studentGrade = studentGrade + 0;
        gradeDiv.textContent = 'Grade: ' + studentGrade + '/10';
        titleAndGrade.appendChild(gradeDiv);
        percentage();
        tryAgainBtn();
    }
});
*/


