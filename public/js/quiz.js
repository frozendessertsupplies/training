/**
 * this function will cover the checking answers part of the quiz
 *  gets the values off the page and make a fetch request
 */

 function checkAnswers() {
    // get a list of all the answers
    let department = document.getElementById('department').innerText
    let answers = []

    //getting all the answers
    for(let i = 1; i <= 10; i++){
        // check for radio buttons
        if(document.getElementsByName(i)) {
            let radio = document.getElementsByName(i);
            for(let j = 0; j <= radio; j++) {
                if(radio[i].checked){
                    answers.push(radio[i].value)
                }
            }
            // check for input field
        } else if (document.getElementById(i)){
            answers.push(document.getElementById(i).value)
        }   
    }

    let reqBody = {
        department : department,
        answers : [],
    }
    // send list to /api/check
    // route calls function that sends back json of passed and which questions were wrong
    fetch('/api/check', {
        method: 'GET',
        body: JSON.stringify(reqBody),
        headers : {
           'Content-Type': 'application/json'
        }
     })
     .then(response => {
        return response.json();
     })
 }


 function changeQuestion() {
    let questions = document.getElementsByClassName('question_container');

    // loop through the questions
    for( let i = 0; i < questions.length; i++){
        console.log(questions[i])
        //if the question is visible
        if(questions[i].classList.contains('visible')){
            //get rid of the visibility
            questions[i].classList.remove('visible')
            //if it's the second to last Q
            if(i == questions.length - 2) {
                // remove the next button
                document.getElementById('btn_next').style.visibility = 'hidden';
                document.getElementById('btn_check').style.visibility = 'visible';
            } 
        } else {
            // or else, show the next question
            questions[i].classList.add('visible')
        }
    }
 }