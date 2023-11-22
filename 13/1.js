//1
var m1 = [];
for (let i = 0; i < 4; i++) {
    m1[i] = [];
    for (let j = 0; j < 4; j++) {
        m1[i][j] = Math.floor(Math.random() * 5);
    }
}
var m2 = [];
for (let i = 0; i < 4; i++) {
    m2[i] = [];
    for (let j = 0; j < 4; j++) {
        m2[i][j] = Math.floor(Math.random() * 5);
    }
}
console.log("Первый массив:");
console.log(m1);

console.log("Второй массив:");
console.log(m2);

var result = [];
for (let i = 0; i < 4; i++) {
    result[i] = [];
    for (let j = 0; j < 4; j++) {
        result[i][j] = m1[i][j] + m2[i][j];
    }
}

console.log("Результат сложения массивов:");
console.log(result);
//2
function generateMatrix(rows, columns) {
    var matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }

    return matrix;
}
var a = prompt("ширина");
var b = prompt("Высота");
var myMatrix = generateMatrix(a, b);
console.log(myMatrix);
//3
function generateSquareMatrix(size) {
    var matrix;

    do {
        matrix = [];
        for (let i = 0; i < size; i++) {
            matrix[i] = [];
            for (let j = 0; j < size; j++) {
                matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
        var mDiagonalSum = 0;
        var aDiagonalSum = 0;
        for (let i = 0; i < size; i++) {
            mDiagonalSum += matrix[i][i];
            aDiagonalSum += matrix[i][size - 1 - i];
        }
    } while (mDiagonalSum !== aDiagonalSum);
    console.log("Сгенерированная матрица:");
    for (let i = 0; i < size; i++) {
        console.log(matrix[i]);
    }
    console.log("Сумма элементов обеих диагоналей равна: " + mDiagonalSum);
}
generateSquareMatrix(5);
//4
var x = parseFloat(prompt("Введите координату точки x:"));
var y = parseFloat(prompt("Введите координату точки y:"));
var radius = parseFloat(prompt("Введите радиус окружности:"));
var distanceSquared = x**2 + y**2;
var isInside = distanceSquared <= radius**2;
if (isInside) {
    console.log("Точка находится внутри окружности.");
} else {
    console.log("Точка находится вне окружности.");
}
