// var prg = prompt("Введіть текст:");
// function code (prg){
// 	prg = prg.split("");
// 	var a = prg.length;
// 	for(let i = 0; i<a; i++){
// 		switch(prg[i]){
// 			case "а": prg[i] = "11000000"; break;
// 			case "б": prg[i] = "11000001"; break;
// 			case "в": prg[i] = "11000010"; break;
// 			case "г": prg[i] = "11000011"; break;
// 			case "д": prg[i] = "11000100"; break;
// 			case "е": prg[i] = "11000101"; break;
// 			case "ж": prg[i] = "11000110"; break;
// 			case "з": prg[i] = "11000111"; break;
// 			case "и": prg[i] = "11001000"; break;
// 			case "й": prg[i] = "11001001"; break;
// 			case "к": prg[i] = "11001010"; break;
// 			case "л": prg[i] = "11001011"; break;
// 			case "м": prg[i] = "11001100"; break;
// 			case "н": prg[i] = "11001101"; break;
// 			case "о": prg[i] = "11001110"; break;
// 			case "п": prg[i] = "11001111"; break;
// 			case "р": prg[i] = "11010000"; break;
// 			case "с": prg[i] = "11010001"; break;
// 			case "т": prg[i] = "11010010"; break;
// 			case "у": prg[i] = "11010011"; break;
// 			case "ф": prg[i] = "11010100"; break;
// 			case "х": prg[i] = "11010101"; break;
// 			case "ц": prg[i] = "11010110"; break;
// 			case "ч": prg[i] = "11010111"; break;
// 			case "ш": prg[i] = "11011000"; break;
// 			case "щ": prg[i] = "11011001"; break;
// 			case "ъ": prg[i] = "11011010"; break;
// 			case "ы": prg[i] = "11011011"; break;
// 			case "ь": prg[i] = "11011100"; break;
// 			case "э": prg[i] = "11011101"; break;
// 			case "ю": prg[i] = "11011101"; break;
// 			case "я": prg[i] = "11011111"; break;
// 			default: prg[i] = " "; break;
// 		}
// 	}
// 	prg = prg.join("");
// 	return prg;
// }
// document.write(code(prg));

// -----------------------------------------------------------------

// var c = 0;
// for(let i = 0; i<3; i++){
// 	var a = Math.floor(Math.random()*11);
// 	var b = Math.floor(Math.random()*11);
// 	let numbers = prompt("Скільки буде " + a + " * " + b + "?");
// 	let reply = (numbers == a*b)? 
// 		() => alert("Правильно!") + c++: 
// 		() => alert("Не правильно! " + a + " * " + b + " = " + (a*b));
// 	reply();
// }
// alert("Ти відповів правильно " + c + " раз)");

// -----------------------------------------------------------------

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
// 	"Вы согласны?",
//   	() => alert("Вы согласились."),
//   	() => alert("Вы отменили выполнение.")
// );

// -----------------------------------------------------------------

// function camelize(){
// 	var str = "background-color";
// 	str = str.split("-");
// 	str = str.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join("");  
// 	return str;
// }
// console.log(camelize());

