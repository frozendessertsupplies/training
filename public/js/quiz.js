/**
 * this function will cover the checking answers part of the quiz
 *  gets the values off the page and make a fetch request
 */

 function checkAnswers() {
    // get a list of all the answers
    let department = document.getElementById('department').innerHTML
    let answers = []

    //getting all the answers
    for(let i = 1; i <= 10; i++){
        // check for radio buttons
        if(document.getElementsByName(i)) {
            let radio = document.getElementsByName(i);
            
            console.log("this should be a radio list" + radio) // is this even a radio list
            
            for(let j = 0; j <= radio; j++) {
                if(radio[i].checked){
                    answers.push(radio[i].value)
                }
            }
        // check for input field
        } else if (document.getElementById(i)){

            console.log("this should be an input field: " + document.getElementById(i)) // did I get the right element
            
            answers.push(document.getElementById(i).value)
        }  else {
            // idk what it could be tbh
        }
    }

    reqBody = {
        department: department,
        answers : answers,
    }

    let init = {
        method: 'POST',
        body: reqBody,
        headers : {
           'Content-Type': 'application/json'
        }
    }

    console.log(reqBody)
    // // send user answers then receive the score
    // fetch(`/api/${department}`, init )
    //     .then(data => console.log(data))
    //     .catch(err => console.err(err))
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
                document.getElementById('btn_check').style.visibility = 'visible';
            } 
        } else {
            // or else, show the next question
            questions[i].classList.add('visible')
        }
    }
 }