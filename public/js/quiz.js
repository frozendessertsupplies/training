/**
 * this functin will cover the checking answers part of the quiz
 *  gets the values off the page and make a fetch request
 */

 function checkAnswers() {
    // get a list of all the answers
    let department = document.getElementById('department')
    let answers = []

    let allAnswers = "document.something.something"

    let reqBody = {
        department : department,
        answers : [],
    }
    // send list to /api/check
    // route calls function that sends back json of passed and which questions were wrong
    fetch('/api/check', {
        method: 'POST',
        credentials: "include",
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
        //if the question is visible
        if(questions[i].classList.contains('visible')){
            //get rid of the visibility
            questions[i].classList.remove('visible')
            //if it's the second to last Q
            if(i == questions.length - 2) {
                // remove the next button
                document.getElementById('btn_next').style.visibility = 'hidden';
            } else {
                // or else, show the next question
                questions[i].classList.add('visible')
            }
        }
    }
 }