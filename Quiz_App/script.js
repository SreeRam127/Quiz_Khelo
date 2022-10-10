const quizDB = [
    {
        question: "Q1: What is the full form of DBMS?",
        a : "Data of Binary Management System",
        b : "Database Management System",
        c : "Database Management Service",
        d : "Data Backup Management System",
        ans : "ans2"
    },
    {
        question: "Q2 What is a database?",
        a : "Organized collection of information that cannot be accessed, updated, and managed",
        b : "Collection of data or information without organizing",
        c : "Organized collection of data or information that can be accessed, updated, and managed",
        d : "Organized collection of data that cannot be updated",
        ans : "ans3"
    },
    {
        question: "Q3 What is DBMS?",
        a : "DBMS is a collection of queries",
        b : "DBMS is a high-level language",
        c : "DBMS is a programming language",
        d : "DBMS stores, modifies and retrieves data",
        ans : "ans4"
    },
    {
        question: "Q4 Who created the first DBMS?",
        a : "Edgar Frank Codd",
        b : "Charles Bachman",
        c : "Charles Babbage",
        d : "Sharon B. Codd",
        ans : "ans2"
    },
    {
        question: "Q5 Which type of data can be stored in the database?",
        a : "Image oriented data",
        b : "Text, files containing data",
        c : "Data in the form of audio or video",
        d : "All of the above",
        ans : "ans4"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1'); 
const option2 = document.querySelector('#option2'); 
const option3 = document.querySelector('#option3'); 
const option4 = document.querySelector('#option4'); 
const submit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore');
const answers = document.querySelectorAll('.answer');

let count = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[count];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsEle) => {
        if(currAnsEle.checked){
            answer = currAnsEle.id;
        }
    });
    return answer;
};

const deselect = () => {
    answers.forEach((currAnsEle) => currAnsEle.checked = false); 
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)
    if(checkedAnswer === quizDB[count].ans){
        score++;
    }
    count++
    deselect();
    if(count < quizDB.length){
        loadQuestion();
    }else{
        if(score >= 4){
            showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} 😎</h3>
        
        ` 
        showScore.classList.remove('scoreArea');
        }else{
            showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} 😡</h3>
        <button class = 'btn' onclick = 'location.reload()'>Play Again</button> 
        ` 
        showScore.classList.remove('scoreArea');
        }
    }
});
