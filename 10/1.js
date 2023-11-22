//1
var medalForScore = function (score) {
    if (score < 3) {
        return "Бронзовая";
    }
    if (score < 7) {
        return "Серебряная";
    }
    return "Золотая";
};
var userScore = prompt("Введите количество набранных очков:");
var result = medalForScore(parseInt(userScore, 10));

if (result) {
    alert("Ваша медаль: " + result);
} else {
    alert("Неправильный ввод");
};

//2
var areArraysSame = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
console.log(areArraysSame(arr1, arr2));
