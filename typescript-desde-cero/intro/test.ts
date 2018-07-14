
function newFunction() {
    console.log('Hola mundo TypeScript');
    /**
     * Para la compilacion automatica de archivos typescript, escribir el comando
     * tsc --watch "nombre del archivo typescrip"
     */
    //declaramos una variable fuertemente tipadas en ts
    let s_nombre: string = 'Luis';
    let n_usersConectados: number = 50;
    let s_frase = `Mi frase
                segunda linea
                tercera linea
                cuarta linea
                quinta linea
                sexta linea`;
    console.log(s_frase);
}

newFunction();
