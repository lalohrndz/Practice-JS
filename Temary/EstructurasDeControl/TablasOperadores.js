/* 
.- Tablas de los operadores [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators]

- A continuación se muestran las funciones para mostrar en la consola las tablas de los distintos operadores
- existentes en la documentación de MDN. Estas funciones pueden ser llamadas en el archivo principal de
- fundamentos.html

*/

function OperadoresDeAsignasion() {
    const asignacion = {
        Nombre: "Asignacion",
        Operador_Abreviado:"x = y",
        Significado:"x = y",
    }

    const asignacionDeAdicion = {
        Nombre:"Asignacion de adicion",
        Operador_Abreviado:"x += y",
        Significado:"x = x + y",
    }

    const asignacionDeResta = {
        Nombre:"Asignacion de resta",
        Operador_Abreviado:"x -= y",
        Significado:"x = x - y",
    }

    const asignacionDeMultiplicacion = {
        Nombre:"Asignacion de multiplicacion",
        Operador_Abreviado:"x *= y",
        Significado:"x = x * y",
    }

    const asignacionDeDivision = {
        Nombre:"Asignacion de division",
        Operador_Abreviado:"x /= y",
        Significado:"x = x / y",
    }

    const asignacionDeResiduo = {
        Nombre:"Asignacion de residuo",
        Operador_Abreviado:"x %= y",
        Significado:"x = x % y",
    }

    const asignacionDeExponenciacion = {
        Nombre:"Asignacion de exponenciacion",
        Operador_Abreviado:"x **= y",
        Significado:"x = x ** y",
    }

    const asignacionDeDesplazamientoIzquierda = {
        Nombre:"Asignacion de desplazamiento a la izquierda",
        Operador_Abreviado:"x <<= y",
        Significado:"x = x << y",
    }

    const asignacionDeDesplazamientoDerecha = {
        Nombre:"Asignacion de desplazamiento a la derecha",
        Operador_Abreviado:"x >>= y",
        Significado:"x = x >> y",
    }

    const asignacionDeDesplazamientoDerechaSinSigno = {
        Nombre:"Asignacion de desplazamiento a la derecha sin signo",
        Operador_Abreviado:"x >>>= y",
        Significado:"x = x >>> y",
    }

    const asignacionAndBitABit = {
        Nombre:"Asignacion And Bit a Bit",
        Operador_Abreviado:"x &= y",
        Significado:"x = x & y",
    }

    const asignacionXorBitABit = {
        Nombre:"Asignacion XOR Bit a Bit",
        Operador_Abreviado:"x ^= y",
        Significado:"x = x ^ y",
    }

    const asignacionOrBitABit = {
        Nombre:"Asignacion And Bit a Bit",
        Operador_Abreviado:"x |= y",
        Significado:"x = x | y",
    }

    const asignacionAndLogico = {
        Nombre:"Asignacion And logico",
        Operador_Abreviado:"x &&= y",
        Significado:"x && (x = y)",
    }

    const asignacionOrLogico = {
        Nombre:"Asignacion Or logico",
        Operador_Abreviado:"x ||= y",
        Significado:"x || (x = y)",
    }

    const asignacionDeAnulacionLogica = {
        Nombre:"Asignacion de anulacion logica",
        Operador_Abreviado:"x ??= y",
        Significado:"x ?? (x = y)",
    }

    console.log(
    "%cOperaciones de asignacion",
    "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.table([asignacion,
        asignacionDeAdicion,
        asignacionDeResta,
        asignacionDeMultiplicacion,
        asignacionDeDivision,
        asignacionDeResiduo,
        asignacionDeExponenciacion,
        asignacionDeDesplazamientoIzquierda,
        asignacionDeDesplazamientoDerecha,
        asignacionDeDesplazamientoDerechaSinSigno,
        asignacionAndBitABit,
        asignacionXorBitABit,
        asignacionOrBitABit,
        asignacionAndLogico,
        asignacionOrLogico,
        asignacionDeAnulacionLogica
    ])
    console.info("Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion")
}

