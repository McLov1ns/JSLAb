//1
var Dino = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];
console.log(Dino[Dino.length -1]);

//2
var animals = ["Кот", "Пес", "Ежик"];
var temp = animals[0];
animals[0] = animals[animals.length - 1];
animals[animals.length - 1] = temp;
console.log(animals)

//3
var africanAnimals = ["Слон", "Лев", "Жираф", "Зебра", "Гепард"];
africanAnimals.unshift("Александр");
var last = africanAnimals.pop();
var first = africanAnimals.shift();
africanAnimals.push(first);
console.log(africanAnimals);

//4
var хищники = ["Лев", "Тигр", "Волк"];
var травоядные = ["Зебра", "Слон", "Кролик"];
var all = хищники.concat(травоядные);
console.log(all);//после склейки
var temp = all[0];
all[0] = all[all.length - 1];
all[all.length - 1] = temp;
console.log(all); //после замены
//первоначальные массивы
console.log("Хищники: " + хищники);
console.log("Травоядные: " + травоядные);

//5
var Name = ["Демин", "Александр", "Сергеевич"];
Name.unshift("Господин");
console.log(Name);
Name.pop();
Name.pop();
var str = Name.join("@");
console.log(str);
