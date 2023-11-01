//1
var array = [];
for (var i = 0; i < 10; i++) {
    var input = parseInt(prompt("Введите целое число", ""));
    array.push(input);
}
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            var temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
console.log("Отсортированный массив в порядке возрастания:", array);
//2
var inputText = prompt("Введите текст:", "");
var modifiedText = inputText.replace(/Вася/g, "Ваше_имя");
console.log(modifiedText);
//3
var originalText = "Я люблю программирование, особенно на JavaScript. Это увлекательно!";
var words = originalText.split(' ');
var encryptedWords = [];
for (let i = 3; i < words.length; i += 4) {
    encryptedWords.push(words[i]);
}
var encryptedText = encryptedWords.join(' ');
alert("Зашифрованный текст:\n" + encryptedText);
//4
var cord = [2, 4, 3, 2];
alert(Math.sqrt((Math.pow((cord[2] - cord[0]), 2) + Math.pow((cord[3] - cord[1]), 2))))
//5
var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
];
function getRandomPhrase() {
    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}
var userQuestion = prompt("Ваш вопрос:", "");
var advice = getRandomPhrase();
alert("Ваш вопрос: " + userQuestion + "\nответ: " + advice);
//6
var v = prompt("Введите текст для перевода", "");
var direction = prompt("Выберите направление перевода:\n1. Английский -> Русский\n2. Русский -> Английский", "");

v = v.toLowerCase();
var a = v.split(' ');
var result = [];
var word = [["ball", "мяч"], ["learn", "учить"], ["is", "это"], ["bottle", "бутылка"], ["cucumber", "кукумбер"], ["book", "книга"], ["i", "я"], ["dog", "собака"], ["cat", "кот"], ["cool", "крутой"]];

for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < word.length; j++) {
        if (direction === "1" && a[i] == word[j][0]) {
            result.push(word[j][1]);
            found = true;
            break;
        } else if (direction === "2" && a[i] == word[j][1]) {
            result.push(word[j][0]);
            found = true;
            break;
        }
    }
    if (!found) {
        result.push("?");
    }
}

var re = result.join(' ');
alert(re);
