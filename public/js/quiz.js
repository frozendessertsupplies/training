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
    // send list to /api/check
    // route calls function that sends back json of passed and which questions were wrong
    let init = {
        method: 'GET',
        headers : {
           'Content-Type': 'application/json'
        }
    }
    fetch(`/api/${department}`, init )
        .then(res => res.json())
        .then(answers => {
            let numCorrect = 0
                let total = 0
                let score = []
            answers.forEach(function callback(answer, i) {
                if(answer == answers[i]) {
                    numCorrect += 1
                    total += 1
                    score.push(true)
                } else {
                    total += 1
                    score.push(false)
                }
            });
            let div = document.createElement("div")
            div.append(numCorrect)
            div.append(total)
            div.append(score)
            document.body.append(div)
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