function OperadoresDeComparacion(){
    const igual = {
        Operador:"Igual ( == )",
        Descripcion:"Devuelve true si los operandos son iguales.",
        VerEjemplos:"EjemplosQueRegresanTrue.igual()",
    }

    const noEsIgual = {
        Operador:"No es igual (!=)",
        Descripcion:"Devuelve true si los operandos no son iguales.",
        VerEjemplos:"EjemplosQueRegresanTrue.noEsIgual()"
    }

    const igualEstricto = {
        Operador:"Estrictamente igual (===)",
        Descripcion:"Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS.",
        VerEjemplos:"EjemplosQueRegresanTrue.igualEstricto()"
    }

    const desigualdadEstricta = {
        Operador:"Desigualdad estricta (!==)",
        Descripcion:"Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.",
        VerEjemplos:"EjemplosQueRegresanTrue.desigualdadEstricta()"
    }

    const mayorQue = {
        Operador:"Mayor que (>)",
        Descripcion:"Devuelve true si el operando izquierdo es mayor que el operando derecho.",
        VerEjemplos:"EjemplosQueRegresanTrue.mayorQue()"
    }

    const mayorOIgual = {
        Operador:"Mayor o igual que (>=)",
        Descripcion:"Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.",
        VerEjemplos:"EjemplosQueRegresanTrue.mayorOIgual()"
    }

    const menorQue = {
        Operador:"Menor que (<)",
        Descripcion:"Devuelve true si el operando izquierdo es menor que el operando derecho.",
        VerEjemplos:"EjemplosQueRegresanTrue.menorQue()"
    }

    const menorOIgual = {
        Operador:"Menor o igual (<=)",
        Descripcion:"Devuelve true si el operando izquierdo es menor o igual que el operando derecho.",
        VerEjemplos:"EjemplosQueRegresanTrue.menorOIgual()"
    }

    console.log(
        "%cOperaciones de comparacion",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        )

    console.table([igual,noEsIgual,igualEstricto,desigualdadEstricta,mayorQue,mayorOIgual,menorQue,menorOIgual])
    console.info("Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos.")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_de_comparaci%C3%B3n")
}

/*
- Ejemplos pertenecientes a la funcion OperadoresDeComparacion
*/

const EjemplosQueRegresanTrue = {
    igual:function(){
        console.table([ " 3 == var1 ",' "3" == var1 '," 3 == '3' "])
    },

    noEsIgual:function(){
        console.table([" var1 != 4 ",' var2 != "3" '])
    },

    igualEstricto:function(){
        console.table([" 3 === var1 "])
    },

    desigualdadEstricta:function(){
        console.table([' var1 !== "3" '," 3 !== '3' "])
    },
    
    mayorQue:function(){
        console.table([" var2 > var1 ",' "12" > 2 '])
    },

    mayorOIgual:function(){
        console.table([" var2 >= var1 ",' var1 >= 3 '])
    },

    menorQue:function(){
        console.table([" var1 < var2 ",' "2" < 12 '])
    },

    mayorOIgual:function(){
        console.table([" var1 <= var2 ",' var2 <= 5 '])
    },

}

function OperadoresAritmeticos(){

    const residuo = {
        Operador:"Residuo (%)",
        Descripcion:"Operador binario. Devuelve el resto entero de dividir los dos operandos.",
        Ejemplo:"12 % 5 devuelve 2."
    }

    const incremento = {
        Operador:"Incremento (++)",
        Descripcion:"	Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.",
        Ejemplo:"Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y , solo entonces, establece x en 4."
    }

    const decremento = {
        Operador:"Decremento (--)",
        Descripcion:"Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.",
        Ejemplo:"Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2."
    }

    const negacionUnaria = {
        Operador:"Negación unaria (-)",
        Descripcion:"Operador unario. Devuelve la negación de su operando.",
        Ejemplo:"Si x es 3, entonces -x devuelve -3."
    }

    const positivoUnario = {
        Operador:"Positivo unario (+)",
        Descripcion:"Operador unario. Intenta convertir el operando en un número, si aún no lo es",
        Ejemplo:'+"3" devuelve 3. +true devuelve 1.'
    }

    const exponenciacionAritmetico = {
        Operador:"Operador de exponenciación (**)",
        Descripcion:"Calcula la base a la potencia de exponente, es decir, base exponente",
        Ejemplo:"2 ** 3 returns 8. 10 ** -1 returns 0.1."
    }

    console.log(
        "%cOperadores aritmeticos",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        )

    console.table([residuo,incremento,decremento,negacionUnaria,positivoUnario,exponenciacionAritmetico])
    console.info("Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma (+), resta (-), multiplicación (*) y división (/).")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos")
}

