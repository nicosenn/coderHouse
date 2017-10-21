//Operadores logicos

/*var contrasenia = '1234'

var contraseniaUsuario = prompt('Ingresa una contrasenia: ')

resultado = contrasenia  === contraseniaUsuario

console.log(resultado)*/


//Comparando objetos (SUS ATRIBUTOS)

/*var obj = {}

var obj2 = {}

//var obj2 = obj

var obj = {
	nombre: 'nico'
}

var obj2 = {
	nombre: 'nico'
}

var resultado = obj.nombre === obj2.nombre

console.log(resultado)

var edad1 = 18

var edad2 = 18

var resultado = edad1 >= edad2

console.log(resultado)

//Comparo variables para validar cuentas
var usuario = 'Pepe' 

var pass = '1234'

var ingresoUser = prompt('Ingreso usuario: ')

var ingresoPass = prompt('Ingreso pass: ')

var comparoUser = usuario === ingresoUser

var comparoPass = pass === ingresoPass

var resultado = comparoUser && comparoPass

console.log(resultado)
// if anidados

var numero = prompt('Ingrese la tecla de la luz: ')

if (numero === 'on'){
	console.log('La luz esta encendida')
}if(numero === 'off'){
	console.log('Luz apagada')
}else{
	console.log('Error')
}

//Switch Case
var resultadoFutbol = prompt('Escribir un resultado', 'Ej: Gano, Empato, Perdio')

switch (resultadoFutbol){
	case 'Gano':
		console.log('Se le asignan 3 puntos')
		console.log('Gracias por participar')
		break

	case 'Empato':
		console.log('Se le asigna 1 punto')
		console.log('Gracias por participar')
		break

	case 'Perdio':
		console.log('Se le asigna 0 puntos')
		console.log('Gracias por participar')
		break

	default:
		console.log('Eligio un mal revar numeros = 10

		sultado')
		break
}


// Ciclo FOR
var numeros = 10

for(var i = 0; i < numeros; i++){
	console.log(i)
}

//Recorrer Array
//var nombres = ['Diego', 'Geronimo', 'Nicolas', 'Lucas', 'Guadalupe']
for (var i = 0; i < nombres.length; i++){
	var nombre = nombres [i]
	if(nombre !== 'Adrian'){
		console.log(nombre + ' es alumno')
	}
}

//Recorrer Array con objetos
var nombres = [{nombre: 'Adrian'}, {nombre: 'Diego'}]

for (var i = 0; i < nombres.length; i++){
	var nombre = nombres [i].nombre
	if(nombre !== 'Adrian'){
		console.log(nombre + ' es alumno')
	}
}


//Ciclo While
var numeros = 10
var i = 0
while(i<=10){
	console.log(i)
	i ++
}

//Ciclo Do While
var i=0

do{
	console.log(i)
	i++
}while(i<=10)*/

