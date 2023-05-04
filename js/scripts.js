function resultado() {
    var correctAnswers = ["b", "b", "c", "b", "c"];
    var selectedAnswers = [];

    selectedAnswers.push(document.querySelector('input[name="q1"]:checked').value);
    selectedAnswers.push(document.querySelector('input[name="q2"]:checked').value);
    selectedAnswers.push(document.querySelector('input[name="q3"]:checked').value);
    selectedAnswers.push(document.querySelector('input[name="q4"]:checked').value);
    selectedAnswers.push(document.querySelector('input[name="q5"]:checked').value);

    var correctasCount = 0;
    var incorretasCount = 0;

    for (var i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === selectedAnswers[i]) {
            correctasCount++;
        } else {
            incorretasCount++;
        }
    }

    var result = "Você acertou " + correctasCount + " perguntas e errou " + incorretasCount + " perguntas. ";
    var porcentagem = "Seu percentual de acerto foi de " + ((correctasCount / correctAnswers.length) * 100) + "%.";
    var alertBox = document.createElement("div");
    alertBox.setAttribute("id", "alertBox");
    alertBox.innerHTML = result + porcentagem;

    document.body.appendChild(alertBox);
}
