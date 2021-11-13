let firstSixSubmit = document.getElementById('first-six-btn');
let firstBtnDiv = document.getElementById('six-first')
let secondSixSubmit = document.getElementById('second-six-btn');
let secondBtnDiv = document.getElementById('six-second');
let thirdSixSubmit = document.getElementById('third-six-btn');
let thirdBtnDiv = document.getElementById('six-third');
let fourthSixSubmit = document.getElementById('fourth-six-btn');
let fourthBtnDiv = document.getElementById('six-fourth');
let fifthSixSubmit = document.getElementById('fifth-six-btn');
let fifthBtnDiv = document.getElementById('six-fifth');
let sixthSixSubmit = document.getElementById('sixth-six-btn');
let sixthBtnDiv = document.getElementById('six-sixth');
let seventhSixSubmit = document.getElementById('seventh-six-btn');
let seventhBtnDiv = document.getElementById('six-seventh');
let eighthSixSubmit = document.getElementById('eighth-six-btn');
let eighthBtnDiv = document.getElementById('six-eighth');
let ninthSixSubmit = document.getElementById('ninth-six-btn');
let ninthBtnDiv = document.getElementById('six-ninth');
let tenthSixSubmit = document.getElementById('tenth-six-btn');
let tenthBtnDiv = document.getElementById('six-tenth');




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
    } else {
        firstSixSubmit.style = "color: white; background-color: red";
        firstSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        firstBtnDiv.appendChild(incorrectImg);
        document.getElementById('first-six-input').disabled = true;
        firstSixSubmit.disabled = true;
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
    } else {
        secondSixSubmit.style = "color: white; background-color: red";
        secondSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        secondBtnDiv.appendChild(incorrectImg);
        document.getElementById('second-six-input').disabled = true;
        secondSixSubmit.disabled = true;
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
    } else {
        thirdSixSubmit.style = "color: white; background-color: red";
        thirdSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        thirdBtnDiv.appendChild(incorrectImg);
        document.getElementById('third-six-input').disabled = true;
        thirdSixSubmit.disabled = true;
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
        } else {
        fourthSixSubmit.style = "color: white; background-color: red";
        fourthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        fourthBtnDiv.appendChild(incorrectImg);
        document.getElementById('fourth-six-input').disabled = true;
        fourthSixSubmit.disabled = true;
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
        } else {
        fifthSixSubmit.style = "color: white; background-color: red";
        fifthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        fifthBtnDiv.appendChild(incorrectImg);
        document.getElementById('fifth-six-input').disabled = true;
        fifthSixSubmit.disabled = true;
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
        } else {
        sixthSixSubmit.style = "color: white; background-color: red";
        sixthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        sixthBtnDiv.appendChild(incorrectImg);
        document.getElementById('sixth-six-input').disabled = true;
        sixthSixSubmit.disabled = true;
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
        } else {
        seventhSixSubmit.style = "color: white; background-color: red";
        seventhSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        seventhBtnDiv.appendChild(incorrectImg);
        document.getElementById('seventh-six-input').disabled = true;
        seventhSixSubmit.disabled = true;
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
        } else {
        eighthSixSubmit.style = "color: white; background-color: red";
        eighthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        eighthBtnDiv.appendChild(incorrectImg);
        document.getElementById('eighth-six-input').disabled = true;
        eighthSixSubmit.disabled = true;
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
        } else {
        ninthSixSubmit.style = "color: white; background-color: red";
        ninthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        ninthBtnDiv.appendChild(incorrectImg);
        document.getElementById('ninth-six-input').disabled = true;
        ninthSixSubmit.disabled = true;
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
        } else {
        tenthSixSubmit.style = "color: white; background-color: red";
        tenthSixSubmit.value = "Incorrect!";
        let incorrectImg = document.createElement('img');
        incorrectImg.style.width = "35px";
        incorrectImg.style.height = "35px";
        incorrectImg.src = "images/incorrect.png"
        tenthBtnDiv.appendChild(incorrectImg);
        document.getElementById('tenth-six-input').disabled = true;
        tenthSixSubmit.disabled = true;
    }
});

