let Test = {
	"quizzes": [{
			"department": "Customer Solutions",
			"manager_email": "it@frozendessertsupplies.com",
			"questions": [{
					"id" : 1,
					"title": "Question One",
					"question_type": "fillBlank",
					"question": "what is my name",
					"answer": "true"
				},
				{
					"id" : 2,
					"title": "Question Two",
					"question_type": "mChoice",
					"question": "How many Company Values do we have?",
					"answers": [5,6,7,8],
					"answer": 7
					
				}
			]
		},
		{
			"department": "Warehouse",
			"manager_email": "it@frozendessertsupplies.com",
			"questions": [
				{
					"id" : 1,
					"title": "Question One",
					"question_type": "fillBlank",
					"question": "what is our department",
					"answer": "good"
				},
				{

					"id" : 2,
					"title": "Question Two",
					"question_type": "mChoice",
					"question": "Who controls the music?",
					"answers": ["Isaac", "Hailey", "Hunter", "Everyone"],
					"answer": "Everyone"
				}
			]
		}
	]
}

function getQuiz(dept) {
	
    let quiz = Test.quizzes.find((quiz) => {
		return quiz.department = dept
	})

	return JSON.stringify(quiz)
}

function checkAnswers(department, answers) {
	let correct = []
	// get the quiz
	let quiz = JSON.parse( getQuiz(department) )

	// add the correct answers to correct
	quiz.questions.forEach(q => {
		correct.push(q.answer)
	});

	// compare the given with correct
	let numCorrect = 0
	let total = 0
	let which_wrong = []

	for(let i = 0; i <= answers.length; i++) {
		if(answers[i] == correct[i]){
			numCorrect += 1;
			total += 1;
			which_wrong.push({question : i, correct: true})
		} else {
			total += 1;
			which_wrong.push({question : i, correct: false})
		}
	}

	// return object with numCorrect and array of t/f
	let myQuiz = {
		total : total,
		numCorrect : numCorrect,
		which_wrong : which_wrong
	}

	return JSON.stringify(myQuiz)
}


module.exports = {
	getQuiz : getQuiz,
	checkAnswers : checkAnswers
}