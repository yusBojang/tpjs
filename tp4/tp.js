const quizData = [

    {
        question: "Quelle langue s'exécute dans un navigateur Web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },

    {
        question: "Vainqueur de la coupe du monde en 1994?",
        a: "SENEGAL",
        b: "BRESIL",
        c: "ITALIE",
        d: "ARGENTINE",
        correct: "b",
    },

    {
        question: "Meilleur Butteur de la can 2019?",
        a: "Odion Ighalo",
        b: "Rihad Mahrez",
        c: "Baghdad Bounedjah",
        d: "sadio mane",
        correct: "a",
    },

    {
        question: "Buteur de la final de la coupe du monde 2010?",
        a: "Arjen Robben",
        b: "Andreas Iniesta",
        c: "David Villa",
        d: "sergio Ramos",
        correct: "b",
    },


    {
        question: "Quel est le seul joueur qui a gagné une coupe du monde à 18 ans ??",
        a: "Maroda",
        b: "Pele",
        c: "Ronaldo",
        d: "Ronaldinho",
        correct: "b",
    },

    {
        question: "Quel est le joueur qui a gagne le ballon d'or 2008  ??",
        a: "Modric",
        b: "Messi",
        c: "C.Ronaldo",
        d: "Xavi",
        correct: "c",
    },

    {
        question: "le club le plus titré en champions league ??",
        a: "Barcelona",
        b: "Real Madrid",
        c: "Liverpool",
        d: "Marseille",
        correct: "b",
    },

    {
        question: "meilleur buteur africain de l'histoire de la premier league ??",
        a: "Etoo",
        b: "sadio mane",
        c: "Drogba",
        d: "Mo Sallah",
        correct: "d",
    },



    

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})