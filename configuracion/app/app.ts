console.log("Hello World!!!");
// 1.
/**
 * Usando palabra clave var
 * var tiene alcance global donde se declare.
 */
function outerFunction()
{
    var value = 10;
    function innerFuction()
    {
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
function letExample(hasValue: boolean)
{
    if(hasValue)
    {
        let x = 14;
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
let numero: number = 42; // definimos var num
//definimos el tipo de input params
function example(name: string, age:number): number
{
    return 42;
}

// 4. Primitive Types
/**
 * number datatype contiene doble precision
 * 64 bit floating point value.
 */
function numberTypeDemo()
{
    let num : number = 42;
    let decimal = 42.0;
}

/**
 * string : Dato UTF-16. Se asigna con ' o ""
 */
function stringTypeDemo()
{
    let firstName : string = 'John';
    let templateHtml : string = "<h1>Titulo</h1>";
    // string con expresiones agregadas
    let news : string = "ESPN";
    let count : number = 10;
    let result : string = 'Top ' +count+ ' news feed from '+news;
    console.log(result);
}

/**
 * boolean
 */
function booleanTypeDemo()
{
    let hasvalues : boolean = false;
}

/**
 * arrays
 */
function arrayTypeDemo()
{
    let score : number[] = [10,20,30,40];
    console.log(score[0]);
}

function main()
{
    console.log(example("hi", 35));
    stringTypeDemo();
    arrayTypeDemo();
}

main();