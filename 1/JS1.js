//1
var str = "!!! приВЕдд, Я мЕДвед!!!".slice(4,22).toLowerCase();
var str2 = str.slice(0,1).toUpperCase() + str.slice(1, 6) + str.slice(7, 11) + str.slice(11,12).toUpperCase() + str.slice(12, 18);
console.log(str2);
//2
var a = true;
var b = true;
var c = true;
console.log(a || b) && (a || c) && (b || c);
//3
var Dino = [3, "динозавры", ["трицератопс", "стегозавр", 3627,5], 10];
console.log(Dino.length + " " + Dino[2][1] + " " + Dino[1]);
