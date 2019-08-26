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
					"answers": {
						"a": 5,
						"b": 6,
						"c": 7,
						"d": 8
					},
					"answer": {
						"c": 7
					}
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
					"answers": {
						"a": "Isaac",
						"b": "Hailey",
						"c": "Hunter",
						"d": "Everyone"
					},
					"answer": {
						"d": "Everyone"
					}
				}
			]
		}
	]
}

function getData(dept) {
    Test.quizzes.forEach(quiz => {
        //return quiz if quiz.department == dept
        if( quiz.department == dept ) return quiz;
    });
}

module.exports = {
    getData : getData
}