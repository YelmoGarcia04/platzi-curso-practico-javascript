//codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//codigo del cuadrado

//codigo del Triangulo
console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, ")

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimteroTriangulo(lado1, lado2,  base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del Triangulo es: " + perimteroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;

}
console.log("El area del triangulo es : " + areaTriangulo + "cm");

console.groupEnd();

//Codigo del circulo

console.group("Circulos")
//Radio
// const radioCirculo = 4;
// console.log("Los El radio del circulo es : " + radioCirculo + "cm");


//Diametro
function diametroCirculo(radio){
    return radio * 2;
}


//PI
const PI = Math.PI;
console.log("PI es : " + PI + "cm");


//Circunferencia
function perimetroCirculo(radio){
    const diametro =diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areacirculo(radio){
    return (radio * radio) * PI;
}
console.log("El área del circulo es : " + areacirculo + "cm");

console.groupEnd();


//aqui interactuamos con tml
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");   
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");   
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}




