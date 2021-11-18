let container = document.querySelector('#container');

let titleAndGradeDiv = document.querySelector('#title-and-grade-div');

titleAndGradeDiv.classList.add('title-and-grade');
let gradeDiv = document.createElement('div');
gradeDiv.classList.add('grade-styling');

let quizQuestions = document.querySelector('#quiz-questions');

let sixTimesDiv = document.createElement('div');
sixTimesDiv.classList.add('border');

let timesSixDiv = document.createElement('div');

quizQuestions.appendChild(sixTimesDiv);
quizQuestions.appendChild(timesSixDiv);

let percentageScore = document.createElement('div');
percentageScore.classList.add('grade-styling');

let studentGrade = 0;




    let tryAgainBtn = document.createElement('button');
    tryAgainBtn.textContent = "Reset Questions";
    tryAgainBtn.classList.add('try-again-btn');
      tryAgainBtn.addEventListener('click', (e) => {
        location.reload();
      });


function percentage() {
    gradeDiv.appendChild(percentageScore);
    if (studentGrade === 0) {
        percentageScore.textContent = '0%';
    }
    else if (studentGrade === 1) {
        percentageScore.textContent = '5%';
    }
    else if (studentGrade === 2) {
        percentageScore.textContent = '10%';
    }
    else if (studentGrade === 3) {
        percentageScore.textContent = '15%';
    }
    else if (studentGrade === 4) {
        percentageScore.textContent = '20%';
    }
    else if (studentGrade === 5) {
        percentageScore.textContent = '25%';
    }
    else if (studentGrade === 6) {
        percentageScore.textContent = '30%';
    }
    else if (studentGrade === 7) {
        percentageScore.textContent = '35%';
    }
    else if (studentGrade === 8) {
        percentageScore.textContent = '40%';
    }
    else if (studentGrade === 9) {
        percentageScore.textContent = '45%';
    }
    else if (studentGrade === 10) {
        percentageScore.textContent = '50%';
    }
    else if (studentGrade === 11) {
        percentageScore.textContent = '55%';
    }
    else if (studentGrade === 12) {
        percentageScore.textContent = '60%';
    }
    else if (studentGrade === 13) {
        percentageScore.textContent = '65%';
    }
    else if (studentGrade === 14) {
        percentageScore.textContent = '70%';
    }
    else if (studentGrade === 15) {
        percentageScore.textContent = '75%';
    }
    else if (studentGrade === 16) {
        percentageScore.textContent = '80%';
    }
    else if (studentGrade === 17) {
        percentageScore.textContent = '85%';
    }
    else if (studentGrade === 18) {
        percentageScore.textContent = '90%';
    }
    else if (studentGrade === 19) {
        percentageScore.textContent = '95%';
    }
    else if (studentGrade === 20) {
        percentageScore.textContent = '100%';
    }
}


//6 x 1 div and functionality
let firstSixTimesDiv = document.createElement('div');
firstSixTimesDiv.textContent = '6 x 1 =';
firstSixTimesDiv.classList.add("problem-styling");
  let firstSixTimesInput = document.createElement('input');
  firstSixTimesInput.type = "text";
  firstSixTimesInput.id = "firstSixTimesInput";
  firstSixTimesInput.autocomplete = "off";
  firstSixTimesInput.className = "input-styling";
    firstSixTimesDiv.appendChild(firstSixTimesInput);
      let firstSixTimesBtn = document.createElement('input');
    firstSixTimesBtn.type = "button";
    firstSixTimesBtn.value = "Check answer";
    firstSixTimesBtn.className = "check-answer-btn";
  firstSixTimesDiv.appendChild(firstSixTimesBtn);


