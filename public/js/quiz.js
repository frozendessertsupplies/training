 function checkAnswers() {
    // get a list of all the answers
    let department = document.getElementById('department').innerHTML
    let answers = []

    //getting all the answers
    for(let i = 1; i <= 10; i++){
        // check for radio buttons
        if(document.getElementsByName(i).length > 0) {
            let radio = document.getElementsByName(i);
            for(let j = 0; j < radio.length; j++) {
                if(radio[j].checked){
                    answers.push(radio[j].value)
                }
            }
        // check for input field
        } else if (document.getElementById(i)){
            answers.push(document.getElementById(i).value)
        }  else {
            console.log('A quiz question is neither an input field or a radio')
        }
    }


    reqBody = {
        department: department,
        answers : answers
    }
     
    let init = {
        method: 'POST',
        body: reqBody,
        credentials: 'include',
        headers : {'Content-Type': 'application/json'}
    }

    // send user answers then receive the score
    console.log({'before the fetch request: ' : reqBody} )

    let url = `/api/${department}`
    fetch(url, init)
        .then(data => console.log(data))
        .catch(err => console.err(err))
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