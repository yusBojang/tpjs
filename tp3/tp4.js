const quizData = [
    {
        question:"quel est le meilleur langage de programation en 2022",
        a:"java",
        b:"c",
        c:"python",
        d:"javaScript",
        correct:"d",

    },

    {
        question:"quel est le meilleur langage de programation en 2022",
        a:"java",
        b:"c",
        c:"python",
        d:"javaScript",
        correct:"d",

    },

    {
        question:"quel est le meilleur langage de programation en 2022",
        a:"java",
        b:"c",
        c:"python",
        d:"javaScript",
        correct:"d",


    },
    {
        question:"quel est le meilleur langage de programation en 2022",
        a:"java",
        b:"c",
        c:"python",
        d:"javaScript",
        correct:"d",

    },

    {
        question:"quellll est le meilleur langage de programation en 2022",
        a:"java",
        b:"c",
        c:"python",
        d:"javaScript",
        correct:"d",

    }
] 

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    
    const currentQuizData = quizData(currentQuiz)
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData
    b_text.innerText = currentQuizData
    c_text.innerText = currentQuizData
    d_text.innerText = currentQuizData

}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked )
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitbtn.addEventListener('click',() => {
    
})







