/*a = 2;
var func = function() {
	var a = 4;
	console.log(a);
	var innerFunc = function() {
		var a = 9;
		console.log(a);
	};
	innerFunc();
	console.log(a);
};
func();
console.log(a);*/

///

/*var counter = (function(){
	var count = 0;
	return function(num){
		count = (num !== undefined) ? num : count;
		return count--;
	}
}());*/

/*var counter = function(num){
	counter.count = num !== undefined ? num : counter.count;
	return counter.count--;
};
counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());*/


///
/*throw*/

/*throw "danet"*/

/*var home = function(n){
	if (n !== 5) throw new Error(" n should be less than 10");
	return n+3232;
};
//home(3);

try {
	home(2);
} catch (e) {
	console.log("can't execute home: "+ e.message);
}
*/

///


/*var greet = function(){
		return "my name is " + this.name;
	}

var onePerson = {
	name: "dasha",
	greet: greet
};

var person = {
	name: "andrey",
	greet: greet
};

console.log(onePerson.greet.call(person))
console.log(person.greet.call(onePerson));
*/



// Функции, аргументы и манипуляции с их значениями
/*var danet = function(greeting){
		return greeting + "! my name is " + this.name;
	}

var onePerson = {
	name: "dasha",
	dada: danet
};

var person = {
	name: "andrey",
	nameFunc: danet
};


console.log(person.nameFunc.call(onePerson, "hi"));
console.log(onePerson.dada.call(person, "zdorova"));
console.log(onePerson.dada.apply(person, ["shalom"]));

var bound = danet.bind(person);

console.log(bound("azazaza "));*/

/*x=5
y='5'
console.log('3'!==3)
console.log(x==y)

friend = "Jack";
hiJack = (friend == "Jack") ? "Hi, Jack!" : "Hi"; 

console.log(hiJack)*/




/// SWITCH

a=2;
testCase(a);
function testCase(a) {
	//var a = 2;
    var x='';
       switch(a) {
        case 0:
            x='Ноль';
            break;
        case 1:
            x='Один';
            break;
        case 2:
            x='Два';
            break;    
        case 3:
            x='Три';
            break;
    }
    //return x;
    console.log(x)
}


/////////////
/*FOR*/
function testFactorial(a) {
    var x=1;
    // Тут нужно написать решение
    for (i=1; i <=a; i++){
        x=x*i;
}
    return x;
}

for (i = 1; i < 10; i = i + 1) {
  if (i == 5); {
    continue;
  }
  //console.log('i= ' + i);
}


/*do {
  исполняемый код
} while (переменная == проверочное значение);
*/
var x = 5;                //установка начального значения
do {                      //начало выполнения цикла
  //console.log(x);         //вывод данных в консоль
  x = x - 1;              //уменьшение значения на 1
} while (x >= 1);         //проверка условия




var person = {
	name: "Ana",
	size: 22,
	 get goda() {
	 	return this.size;
	 },
	 set goda(da)
	 {
	 	this.size = da < 0 ? "при меньше нуля выводит эту надпись как ИСТУНУ" : da > 122 ? 122: da;
	 }
	};


/*person.goda = 199;
console.log(person.size);
person.goda = -2;
console.log(person.size);
person.goda = 34;
console.log(person.size);*/

console.log(Object.getOwnPropertyDescriptor(person, "size"));
console.log(Object.getOwnPropertyDescriptor(person, "name"));


Object.defineProperty(person, "gender", {
	value: "male"
	// writable: false,
	// enumerable: false,
	// configurable: false
});
console.log(person.gender);


/////////////////////
/*function*/

/*function printText() {                  //Определение функции
text ="Hello World";        //Тело функции - вывод текста в документ
};

printText();
console.log(text);*/





/*
function Function(a) { document.write(a); };
//function myFunction {document.write("Hello world!"); };
//var myFunction = (function() {document.write(a)}; );
var myFunction = function(a) {document.write(a); } ;
//function %myFunction() {document.write("Hello World!"); };
function myFunction() { };
*/


/*return*/


/*z=0;
function divideOneTo(z) {
    if (z != 0) {
        return 10/z;

    } else {
        return "А на ноль делить нельзя!";
    }
}
console.log(divideOneTo(z));*/



/* Рекурсивная фнкция (вызывает саму себя по имени)*/
/*

x=7;
function factorial(x) {        //Объявление функции
    if (x <= 1) return 1;        //Проверка условия окончания расчета
    return x + factorial(x-1);   //Вызов этой же функции с уменьшенным на 1 аргументом
}
console.log(factorial(x));
*/


/*function my_function(n) {
    // Тут нужно написать решение
    if (n===1)
        return 0;
} else {
    my_function(n-1)+" ";
    return (n+" ");
}*/


/*n=7;
function my_function(n) {
	
    // Тут нужно написать решение
    if(n <= 1){
        return 1;
    } else{
        return  my_function(n-1) + " " + n;
    }
};

console.log(my_function(n));*/

var PERS = {
	INFO: function(name, lvl, gender) {
		this.name = name; 
		this.lvl = lvl;
		this.gender = gender;
		return this; 
	},
	hello: function() {
		console.log("Професи " + this.age, this.name, this.gender);
	}
};

//var onePers, twoPers, threePers, treeSkills;

var treeSkills = Object.create(PERS);
treeSkills.INFO = function(name, lvl, gender, skill){
	PERS.INFO.apply(this, arguments);
	this.skill = skill || [];
	return this;
	};

treeSkills.skills = function(){
	console.log("what the fuck is this");
}

var ability = Object.create(treeSkills).INFO("EE", 52, "famele", ["zalov", "PR", "buff"]);
/*onePers = Object.create(PERS).INFO("ES", 58, "famele");
twoPers = Object.create(PERS).INFO("PP", 52, "famele");
threePers = Object.create(PERS).INFO("PAL", 56, "male");*/

console.log(ability.skill);
ability.skills();




