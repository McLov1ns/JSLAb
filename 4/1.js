//1
var WayVKI = [];
WayVKI.push("ст. Черепаново");
WayVKI.push("Электричка Чер-НСК");
WayVKI.push("Станция Бердск");
WayVKI.push("Остановка пл. Горького");
WayVKI.push("Маршрутка 27");
WayVKI.push("остановка НииСистем");
WayVKI.push("500 метров на запад");
WayVKI.push("ВКИ");
var Ret = [];
for (let i = WayVKI.length-1; i>=0; i--)
{
	if (WayVKI[i] == "500 метров на запад")
	{
		Ret.push("500 метров на восток");
	}
	else
	{
		Ret.push(WayVKI[i]);
	}
}
//2
var WayVKI = [];
WayVKI.push("ст. Черепаново");
WayVKI.push("Электричка Чер-НСК");
WayVKI.push("Станция Бердск");
WayVKI.push("Остановка пл. Горького");
WayVKI.push("Маршрутка 27");
WayVKI.push("остановка НииСистем");
WayVKI.push("500 метров на запад");
WayVKI.push("ВКИ");

var G = WayVKI.slice(0, WayVKI.length - 2);
G.push("2000 метров на восток");
G.push("Гигант");

var Ret = G.slice().reverse().map(function (element) {
    return element === "2000 метров на восток" ? "2000 метров на запад" : element;
});

console.log("Прямой маршрут:");
console.log(G);

console.log("\nОбратный маршрут:");
console.log(Ret);
//3
var WayVKI = [];
WayVKI.push("ст. Черепаново");
WayVKI.push("Электричка Чер-НСК");
WayVKI.push("Станция Бердск");
WayVKI.push("Остановка пл. Горького");
WayVKI.push("Маршрутка 27");
WayVKI.push("остановка НииСистем");
WayVKI.push("500 метров на запад");
WayVKI.push("ВКИ");
var Ret = [];
for (let i = WayVKI.length-1; i>=0; i--)
{
	if (WayVKI[i] == "2000 метров на восток")
	{
		Ret.push("2000 метров на запад");
	}
	else
	{
		Ret.push(WayVKI[i]);
	}
}
Ret.splice(2,0,"Перейти дорогу");
console.log(Ret);
//4
var N = parseInt(prompt("Введите границу интервала", ""));
console.log("Простые числа в интервале [1, " + N + "]:");
for (var i = 2; i <= N; i++) {
    var es = true;
    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            es = false;
            break;
        }
    }
    if (es) {
        console.log(i);
    }
}