function OperadoresBitABit(){

    const andBitABit = {
        Operador:"AND a nivel de bits",
        Uso:"a & b",
        Descripcion:"Devuelve un uno en cada posición del bit para los que los bits correspondientes de ambos operandos son unos.",
    }

    const OrBitABit = {
        Operador:"OR a nivel de bits",
        Uso:"a | b",
        Descripcion:"Devuelve un cero en cada posición de bit para el cual los bits correspondientes de ambos operandos son ceros."
    }

    const XorBitABit = {
        Operador:"XOR a nivel de bits",
        Uso:"a ^ b",
        Descripcion:"Devuelve un cero en cada posición de bit para la que los bits correspondientes son iguales. [Devuelve uno en cada posición de bit para la que los bits correspondientes son diferentes].",
    }

    const NotBitABit = {
        Operador:"NOT a nivel de bits",
        Uso:"~ a",
        Descripcion:"Invierte los bits de su operando."
    }

    const DesplazamientoAIzquierda = {
        Operador:"Desplazamiento a la izquierda",
        Uso:"a << b",
        Descripcion:"Desplaza a en representación binaria b bits hacia la izquierda, desplazándose en ceros desde la derecha."
    }

    const DesplazamientoADerecha = {
        Operador:"Desplazamiento a la derecha de propagación de signo",
        Uso:"a >> b",
        Descripcion:"Desplaza a en representación binaria b bits a la derecha, descartando los bits desplazados."
    }

    const DesplazamientoADerechaRelleno = {
        Operador:"Desplazamiento a la derecha de relleno cero",
        Uso:"a >>> b",
        Descripcion:"Desplaza a en representación binaria b bits hacia la derecha, descartando los bits desplazados y desplazándose en ceros desde la izquierda."
    }

    console.log(
        "%cOperadores Bit a Bit",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        )
    console.table([andBitABit,OrBitABit,XorBitABit,NotBitABit,DesplazamientoAIzquierda,DesplazamientoADerecha,DesplazamientoADerechaRelleno])
    console.info("Un operador bit a bit trata a sus operandos como un conjunto de 32 bits (ceros y unos), en lugar de números decimales, hexadecimales u octales. Por ejemplo, el número decimal nueve tiene una representación binaria de 1001. Los operadores bit a bit realizan sus operaciones en tales representaciones binarias, pero devuelven valores numéricos estándar de JavaScript.")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_bit_a_bit")
}

function OperadoresDeDesplazamientoDeBits(){
    const DesplazamientoALaIzquierda = {
        Operador:"Desplazamiento a la izquierda (<<)",
        Descripcion:"Este operador desplaza el primer operando el número especificado de bits a la izquierda. Los bits desplazados en exceso hacia la izquierda se descartan. Los bits cero se desplazan desde la derecha.",
        Ejemplo:"9<<2 produce 36, porque 1001 desplazado 2 bits a la izquierda se convierte en 100100, que es 36."
    }

    const DesplazamientoADerechaConPropagacionDeSigno = {
        Operador:"Desplazamiento a la derecha de propagación de signo (>>)",
        Descripcion:"Este operador desplaza el primer operando el número especificado de bits a la derecha. Los bits desplazados en exceso hacia la derecha se descartan. Las copias del bit más a la izquierda se desplazan desde la izquierda.",
        Ejemplo:"9>>2 produce 2, porque 1001 desplazado 2 bits a la derecha se convierte en 10, que es 2. Del mismo modo, -9>>2 produce -3, porque el signo se conserva."
    }

    const DesplazamientoALaDerechaDeRellenoCero = {
        Operador:"Desplazamiento a la derecha de relleno cero (>>>)",
        Descripcion:"	Este operador desplaza el primer operando el número especificado de bits a la derecha. Los bits desplazados en exceso hacia la derecha se descartan. Los bits cero se desplazan desde la izquierda.",
        Ejemplo:"19>>>2 produce 4, porque 10011 desplazado 2 bits a la derecha se convierte en 100, que es 4. Para números no negativos, el desplazamiento a la derecha de relleno con ceros y el desplazamiento a la derecha de propagación del signo producen el mismo resultado."
    }


    console.log(
        "%cOperadores de desplazamiento de bits",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        )
    console.table([DesplazamientoALaIzquierda,DesplazamientoADerechaConPropagacionDeSigno,DesplazamientoALaDerechaDeRellenoCero])
    console.info("Los operadores de desplazamiento bit a bit toman dos operandos: el primero es una cantidad que se va a desplazar y el segundo especifica el número de posiciones de bit por las que se va a desplazar el primer operando. La dirección de la operación de desplazamiento es controlada por el operador utilizado.")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_bit_a_bit")
}


function OperadoresLogicos(){

    const andLogico = {
        Operador:"AND Lógico (&&)",
        Uso:"expr1 && expr2",
        Descripcion:"Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false"
    }

    const orLogico = {
        Operador:"OR lógico (||)",
        Uso:"expr1 || expr2",
        Descripcion:"Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false."
    }

    const notLogico = {
        Operador:"NOT lógico (!)",
        Uso:"!expr",
        Descripcion:"Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true."
    }

    console.log(
        "%cOperadores logicos",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        )
    console.table([andLogico,orLogico,notLogico])
    console.info("Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano.")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos")
}

function OperadoresCondicionales(){
    console.log(
        "%cOperadores condicionales",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        )

        console.info("Sintaxis: condition ? val1 : val2")
        console.log("Ejemplo:")
        console.log("var status = (age >= 18) ? 'adult' : 'minor';")

    console.info("El operador condicional es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores según una condición.")
    console.info("Ver mas...","https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_condicional_ternario")
}

function OperadoresTernarios(){
    OperadoresCondicionales()
}