firstSixTimesBtn.addEventListener('click', (e) => {
    let firstSixTimesUserInput = document.getElementById("firstSixTimesInput").value;
    console.log(firstSixTimesInput);
      if (firstSixTimesUserInput === '6') {
        firstSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        firstSixTimesBtn.value = "Correct!";
        firstSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            firstSixTimesDiv.appendChild(successImg);
              document.getElementById('firstSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
       
        
    } else if (firstSixTimesUserInput.length === 0) {
    } else {
        firstSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        firstSixTimesBtn.value = "Incorrect!";
        firstSixTimesBtn.disabled = true;
          document.getElementById('firstSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              firstSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 6 x 2 div and functionality
let secondSixTimesDiv = document.createElement('div');
secondSixTimesDiv.textContent = '6 x 2 =';
secondSixTimesDiv.classList.add("problem-styling");
  let secondSixTimesInput = document.createElement('input');
  secondSixTimesInput.type = "text";
  secondSixTimesInput.id = "secondSixTimesInput";
  secondSixTimesInput.autocomplete = "off";
  secondSixTimesInput.className = "input-styling";
    secondSixTimesDiv.appendChild(secondSixTimesInput);
      let secondSixTimesBtn = document.createElement('input');
    secondSixTimesBtn.type = "button";
    secondSixTimesBtn.value = "Check answer";
    secondSixTimesBtn.className = "check-answer-btn";
  secondSixTimesDiv.appendChild(secondSixTimesBtn);


secondSixTimesBtn.addEventListener('click', (e) => {
    let secondSixTimesUserInput = document.getElementById("secondSixTimesInput").value;
    console.log(secondSixTimesInput);
      if (secondSixTimesUserInput === '12') {
        secondSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        secondSixTimesBtn.value = "Correct!";
        secondSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            secondSixTimesDiv.appendChild(successImg);
              document.getElementById('secondSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (secondSixTimesUserInput.length === 0) {
    } else {
        secondSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        secondSixTimesBtn.value = "Incorrect!";
        secondSixTimesBtn.disabled = true;
          document.getElementById('secondSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              secondSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 6 x 3 div and functionality
let thirdSixTimesDiv = document.createElement('div');
thirdSixTimesDiv.textContent = '6 x 3 =';
thirdSixTimesDiv.classList.add("problem-styling");
  let thirdSixTimesInput = document.createElement('input');
  thirdSixTimesInput.type = "text";
  thirdSixTimesInput.id = "thirdSixTimesInput";
  thirdSixTimesInput.autocomplete = "off";
  thirdSixTimesInput.className = "input-styling";
    thirdSixTimesDiv.appendChild(thirdSixTimesInput);
      let thirdSixTimesBtn = document.createElement('input');
    thirdSixTimesBtn.type = "button";
    thirdSixTimesBtn.value = "Check answer";
    thirdSixTimesBtn.className = "check-answer-btn";
  thirdSixTimesDiv.appendChild(thirdSixTimesBtn);


thirdSixTimesBtn.addEventListener('click', (e) => {
    let thirdSixTimesUserInput = document.getElementById("thirdSixTimesInput").value;
    console.log(thirdSixTimesInput);
      if (thirdSixTimesUserInput === '18') {
        thirdSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        thirdSixTimesBtn.value = "Correct!";
        thirdSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            thirdSixTimesDiv.appendChild(successImg);
              document.getElementById('thirdSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (thirdSixTimesUserInput.length === 0) {
    } else {
        thirdSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        thirdSixTimesBtn.value = "Incorrect!";
        thirdSixTimesBtn.disabled = true;
          document.getElementById('thirdSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              thirdSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 6 x 4 div and functionality
let fourthSixTimesDiv = document.createElement('div');
fourthSixTimesDiv.textContent = '6 x 4 =';
fourthSixTimesDiv.classList.add("problem-styling");
  let fourthSixTimesInput = document.createElement('input');
  fourthSixTimesInput.type = "text";
  fourthSixTimesInput.id = "fourthSixTimesInput";
  fourthSixTimesInput.autocomplete = "off";
  fourthSixTimesInput.className = "input-styling";
    fourthSixTimesDiv.appendChild(fourthSixTimesInput);
      let fourthSixTimesBtn = document.createElement('input');
    fourthSixTimesBtn.type = "button";
    fourthSixTimesBtn.value = "Check answer";
    fourthSixTimesBtn.className = "check-answer-btn";
  fourthSixTimesDiv.appendChild(fourthSixTimesBtn);


fourthSixTimesBtn.addEventListener('click', (e) => {
    let fourthSixTimesUserInput = document.getElementById("fourthSixTimesInput").value;
    console.log(fourthSixTimesInput);
      if (fourthSixTimesUserInput === '24') {
        fourthSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        fourthSixTimesBtn.value = "Correct!";
        fourthSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            fourthSixTimesDiv.appendChild(successImg);
              document.getElementById('fourthSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (fourthSixTimesUserInput.length === 0) {
    } else {
        fourthSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        fourthSixTimesBtn.value = "Incorrect!";
        fourthSixTimesBtn.disabled = true;
          document.getElementById('fourthSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              fourthSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 6 x 5 div and functionality
let fifthSixTimesDiv = document.createElement('div');
fifthSixTimesDiv.textContent = '6 x 5 =';
fifthSixTimesDiv.classList.add("problem-styling");
  let fifthSixTimesInput = document.createElement('input');
  fifthSixTimesInput.type = "text";
  fifthSixTimesInput.id = "fifthSixTimesInput";
  fifthSixTimesInput.autocomplete = "off";
  fifthSixTimesInput.className = "input-styling";
    fifthSixTimesDiv.appendChild(fifthSixTimesInput);
      let fifthSixTimesBtn = document.createElement('input');
    fifthSixTimesBtn.type = "button";
    fifthSixTimesBtn.value = "Check answer";
    fifthSixTimesBtn.className = "check-answer-btn";
  fifthSixTimesDiv.appendChild(fifthSixTimesBtn);


fifthSixTimesBtn.addEventListener('click', (e) => {
    let fifthSixTimesUserInput = document.getElementById("fifthSixTimesInput").value;
    console.log(fifthSixTimesInput);
      if (fifthSixTimesUserInput === '30') {
        fifthSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        fifthSixTimesBtn.value = "Correct!";
        fifthSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            fifthSixTimesDiv.appendChild(successImg);
              document.getElementById('fifthSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (fifthSixTimesUserInput.length === 0) {
    } else {
        fifthSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        fifthSixTimesBtn.value = "Incorrect!";
        fifthSixTimesBtn.disabled = true;
          document.getElementById('fifthSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              fifthSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});



// 6 x 6 div and functionality
let sixthSixTimesDiv = document.createElement('div');
sixthSixTimesDiv.textContent = '6 x 6 =';
sixthSixTimesDiv.classList.add("problem-styling");
  let sixthSixTimesInput = document.createElement('input');
  sixthSixTimesInput.type = "text";
  sixthSixTimesInput.id = "sixthSixTimesInput";
  sixthSixTimesInput.autocomplete = "off";
  sixthSixTimesInput.className = "input-styling";
    sixthSixTimesDiv.appendChild(sixthSixTimesInput);
      let sixthSixTimesBtn = document.createElement('input');
    sixthSixTimesBtn.type = "button";
    sixthSixTimesBtn.value = "Check answer";
    sixthSixTimesBtn.className = "check-answer-btn";
  sixthSixTimesDiv.appendChild(sixthSixTimesBtn);


sixthSixTimesBtn.addEventListener('click', (e) => {
    let sixthSixTimesUserInput = document.getElementById("sixthSixTimesInput").value;
    console.log(sixthSixTimesInput);
      if (sixthSixTimesUserInput === '36') {
        sixthSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        sixthSixTimesBtn.value = "Correct!";
        sixthSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            sixthSixTimesDiv.appendChild(successImg);
              document.getElementById('sixthSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (sixthSixTimesUserInput.length === 0) {
    } else {
        sixthSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        sixthSixTimesBtn.value = "Incorrect!";
        sixthSixTimesBtn.disabled = true;
          document.getElementById('sixthSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              sixthSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});



// 6 x 7 div and functionality
let seventhSixTimesDiv = document.createElement('div');
seventhSixTimesDiv.textContent = '6 x 7 =';
seventhSixTimesDiv.classList.add("problem-styling");
  let seventhSixTimesInput = document.createElement('input');
  seventhSixTimesInput.type = "text";
  seventhSixTimesInput.id = "seventhSixTimesInput";
  seventhSixTimesInput.autocomplete = "off";
  seventhSixTimesInput.className = "input-styling";
    seventhSixTimesDiv.appendChild(seventhSixTimesInput);
      let seventhSixTimesBtn = document.createElement('input');
    seventhSixTimesBtn.type = "button";
    seventhSixTimesBtn.value = "Check answer";
    seventhSixTimesBtn.className = "check-answer-btn";
  seventhSixTimesDiv.appendChild(seventhSixTimesBtn);


seventhSixTimesBtn.addEventListener('click', (e) => {
    let seventhSixTimesUserInput = document.getElementById("seventhSixTimesInput").value;
    console.log(seventhSixTimesInput);
      if (seventhSixTimesUserInput === '42') {
        seventhSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        seventhSixTimesBtn.value = "Correct!";
        seventhSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            seventhSixTimesDiv.appendChild(successImg);
              document.getElementById('seventhSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (seventhSixTimesUserInput.length === 0) {
    } else {
        seventhSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        seventhSixTimesBtn.value = "Incorrect!";
        seventhSixTimesBtn.disabled = true;
          document.getElementById('seventhSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              seventhSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 6 x 8 div and functionality
let eighthSixTimesDiv = document.createElement('div');
eighthSixTimesDiv.textContent = '6 x 8 =';
eighthSixTimesDiv.classList.add("problem-styling");
  let eighthSixTimesInput = document.createElement('input');
  eighthSixTimesInput.type = "text";
  eighthSixTimesInput.id = "eighthSixTimesInput";
  eighthSixTimesInput.autocomplete = "off";
  eighthSixTimesInput.className = "input-styling";
    eighthSixTimesDiv.appendChild(eighthSixTimesInput);
      let eighthSixTimesBtn = document.createElement('input');
    eighthSixTimesBtn.type = "button";
    eighthSixTimesBtn.value = "Check answer";
    eighthSixTimesBtn.className = "check-answer-btn";
  eighthSixTimesDiv.appendChild(eighthSixTimesBtn);


eighthSixTimesBtn.addEventListener('click', (e) => {
    let eighthSixTimesUserInput = document.getElementById("eighthSixTimesInput").value;
    console.log(eighthSixTimesInput);
      if (eighthSixTimesUserInput === '48') {
        eighthSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        eighthSixTimesBtn.value = "Correct!";
        eighthSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            eighthSixTimesDiv.appendChild(successImg);
              document.getElementById('eighthSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (eighthSixTimesUserInput.length === 0) {
    } else {
        eighthSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        eighthSixTimesBtn.value = "Incorrect!";
        eighthSixTimesBtn.disabled = true;
          document.getElementById('eighthSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              eighthSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});



// 6 x 9 div and functionality
let ninthSixTimesDiv = document.createElement('div');
ninthSixTimesDiv.textContent = '6 x 9 =';
ninthSixTimesDiv.classList.add("problem-styling");
  let ninthSixTimesInput = document.createElement('input');
  ninthSixTimesInput.type = "text";
  ninthSixTimesInput.id = "ninthSixTimesInput";
  ninthSixTimesInput.autocomplete = "off";
  ninthSixTimesInput.className = "input-styling";
    ninthSixTimesDiv.appendChild(ninthSixTimesInput);
      let ninthSixTimesBtn = document.createElement('input');
    ninthSixTimesBtn.type = "button";
    ninthSixTimesBtn.value = "Check answer";
    ninthSixTimesBtn.className = "check-answer-btn";
  ninthSixTimesDiv.appendChild(ninthSixTimesBtn);


ninthSixTimesBtn.addEventListener('click', (e) => {
    let ninthSixTimesUserInput = document.getElementById("ninthSixTimesInput").value;
    console.log(ninthSixTimesInput);
      if (ninthSixTimesUserInput === '54') {
        ninthSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        ninthSixTimesBtn.value = "Correct!";
        ninthSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            ninthSixTimesDiv.appendChild(successImg);
              document.getElementById('ninthSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (ninthSixTimesUserInput.length === 0) {
    } else {
        ninthSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        ninthSixTimesBtn.value = "Incorrect!";
        ninthSixTimesBtn.disabled = true;
          document.getElementById('ninthSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              ninthSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 6 x 10 div and functionality
let tenthSixTimesDiv = document.createElement('div');
tenthSixTimesDiv.textContent = '6 x 10 =';
tenthSixTimesDiv.classList.add("problem-styling");
  let tenthSixTimesInput = document.createElement('input');
  tenthSixTimesInput.type = "text";
  tenthSixTimesInput.id = "tenthSixTimesInput";
  tenthSixTimesInput.autocomplete = "off";
  tenthSixTimesInput.className = "input-styling";
    tenthSixTimesDiv.appendChild(tenthSixTimesInput);
      let tenthSixTimesBtn = document.createElement('input');
    tenthSixTimesBtn.type = "button";
    tenthSixTimesBtn.value = "Check answer";
    tenthSixTimesBtn.className = "check-answer-btn";
  tenthSixTimesDiv.appendChild(tenthSixTimesBtn);


tenthSixTimesBtn.addEventListener('click', (e) => {
    let tenthSixTimesUserInput = document.getElementById("tenthSixTimesInput").value;
    console.log(tenthSixTimesInput);
      if (tenthSixTimesUserInput === '60') {
        tenthSixTimesBtn.style = "color: white; background-color: green; width: 115px;";
        tenthSixTimesBtn.value = "Correct!";
        tenthSixTimesBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            tenthSixTimesDiv.appendChild(successImg);
              document.getElementById('tenthSixTimesInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (tenthSixTimesUserInput.length === 0) {
    } else {
        tenthSixTimesBtn.style = "color: white; background-color: red; width: 115px;";
        tenthSixTimesBtn.value = "Incorrect!";
        tenthSixTimesBtn.disabled = true;
          document.getElementById('tenthSixTimesInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              tenthSixTimesDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 1 x 6 div and functionality
let firstTimesSixDiv = document.createElement('div');
firstTimesSixDiv.textContent = '1 x 6 =';
firstTimesSixDiv.classList.add("problem-styling");
  let firstTimesSixInput = document.createElement('input');
  firstTimesSixInput.type = "text";
firstTimesSixInput.id = "firstTimesSixInput";
  firstTimesSixInput.autocomplete = "off";
  firstTimesSixInput.className = "input-styling";
    firstTimesSixDiv.appendChild(firstTimesSixInput);
      let firstTimesSixBtn = document.createElement('input');
    firstTimesSixBtn.type = "button";
    firstTimesSixBtn.value = "Check answer";
    firstTimesSixBtn.className = "check-answer-btn";
  firstTimesSixDiv.appendChild(firstTimesSixBtn);


firstTimesSixBtn.addEventListener('click', (e) => {
    let firstTimesSixUserInput = document.getElementById("firstTimesSixInput").value;
    console.log(firstTimesSixInput);
      if (firstTimesSixUserInput === '6') {
        firstTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        firstTimesSixBtn.value = "Correct!";
        firstTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            firstTimesSixDiv.appendChild(successImg);
              document.getElementById('firstTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (firstTimesSixUserInput.length === 0) {
    } else {
        firstTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        firstTimesSixBtn.value = "Incorrect!";
        firstTimesSixBtn.disabled = true;
          document.getElementById('firstTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              firstTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});



// 2 x 6 div and functionality
let secondTimesSixDiv = document.createElement('div');
secondTimesSixDiv.textContent = '2 x 6 =';
secondTimesSixDiv.classList.add("problem-styling");
  let secondTimesSixInput = document.createElement('input');
  secondTimesSixInput.type = "text";
secondTimesSixInput.id = "secondTimesSixInput";
  secondTimesSixInput.autocomplete = "off";
  secondTimesSixInput.className = "input-styling";
    secondTimesSixDiv.appendChild(secondTimesSixInput);
      let secondTimesSixBtn = document.createElement('input');
    secondTimesSixBtn.type = "button";
    secondTimesSixBtn.value = "Check answer";
    secondTimesSixBtn.className = "check-answer-btn";
  secondTimesSixDiv.appendChild(secondTimesSixBtn);


secondTimesSixBtn.addEventListener('click', (e) => {
    let secondTimesSixUserInput = document.getElementById("secondTimesSixInput").value;
    console.log(secondTimesSixInput);
      if (secondTimesSixUserInput === '12') {
        secondTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        secondTimesSixBtn.value = "Correct!";
        secondTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            secondTimesSixDiv.appendChild(successImg);
              document.getElementById('secondTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (secondTimesSixUserInput.length === 0) {
    } else {
        secondTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        secondTimesSixBtn.value = "Incorrect!";
        secondTimesSixBtn.disabled = true;
          document.getElementById('secondTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              secondTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 3 x 6 div and functionality
let thirdTimesSixDiv = document.createElement('div');
thirdTimesSixDiv.textContent = '3 x 6 =';
thirdTimesSixDiv.classList.add("problem-styling");
  let thirdTimesSixInput = document.createElement('input');
  thirdTimesSixInput.type = "text";
thirdTimesSixInput.id = "thirdTimesSixInput";
  thirdTimesSixInput.autocomplete = "off";
  thirdTimesSixInput.className = "input-styling";
    thirdTimesSixDiv.appendChild(thirdTimesSixInput);
      let thirdTimesSixBtn = document.createElement('input');
    thirdTimesSixBtn.type = "button";
    thirdTimesSixBtn.value = "Check answer";
    thirdTimesSixBtn.className = "check-answer-btn";
  thirdTimesSixDiv.appendChild(thirdTimesSixBtn);


thirdTimesSixBtn.addEventListener('click', (e) => {
    let thirdTimesSixUserInput = document.getElementById("thirdTimesSixInput").value;
    console.log(thirdTimesSixInput);
      if (thirdTimesSixUserInput === '18') {
        thirdTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        thirdTimesSixBtn.value = "Correct!";
        thirdTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            thirdTimesSixDiv.appendChild(successImg);
              document.getElementById('thirdTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (thirdTimesSixUserInput.length === 0) {
    } else {
        thirdTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        thirdTimesSixBtn.value = "Incorrect!";
        thirdTimesSixBtn.disabled = true;
          document.getElementById('thirdTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              thirdTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


// 4 x 6 div and functionality
let fourthTimesSixDiv = document.createElement('div');
fourthTimesSixDiv.textContent = '4 x 6 =';
fourthTimesSixDiv.classList.add("problem-styling");
  let fourthTimesSixInput = document.createElement('input');
  fourthTimesSixInput.type = "text";
fourthTimesSixInput.id = "fourthTimesSixInput";
  fourthTimesSixInput.autocomplete = "off";
  fourthTimesSixInput.className = "input-styling";
    fourthTimesSixDiv.appendChild(fourthTimesSixInput);
      let fourthTimesSixBtn = document.createElement('input');
    fourthTimesSixBtn.type = "button";
    fourthTimesSixBtn.value = "Check answer";
    fourthTimesSixBtn.className = "check-answer-btn";
  fourthTimesSixDiv.appendChild(fourthTimesSixBtn);


fourthTimesSixBtn.addEventListener('click', (e) => {
    let fourthTimesSixUserInput = document.getElementById("fourthTimesSixInput").value;
    console.log(fourthTimesSixInput);
      if (fourthTimesSixUserInput === '24') {
        fourthTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        fourthTimesSixBtn.value = "Correct!";
        fourthTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            fourthTimesSixDiv.appendChild(successImg);
              document.getElementById('fourthTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (fourthTimesSixUserInput.length === 0) {
    } else {
        fourthTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        fourthTimesSixBtn.value = "Incorrect!";
        fourthTimesSixBtn.disabled = true;
          document.getElementById('fourthTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              fourthTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


//5 x 6 div and functionality
let fifthTimesSixDiv = document.createElement('div');
fifthTimesSixDiv.textContent = '5 x 6 =';
fifthTimesSixDiv.classList.add("problem-styling");
  let fifthTimesSixInput = document.createElement('input');
  fifthTimesSixInput.type = "text";
fifthTimesSixInput.id = "fifthTimesSixInput";
  fifthTimesSixInput.autocomplete = "off";
  fifthTimesSixInput.className = "input-styling";
    fifthTimesSixDiv.appendChild(fifthTimesSixInput);
      let fifthTimesSixBtn = document.createElement('input');
    fifthTimesSixBtn.type = "button";
    fifthTimesSixBtn.value = "Check answer";
    fifthTimesSixBtn.className = "check-answer-btn";
  fifthTimesSixDiv.appendChild(fifthTimesSixBtn);


fifthTimesSixBtn.addEventListener('click', (e) => {
    let fifthTimesSixUserInput = document.getElementById("fifthTimesSixInput").value;
    console.log(fifthTimesSixInput);
      if (fifthTimesSixUserInput === '30') {
        fifthTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        fifthTimesSixBtn.value = "Correct!";
        fifthTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            fifthTimesSixDiv.appendChild(successImg);
              document.getElementById('fifthTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (fifthTimesSixUserInput.length === 0) {
    } else {
        fifthTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        fifthTimesSixBtn.value = "Incorrect!";
        fifthTimesSixBtn.disabled = true;
          document.getElementById('fifthTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              fifthTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


//6 x 6 div and functionality
let sixthTimesSixDiv = document.createElement('div');
sixthTimesSixDiv.textContent = '6 x 6 =';
sixthTimesSixDiv.classList.add("problem-styling");
  let sixthTimesSixInput = document.createElement('input');
  sixthTimesSixInput.type = "text";
sixthTimesSixInput.id = "sixthTimesSixInput";
  sixthTimesSixInput.autocomplete = "off";
  sixthTimesSixInput.className = "input-styling";
    sixthTimesSixDiv.appendChild(sixthTimesSixInput);
      let sixthTimesSixBtn = document.createElement('input');
    sixthTimesSixBtn.type = "button";
    sixthTimesSixBtn.value = "Check answer";
    sixthTimesSixBtn.className = "check-answer-btn";
  sixthTimesSixDiv.appendChild(sixthTimesSixBtn);


sixthTimesSixBtn.addEventListener('click', (e) => {
    let sixthTimesSixUserInput = document.getElementById("sixthTimesSixInput").value;
    console.log(sixthTimesSixInput);
      if (sixthTimesSixUserInput === '36') {
        sixthTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        sixthTimesSixBtn.value = "Correct!";
        sixthTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            sixthTimesSixDiv.appendChild(successImg);
              document.getElementById('sixthTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (sixthTimesSixUserInput.length === 0) {
    } else {
        sixthTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        sixthTimesSixBtn.value = "Incorrect!";
        sixthTimesSixBtn.disabled = true;
          document.getElementById('sixthTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              sixthTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


//7 x 6 div and functionality
let seventhTimesSixDiv = document.createElement('div');
seventhTimesSixDiv.textContent = '7 x 6 =';
seventhTimesSixDiv.classList.add("problem-styling");
  let seventhTimesSixInput = document.createElement('input');
  seventhTimesSixInput.type = "text";
seventhTimesSixInput.id = "seventhTimesSixInput";
  seventhTimesSixInput.autocomplete = "off";
  seventhTimesSixInput.className = "input-styling";
    seventhTimesSixDiv.appendChild(seventhTimesSixInput);
      let seventhTimesSixBtn = document.createElement('input');
    seventhTimesSixBtn.type = "button";
    seventhTimesSixBtn.value = "Check answer";
    seventhTimesSixBtn.className = "check-answer-btn";
  seventhTimesSixDiv.appendChild(seventhTimesSixBtn);


seventhTimesSixBtn.addEventListener('click', (e) => {
    let seventhTimesSixUserInput = document.getElementById("seventhTimesSixInput").value;
    console.log(seventhTimesSixInput);
      if (seventhTimesSixUserInput === '42') {
        seventhTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        seventhTimesSixBtn.value = "Correct!";
        seventhTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            seventhTimesSixDiv.appendChild(successImg);
              document.getElementById('seventhTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (seventhTimesSixUserInput.length === 0) {
    } else {
        seventhTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        seventhTimesSixBtn.value = "Incorrect!";
        seventhTimesSixBtn.disabled = true;
          document.getElementById('seventhTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              seventhTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


//8 x 6 div and functionality
let eighthTimesSixDiv = document.createElement('div');
eighthTimesSixDiv.textContent = '8 x 6 =';
eighthTimesSixDiv.classList.add("problem-styling");
  let eighthTimesSixInput = document.createElement('input');
  eighthTimesSixInput.type = "text";
eighthTimesSixInput.id = "eighthTimesSixInput";
  eighthTimesSixInput.autocomplete = "off";
  eighthTimesSixInput.className = "input-styling";
    eighthTimesSixDiv.appendChild(eighthTimesSixInput);
      let eighthTimesSixBtn = document.createElement('input');
    eighthTimesSixBtn.type = "button";
    eighthTimesSixBtn.value = "Check answer";
    eighthTimesSixBtn.className = "check-answer-btn";
  eighthTimesSixDiv.appendChild(eighthTimesSixBtn);


eighthTimesSixBtn.addEventListener('click', (e) => {
    let eighthTimesSixUserInput = document.getElementById("eighthTimesSixInput").value;
    console.log(eighthTimesSixInput);
      if (eighthTimesSixUserInput === '48') {
        eighthTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        eighthTimesSixBtn.value = "Correct!";
        eighthTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            eighthTimesSixDiv.appendChild(successImg);
              document.getElementById('eighthTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (eighthTimesSixUserInput.length === 0) {
    } else {
        eighthTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        eighthTimesSixBtn.value = "Incorrect!";
        eighthTimesSixBtn.disabled = true;
          document.getElementById('eighthTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              eighthTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});


//9 x 6 div and functionality
let ninthTimesSixDiv = document.createElement('div');
ninthTimesSixDiv.textContent = '9 x 6 =';
ninthTimesSixDiv.classList.add("problem-styling");
  let ninthTimesSixInput = document.createElement('input');
  ninthTimesSixInput.type = "text";
ninthTimesSixInput.id = "ninthTimesSixInput";
  ninthTimesSixInput.autocomplete = "off";
  ninthTimesSixInput.className = "input-styling";
    ninthTimesSixDiv.appendChild(ninthTimesSixInput);
      let ninthTimesSixBtn = document.createElement('input');
    ninthTimesSixBtn.type = "button";
    ninthTimesSixBtn.value = "Check answer";
    ninthTimesSixBtn.className = "check-answer-btn";
  ninthTimesSixDiv.appendChild(ninthTimesSixBtn);


ninthTimesSixBtn.addEventListener('click', (e) => {
    let ninthTimesSixUserInput = document.getElementById("ninthTimesSixInput").value;
    console.log(ninthTimesSixInput);
      if (ninthTimesSixUserInput === '54') {
        ninthTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        ninthTimesSixBtn.value = "Correct!";
        ninthTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            ninthTimesSixDiv.appendChild(successImg);
              document.getElementById('ninthTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (ninthTimesSixUserInput.length === 0) {
    } else {
        ninthTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        ninthTimesSixBtn.value = "Incorrect!";
        ninthTimesSixBtn.disabled = true;
          document.getElementById('ninthTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              ninthTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});



//10 x 6 div and functionality
let tenthTimesSixDiv = document.createElement('div');
tenthTimesSixDiv.textContent = '10 x 6 =';
tenthTimesSixDiv.classList.add("problem-styling");
  let tenthTimesSixInput = document.createElement('input');
  tenthTimesSixInput.type = "text";
tenthTimesSixInput.id = "tenthTimesSixInput";
  tenthTimesSixInput.autocomplete = "off";
  tenthTimesSixInput.className = "input-styling";
    tenthTimesSixDiv.appendChild(tenthTimesSixInput);
      let tenthTimesSixBtn = document.createElement('input');
    tenthTimesSixBtn.type = "button";
    tenthTimesSixBtn.value = "Check answer";
    tenthTimesSixBtn.className = "check-answer-btn";
  tenthTimesSixDiv.appendChild(tenthTimesSixBtn);


tenthTimesSixBtn.addEventListener('click', (e) => {
    let tenthTimesSixUserInput = document.getElementById("tenthTimesSixInput").value;
    console.log(tenthTimesSixInput);
      if (tenthTimesSixUserInput === '60') {
        tenthTimesSixBtn.style = "color: white; background-color: green; width: 115px;";
        tenthTimesSixBtn.value = "Correct!";
        tenthTimesSixBtn.disabled = true;
          let successImg = document.createElement('img');
          successImg.classList.add("success-img");
          successImg.src = "images/success.png"
            tenthTimesSixDiv.appendChild(successImg);
              document.getElementById('tenthTimesSixInput').disabled = true;
            studentGrade = studentGrade + 1;
            gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
          titleAndGradeDiv.appendChild(gradeDiv);
          container.appendChild(tryAgainBtn);
        percentage();
        
        
    } else if (tenthTimesSixUserInput.length === 0) {
    } else {
        tenthTimesSixBtn.style = "color: white; background-color: red; width: 115px;";
        tenthTimesSixBtn.value = "Incorrect!";
        tenthTimesSixBtn.disabled = true;
          document.getElementById('tenthTimesSixInput').disabled = true;
            let incorrectImg = document.createElement('img');
            incorrectImg.classList.add("incorrect-img");
            incorrectImg.src = "images/incorrect.png"
              tenthTimesSixDiv.appendChild(incorrectImg);
                studentGrade = studentGrade + 0;
              gradeDiv.textContent = 'Grade: ' + studentGrade + '/20';
            titleAndGradeDiv.appendChild(gradeDiv);
            container.appendChild(tryAgainBtn);
        percentage();
        
    }
});















let sixTimesArr = [firstSixTimesDiv, secondSixTimesDiv, thirdSixTimesDiv, fourthSixTimesDiv, fifthSixTimesDiv, sixthSixTimesDiv, seventhSixTimesDiv, eighthSixTimesDiv, ninthSixTimesDiv, tenthSixTimesDiv];

sixTimesArr.sort(() => Math.random() - 0.5);


for (let i=0; i<sixTimesArr.length; i++) {
    sixTimesDiv.appendChild(sixTimesArr[i]);
}



let timesSixArr = [firstTimesSixDiv, secondTimesSixDiv, thirdTimesSixDiv, fourthTimesSixDiv, fifthTimesSixDiv, sixthTimesSixDiv, seventhTimesSixDiv, eighthTimesSixDiv, ninthTimesSixDiv, tenthTimesSixDiv];

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