// -----------------------------------------------------------------

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function filterRange (arr, a, b){
// 	return arr.filter(arr => arr >= a && arr <= b);
// }

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// -----------------------------------------------------------------

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// function filterRangeInPlace(arr, a, b){
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] >= a && arr[i] <= b){

// 		}
// 		else{
// 			arr.splice(i, 1);
// 			i--
// 		}
// 	}
// }

// alert( arr ); // [3, 1]

// -----------------------------------------------------------------

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10

// -----------------------------------------------------------------

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(arr){
// 	var arrc = arr.concat();
// 	return arrc.sort();
// }

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// -----------------------------------------------------------------

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// -----------------------------------------------------------------

// var number = 0;

// function minus(){
// 	number--;
// 	document.getElementById("number").innerHTML = number;
// 	if(number == -10){
// 		console.log("number = -10");
// 	}
// 	else{
// 		console.log("number = " + number);
// 	}
// }
// function plus(){
// 	number++;
// 	document.getElementById("number").innerHTML = number;
// 	if(number == 10){
// 		console.log("number = 10");
// 	}
// 	else{
// 		console.log("number = " + number);
// 	}
// }
// function count(){
// 	alert(number);
// }

// -----------------------------------------------------------------

// var word = prompt("Введіть слово: ");
// var vowels = new Array ('а', 'е', 'и', 'і', 'о', 'у', 'А', 'Е', 'И', 'І', 'О', 'У');
// word = word.split("");
// var isvowel = false;
// alert(word.length + " букв в коді)");
// for (let i = 0; i <= vowels.length; i++){
// 	if(word[0] == vowels[i]){
// 		alert("Перша буква голосна!");
// 		i = vowels.length + 1;
// 		isvowel = true; 
// 	}
// }
// if(isvowel == false){
// 	alert("Перша буква приголосна!");
// }

// SINGLETON - це об'єкт, який є в системі в одному екземплярі + до нього є якась глобальна точка доступу.
    // -----------------------------------------------------------------

    // var counterModule = (function () {

    //     var count = 0, instance;
        
    //     var getCounter = function () {
    //         return count;
    //     };

    //     var increaseCounter = function () {
    //         return count++;
    //     };

    //     var createInstance = function () {
    //         return {
    //             getCounter: getCounter,
    //             increaseCounter: increaseCounter
    //         }
    //     }

    //     return {
    //         getInstance: function() {
    //             return instance || (instance = createInstance());
    //         }
    //     }

    // }());

    // -----------------------------------------------------------------

    // class Counter {

    // 	constructor() {
    // 		if (typeof Counter.instance === 'object') {
    // 			return Counter.instance;
    //         }
    //         this.count = 0;
    // 		// this.count = "";
    // 		Counter.instance = this;
    // 		return this;
    // 	}
    
    // 	getCount() {
    // 		return this.count;
    // 	}
    
    // 	increaseCount() {
    //         return this.count ++;
    // 		// return this.count += "ha";
    // 	}
    // }

    // const myCount1 = new Counter();
    // const myCount2 = new Counter();

    // myCount1.increaseCount();
    // myCount1.increaseCount();
    // myCount2.increaseCount();
    // myCount2.increaseCount();

    // console.log(myCount1.getCount());
    // console.log(myCount2.getCount());

// // PROXY - це структурний паттерн, який замість реальних об'єктів пропонує спеціальні 
// об'єкти замінителі, ці об'єкти ловляви виклик до оригіналу і дозволяє зробити щось перед або 
// після звернення до оригінального об'єкта.
    // -----------------------------------------------------------------
    // class SecuritySystem {

    //     constructor(door) {
    //         this.door = door;
    //     }

    //     open(password) {
    //         if(this.authenticate(password)){
    //             this.door.open();
    //         }
    //         else{
    //             console.log('Access denied!');
    //         }
    //     }

    //     authenticate(password) {
    //         return password === "Nazar";
    //     }

    //     close() {
    //         this.door.close();
    //     }

    // }

    // class Car {

    //     open() {
    //         console.log("Opening car door");
    //     }

    //     close() {
    //         console.log("Closing the car door");
    //     }

    // }

    // const door = new SecuritySystem(new Car());

    // door.open("Hello");
    // door.open("Nazar");

    // door.close();

// FACTORY - це створення класу, який буде нам допомагати створювати об'єкт на основі якихось вхідних данних.
    // -----------------------------------------------------------------
    // class BMW {
    //     constructor(model, price, maxSpeed){
    //         this.model = model;
    //         this.price = price;
    //         this.maxSpeed = maxSpeed;
    //     }
    // };
    // class BMWFactory {
    //     create(type){
    //         if(type === "X5") return new BMW(type, 108000, 300); 
    //         if(type === "X6") return new BMW(type, 111000, 320); 
    //     }
    // };

    // const factory = new BMWFactory();

    // const x5 = factory.create("X5");
    // const x6 = factory.create("X6");

    // document.write(`
    //     Model: BMW ${x5.model}
    //     <br />
    //     Price: ${x5.price}$
    //     <br />
    //     MaxSpeed: ${x5.maxSpeed}
    // `);
    // document.write(`
    //     <br />
    //     <br />
    //     Model: BMW ${x6.model}
    //     <br />
    //     Price: ${x6.price}$
    //     <br />
    //     MaxSpeed: ${x6.maxSpeed}
    // `);

// ADAPTER - він обертає не сумісний з чимось об'єкт та робить його сумісним не змінюючи початковий код об'єкта.
    // -----------------------------------------------------------------
    // class Engine2 {
    //     simpleInterface() {
    //         console.log('Engine 2! - tr-tr-tr');
    //     }
    // };

    // class EngineV8 {
    //     complecatedInterface() {
    //         console.log('Engine V8! - wroom wroom!');
    //     }
    // };

    // class EngineV8Adapter {
    //     constructor(engine){
    //         this.engine = engine;
    //     }

    //     simpleInterface(){
    //         this.engine.complecatedInterface();
    //     }
    // };

    // class Auto {
    //     startEngine(engine) {
    //         engine.simpleInterface();
    //     }
    // };

    // const myCar = new Auto();
    // const oldEngine = new Engine2();

    // myCar.startEngine(oldEngine);

    // const myCar2 = new Auto();
    // const engineAdapter = new EngineV8Adapter(new EngineV8());

    // myCar2.startEngine(engineAdapter);

    // -----------------------------------------------------------------

    // class Soud1 {
    //     port1() {
    //         console.log('tra-tra-tra');
    //     }
    // };

    // class Soud2 {
    //     port2() {
    //         console.log('bum-bum-bum');
    //     }
    // };

    // class Soud2Adapter {
    //     constructor(soud) {
    //         this.soud = soud;
    //     }
    //     port1(soud) {
    //         this.soud.port2();
    //     }
    // };

    // class Souds {
    //     startSoud(soud) {
    //         soud.port1();
    //     }
    // };

    // const mySouds = new Souds();
    // const oldSoud = new Soud1();

    // mySouds.startSoud(oldSoud);

    // const mySouds1 = new Souds();
    // const newSoud = new Soud2Adapter(new Soud2());

    // mySouds1.startSoud(newSoud);

// FLYWEIGHT - він дозволяє економити ресурси розділяючи спільне стан  об'єктів між собою,
// замість збереження одинакових данних в кожному об'єкті.
    // -----------------------------------------------------------------
    // class Auto {
    //     constructor(model) {
    //         this.model = model;
    //     }
    // };

    // class AutoFactory {
    //     constructor(name) {
    //         this.models = {};
    //     }

    //     create(name) {
    //         let model = this.models[name];
    //         if(model) return model;
    //         this.models[name] = new Auto(name);
    //         return this.models[name];
    //     }

    //     getModels() {
    //         console.log(this.models);
    //     }
    // };

    // const factory = new AutoFactory();

    // const bmw = factory.create("BMW");
    // const audi = factory.create("Audi");
    // const tesla = factory.create("Tesla");
    // const blackTesla = factory.create("Tesla");

    // console.log(factory.getModels());