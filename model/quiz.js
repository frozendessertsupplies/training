let Test = {
    "CustomerSolutions" : {
        numQuestions : 2,
        questions : [
            {   
                questionNumber : 1,     
                title : "Question 1",
                question : "Which of these is not a size we supply for the average cup?",
                type : "mc",
                options : ["4oz", "6oz", "8oz", "10oz", "12oz", "16oz"],
                answerIndex : 3
            },
            {
                questionNumber : 2,
                title : "Question 2",
                question : "What is our phone number?",
                type : "mc",
                options : ["208-524-0000", "480-428-1999", "480-285-8818", "1-800-981-9811", "208-525-0000", "917-449-1470"],
                answerIndex : 1,
            }
        ]
    },

    "Warehouse" : {
        numQuestions : 2,
        questions: [
            {
                questionNumber : 1,
                title : "Question 1",
                question : "What is the fourth value?",
                type : "mc",
                options : [
                    "We make your happiness our priority",
                    "We do the right thing",
                    "We don't care who gets the credit"
                ],
                answerIndex : 1
            },
            {    
                questionNumber : 2,    
                title : "Question 2",
                question : "What is the first value?",
                type : "mc",
                options : [
                    "We make your happiness our priority",
                    "We do the right thing",
                    "We don't care who gets the credit"
                ],
                answerIndex : 0,
            }
        ]
    }
};

function getData(dept) {
    // let data  = {
    //     dept: Test[id],
    //     questions: Test[id].questions
    // };

    return Test[dept].questions;
}

module.exports = {
    getData : getData
}