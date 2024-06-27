const questions = {
    antiguidade: [
        {
            question: "Qual foi a civilização responsável pela construção das pirâmides de Gizé?",
            answers: ["Gregos", "Romanos", "Egípcios", "Fenícios"],
            correct: "Egípcios"
        },
        {
            question: "Quem foi o primeiro imperador de Roma?",
            answers: ["Júlio César", "Nero", "Augusto", "Trajano"],
            correct: "Augusto"
        }
        // Adicione mais perguntas aqui
    ],
    idadeMedia: [
        {
            question: "Qual foi a guerra que durou de 1337 a 1453 entre a Inglaterra e a França?",
            answers: ["Guerra das Rosas", "Guerra dos Cem Anos", "Guerra da Sucessão Espanhola", "Guerra Civil Inglesa"],
            correct: "Guerra dos Cem Anos"
        },
        {
            question: "Qual rei inglês assinou a Magna Carta em 1215?",
            answers: ["Ricardo Coração de Leão", "Henrique II", "João Sem Terra", "Eduardo I"],
            correct: "João Sem Terra"
        }
        // Adicione mais perguntas aqui
    ],
    // Adicione os outros períodos históricos aqui
};

function startQuiz(theme) {
    const quizContainer = document.getElementById('quizContainer');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const feedbackElement = document.getElementById('feedback');

    feedbackElement.textContent = '';

    const questionSet = questions[theme];
    const randomIndex = Math.floor(Math.random() * questionSet.length);
    const currentQuestion = questionSet[randomIndex];

    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, currentQuestion.correct, feedbackElement);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selected, correct, feedbackElement) {
    if (selected === correct) {
        feedbackElement.textContent = 'Parabéns! Você acertou!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Tente novamente!';
        feedbackElement.style.color = 'red';
    }
}
