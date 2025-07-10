let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Rasmus Lerdorf",
        "answer_2": "Brendan Eich",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "David Heinemeier Hansson",
        "right_answer": 3
    },
    {
        "question": "Wofür steht die Abkürzung HTML?",
        "answer_1": "Hypertext Markup Level",
        "answer_2": "Hypertext Markup Language",
        "answer_3": "Hyperlink and Text Markup Language",
        "answer_4": "Hypertext Markup Link",
        "right_answer": 2
    },
    {
        "question": "Welches Tag wird in HTML benutzt, um einen Absatz zu definieren?",
        "answer_1": "<p>",
        "answer_2": "<div>",
        "answer_3": "<span>",
        "answer_4": "<section>",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut wird verwendet, um eine Bildquelle in HTML zu definieren?",
        "answer_1": "title",
        "answer_2": "href",
        "answer_3": "alt",
        "answer_4": "src",
        "right_answer": 4
    },
    {
        "question": "Welches HTML-Element wird verwendet, um eine ungeordnete Liste zu erstellen?",
        "answer_1": "<ol>",
        "answer_2": "<ul>",
        "answer_3": "<li>",
        "answer_4": "<list>",
        "right_answer": 2
    },
    {
        "question": "Wie wird ein Link in HTML definiert?",
        "answer_1": "<link>",
        "answer_2": "<a>",
        "answer_3": "<href>",
        "answer_4": "<url>",
        "right_answer": 2
    },
    {
        "question": "Welches Attribut wird verwendet, um eine CSS-Klasse in HTML zu definieren?",
        "answer_1": "class",
        "answer_2": "id",
        "answer_3": "style",
        "answer_4": "type",
        "right_answer": 1
    },
    {
        "question": "Welches HTML-Element wird verwendet, um eine Tabelle zu erstellen?",
        "answer_1": "<table>",
        "answer_2": "<tr>",
        "answer_3": "<td>",
        "answer_4": "<th>",
        "right_answer": 1
    },
    {
        "question": "Wie bindet man ein Bild in HTML ein?",
        "answer_1": "<image src='url'>",
        "answer_2": "<img src='url'>",
        "answer_3": "<picture src='url'>",
        "answer_4": "<figure src='url'>",
        "right_answer": 2
    },
    {
        "question": "Welches Attribut im <script>-Tag sorgt dafür, dass das Skript erst nach dem vollständigen Parsen des Dokuments ausgeführt wird?",
        "answer_1": "async",
        "answer_2": "nomodule",
        "answer_3": "defer",
        "answer_4": "type",
        "right_answer": 3
    }
];

let currentQuestionIndex = 0;

let correctAnswers = 0;

let hasAnswered = false;

function init() {
    document.getElementById("total-questions").innerText = questions.length;
    showQuestion();


}

function showQuestion() {

    if (currentQuestionIndex >= questions.length) {
        document.getElementById("endScreen").style.display = "block";
        document.getElementById("questionBody").style.display = "none";
        document.getElementById("quiz-logo").style.display = "none";

        document.getElementById("all-questions").innerText = questions.length;
        document.getElementById("correct-answers").innerText = correctAnswers;
    }

    let percentage = Math.round((currentQuestionIndex) / questions.length * 100);
    document.getElementById("progress-bar").innerHTML = percentage + "%";
    document.getElementById("progress-bar").style.width = percentage + "%";

    let question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.question;
    document.getElementById("answer_1").innerText = question.answer_1;
    document.getElementById("answer_2").innerText = question.answer_2;
    document.getElementById("answer_3").innerText = question.answer_3;
    document.getElementById("answer_4").innerText = question.answer_4;
}

function selectAnswer(answerIndex) {
    if (hasAnswered) {
        return;
    }
    hasAnswered = true;

    let question = questions[currentQuestionIndex];
    let selectedAnswer = answerIndex.slice(-1);
    let idOfRightAnswer = "answer_" + question.right_answer;

    if(selectedAnswer == question["right_answer"]) {
        document.getElementById(answerIndex).parentNode.classList.add("bg-success");
        correctAnswers++;
    } else {
        document.getElementById(answerIndex).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById("next_button").disabled = false;
}

function nextQuestion() {
    hasAnswered = false;
    currentQuestionIndex++;

    document.getElementById("next_button").disabled = true;
    document.querySelectorAll(".quiz-answer-card").forEach(card => {
        card.classList.remove("bg-success", "bg-danger");
    });

    showQuestion();
    updateCurrentQuestion();
}

function updateCurrentQuestion() {
    document.getElementById("current-question").innerText = currentQuestionIndex + 1;
}

function restartGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    hasAnswered = false;

    document.getElementById("endScreen").style.display = "none";
    document.getElementById("questionBody").style.display = "block";
    document.getElementById("quiz-logo").style.display = "block";

    document.getElementById("next_button").disabled = true;
    document.querySelectorAll(".quiz-answer-card").forEach(card => {
        card.classList.remove("bg-success", "bg-danger");
    });

    init();
    updateCurrentQuestion();
}