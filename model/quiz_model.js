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

function getAnswers(dept) {
	let correct = []
	// get the quiz
	let quiz = JSON.parse( getQuiz(dept) )

	// add the correct answers to correct
	quiz.questions.forEach(q => {
		correct.push(q.answer)
	});
	
	// return the answers
	return new Promise(JSON.stringify(correct))
}


module.exports = {
	getQuiz : getQuiz,
	getAnswers : getAnswers
}