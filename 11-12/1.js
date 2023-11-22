var words = ["программа", "кошка", "бегемот", "студент"];
var wordTG = words[Math.floor(Math.random() * words.length)];

var gLet = [];
for (var i = 0; i < wordTG.length; i++) {
    gLet.push("_");
}

var playHangman = function () {
    var attempts = 6;

    while (true) {
        var display = gLet.join(" ");
        alert("Текущее состояние: " + display + "\nОсталось попыток: " + attempts);
        var userGuess = prompt("Введите букву:").toLowerCase();
        if (userGuess === null) {
            break;
        }
        if (!/^[а-я]$/.test(userGuess)) {
            alert("Пожалуйста, введите одну букву.");
            continue;
        }
        var letterFound = false;
        for (var j = 0; j < wordTG.length; j++) {
            if (wordTG[j] === userGuess) {
                gLet[j] = userGuess;
                letterFound = true;
            }
        }
        if (!letterFound) {
            attempts--;
        }
        if (gLet.join("") === wordTG) {
            alert("Поздравляем! Вы угадали слово: " + wordTG);
            break;
        }
        if (attempts === 0) {
            alert("Извините, вы проиграли. Загаданное слово было: " + wordTG);
            break;
        }
    }
};
playHangman();
