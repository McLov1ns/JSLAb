Найдите ошибки в тексте программы, выводящей двумерный массив.
for (let i = 0; i < 4; i++) {
for (let j = 0; j < 4; j++) {
m1[i][j]=Math.floor(Math.random() * 5);
document.write(m1[i][j],'');
document.write ( "<br>");
    }
  }
}
нет объявления переменной m1
let m1 = [];
и инициализации подмассива
let m1 = [];
for (let i = 0; i < 4; i++) {
  m1[i] = []; // Инициализация подмассива
  for (let j = 0; j < 4; j++) {
    m1[i][j] = Math.floor(Math.random() * 5);
    document.write(m1[i][j], ' ');
  }
  document.write("<br>");
}
