let Test = {
	"quizzes": [{
			"department": "Customer Solutions",
			"manager_email": "it@frozendessertsupplies.com",
			"questions": [{
					"title": "Question One",
					"question_type": "fillBlank",
					"question": "what is my name",
					"answer": "true"
				},
				{
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
			"questions": [{
					"title": "Question One",
					"question_type": "fillBlank",
					"question": "what is our department",
					"answer": "good"
				},
				{
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

module.exports = {
    getQuiz : getQuiz
}