"use strict";
console.log("Hello World!!!");
// 1.
/**
 * Usando palabra clave var
 * var tiene alcance global donde se declare.
 */
function outerFunction() {
    var value = 10;
    function innerFuction() {
        console.log(value);
    }
    return innerFuction();
}
var func = outerFunction();
func;
//2.
/**
 * Usando palabra clave let & const
 * A diferencia de var. let & const permite
 * aplicar un alcance de la variable solo en el
 * bloque que ha sido declarado.
 */
function letExample(hasValue) {
    if (hasValue) {
        var x = 14;
        console.log(x);
    }
    console.log("");
}
letExample(true);
//3.
/**
 * Type Annotation viene despues del identificador
 * variable. Types puede ser tipo primitivo,
 * array o tipos complejos usando clases e
 * interfaces
 */
var numero = 42; // definimos var num
//definimos el tipo de input params
function example(name, age) {
    return 42;
}
// 4. Primitive Types
/**
 * number datatype contiene doble precision
 * 64 bit floating point value.
 */
function numberTypeDemo() {
    var num = 42;
    var decimal = 42.0;
}
/**
 * string : Dato UTF-16. Se asigna con ' o ""
 */
function stringTypeDemo() {
    var firstName = 'John';
    var templateHtml = "<h1>Titulo</h1>";
    // string con expresiones agregadas
    var news = "ESPN";
    var count = 10;
    var result = 'Top ' + count + ' news feed from ' + news;
    console.log(result);
}
/**
 * boolean
 */
function booleanTypeDemo() {
    var hasvalues = false;
}
/**
 * arrays
 */
function arrayTypeDemo() {
    var score = [10, 20, 30, 40];
    console.log(score[0]);
}
function tuplesDemo() {
    var details;
    details = ['John', 42];
    console.log('Using tuples: ' + details);
}
function voidFunctionDemo(num) {
    console.log('using void function: ' + num);
}
/*
* null and undefined pueden ase asignados a cualquier
* variable.
*/
function nullAndUndefinedDemo() {
    var value = null;
    value = 42;
}
function unionTypesDemo() {
    // Union Type permite definir una variable con
    // multiples tipos
    var data;
    data = 10;
    data = "John";
    console.log("using Union Types " + data);
}
/**
 * Definicion de Clases
 */
var News = /** @class */ (function () {
    function News() {
        // members
        this.channelNumber = 0;
        this.newsTitle = "";
        this.author = "ESPN";
    }
    News.prototype.toString = function () {
        return this.channelNumber + ":\n        " + this.newsTitle + " was written by\n        " + this.author;
    };
    return News;
}());
function createNewsObject() {
    var espn = new News();
    espn.channelNumber = 1;
    espn.newsTitle = 'NFL Today';
    console.log(espn.toString());
}
function main() {
    console.log(example("hi", 35));
    stringTypeDemo();
    arrayTypeDemo();
    tuplesDemo();
    voidFunctionDemo(6);
    unionTypesDemo();
    createNewsObject();
}
main();
