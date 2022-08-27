//area y perimetro de un cuadrado
const perimCuad = (side) => side * 4;
const areaCuad = (side) => side * side;
//dado que el proceso de resultado se repetia mucho, asi que dejamos preseleccionado la etiqueta de resultado del html
const valueResult = document.getElementById("resultado");


//console.log(perimSquare(4));
function calcularPerimCuad() {
    let inputSide = document.getElementById("inputSide");
    //creamos un valor para meter el elemento con el id inpuTside del html
    let value = Number(inputSide.value);
    //creamos otra variable para obtener el valor del html y lo convertimos a numero

    const result = `El perimetro del Cuadrado es: ${perimCuad(value)}`
    //creamos una constante para guardar el resultado
    //document.getElementById("result").innerText = result;
    //usamos la funcion anterior para meter la variable result como texto, en el elemento de id result en html
    valueResult.innerText = result;
    //como se repite mucho el proceso lo universificamos
}

function calcularAreaCuad() {
    let inputSide = document.getElementById("inputSide");
    //creamos un valor para meter el elemento con el id inpuTside del html
    let value = Number(inputSide.value);
    //creamos otra variable para obtener el valor del html y lo convertimos a numero

    const result = `El area del Cuadrado es: ${areaCuad(value)}`
    //creamos una constante para guardar el resultado
    //document.getElementById("result").innerText = result;
    //usamos la funcion anterior para meter la variable result como texto, en el elemento de id result en html
    valueResult.innerText = result;
}

//perimetro y area de un triangulo
const perimTria = (side1, side2, side3) => side1 + side2 + side3;
const areaTria = (sideB, sideH) => (sideB * sideH)/2;

function calcularPerimTria() {
    let inputSide1 = document.getElementById("inputSide1");
    let inputSide2 = document.getElementById("inputSide2");
    let inputSide3 = document.getElementById("inputSide3");
    //creamos 3 variables para meter las medidas de los 3 lados del triangulo
    let value1 = Number(inputSide1.value);
    let value2 = Number(inputSide2.value);
    let value3 = Number(inputSide3.value);
    //creamos mas variables para obtener los valores del html y convertirlos a numero a numero

    const result = `El perimetro del Cuadrado es: ${perimTria(value1, value2, value3)}`
    //creamos una constante para guardar el resultado de la funcion de operacion
    valueResult.innerText = result;
    //mostramos el resultado llamando la funcion antes creada.
}

function calcularAreaTria() {
    let inputSideB = document.getElementById("inputSideB");
    let inputSideH = document.getElementById("inputSideH");
    //creamos 3 variables para meter las medidas de los 3 lados del triangulo
    let valueB = Number(inputSideB.value);
    let valueH = Number(inputSideH.value);
    //creamos mas variables para obtener los valores del html y convertirlos a numero a numero

    const result = `El perimetro del Cuadrado es: ${areaTria(valueB, valueH)}`
    //creamos una constante para guardar el resultado de la funcion de operacion
    valueResult.innerText = result;
    //mostramos el resultado llamando la funcion antes creada.
}

//formulas para el circulo
const diamCirc = (sideR) = sideR * 2;
const perimCirc = (sideR) = 2 * 3.1415 * sideR;
const areaCirc = (sideR) = (sideR^2)*3.1415;

function calcularDiamCirc() {
    let inputSideR = document.getElementById("inputSideR");
    
    let valueR = Number(inputSideR.value);

    const result = `El perimetro del Cuadrado es: ${diamCirc(valueR)}`
    valueResult.innerText = result;
}
function calcularPerimCirc() {
    let inputSideR = document.getElementById("inputSideR");
    
    let valueR = Number(inputSideR.value);

    const result = `El perimetro del Cuadrado es: ${perimCirc(valueR)}`
    valueResult.innerText = result;
}
function calcularAreaCirc() {
    let inputSideR = document.getElementById("inputSideR");
    
    let valueR = Number(inputSideR.value);

    const result = `El perimetro del Cuadrado es: ${areaCirc(valueR)}`
    valueResult.innerText = result;
}
