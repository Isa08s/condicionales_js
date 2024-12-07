// // // alert("Hola");
// let message = "Hola mundo 3";
// let message2 = "Hola mundo 4";
// alert(message);
// alert(message2);

// let number1 = 12;
// let number2 = 21;
// alert(number1 + number2);
// let year = prompt("Ingrese el año:");
// alert(year);

// Variables
// let MyName;
// MyName = "josefino";
// let MyAge = 15;
// alert(MyName);
// alert(MyAge);
// let MyName ="josefino2",
//     MyAge = 15;
//     MyMessage= "Hello :)";
// alert(MyName);
// alert(MyAge);
// alert(MyMessage);

// Constantes
// const MyBirthDay = "Apr-21-2014";
// // alert(MyBirthDay);
// // Tipos de datos
// let MyAge2 = 33;
// let IsActive = true;
// let IsBlue = false;
// let MyHeight = null;
// let MyHeight2 = undefined;
 
// // Ingreso de argumentos
// let  year = prompt('Año actual:');
// alert(year);
// Comfirm
// let isBoss = comfirm("Eres el jefe ?");
// alert(isBoss);
// Operadores matematicos
// let Num1 = 10;
// let Num2 = 20;
// alert(Num1 + Num2);
// alert(Num1 - Num2);
// alert(Num1 * Num2);
// alert(Num1 / Num2);
// let  Num3 = 2;
// Num3++;
// alert(Num3);
// Operadores de comparacion
// alert( 2 > 1 );
// alert( 2 < 1 );
// alert( 2 == 1 );
// alert( 2 != 1 );

// Condicionales
// let year = prompt("ingrese el año actual:");
// if (year==2024){
//     alert("Muy bien");
//     alert("Eres genial");
// }

// let year = prompt("ingrese el año actual:");
// if (year==2024){
//     alert("Muy bien");
//     alert("Eres genial");
// }
// else {
//     alert("No es correcto");
// }

// condicionales encadenados
// let year = prompt("ingrese el año actual:");
// if (year==2024){
//     alert("Muy bien");
//     alert("Eres genial");
// }
// else if (year > 2024){
//     alert("Muy alto");
// }
// else if (year < 2024){
//     alert("Muy bajo");
// }
// else {
//     alert("No es correcto");
// }

// Operadores logicos
// or -> ||
// alert(true || true); //true
// alert(true || false); //true
// alert( false || true); // true
// alert( false || false); // falso

// let hour = 12 ;
// let isWeekend = false;
// if (hour < 9 || hour > 18 || isWeekend){
//     alert("La ofician esta cerrada");
// }
// else {
//     alert("Open!");
// }

// and -> &&
// alert(true && true); // true
// alert(true && false); // false
// alert(false && true); // false
// alert( false && false); // false

//solution 
// let userName = prompt('¿Quién eres tú?', '');
// if (userName == "admin") {
//     let passWord = prompt('Clave', '');
//     if (passWord == "Master") {
//         alert("Bienvenido");
//     } else if (passWord == '' || passWord == null) {
//         alert("Cancelado");
//     } else {
//         alert("Clave incorrecta");
//     }
// } else if (userName == "" || userName == null) {
//     alert("Cancelado");
// } else {
//     alert("No sé quién eres");
// }

// ciclos while
// while(condition){
//     sentences;
//     sentences;
// }

// let counter = 0;
// while (counter < 3){
//     alert(counter);
//     counter++;
// }

// ciclo for
// for (begin; CSSConditionRule, step);{
//     for body
// }

// for(let counter = 0; counter < 3; counter++){
//     alert(counter);
// }

// funciones
// function showMessage(){
//     alert("Hola mundo");
// }
// showMessage();
// showMessage();

// funciones con variables locales
// function showMessage(){
//     let message = "Epale :)"
//     alert(message);
// }
// showMessage();
// // alert(message);

// Funciones con variables externas
let userName = "Josefino";
function showMessage(){
    let message = "Epale :) " + userName;
    alert(message);
}
showMessage();
