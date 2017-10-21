console.log('Clase 3')

/*showMessage('Nico', 27)

function showMessage(name, age){
	console.log('Hola ' + name + ' tenes ' + age + 'anios!')
}

//sum(10,2)

//sum(7, 3)

var result1 = sum(10, 2)
console.log(result1)

var result2 = sum(7, 3)
console.log(result2)

function sum(val1, val2){
	var parsedVal1 = parseInt(val1, 10)
	var parseVal2 = parseInt(val2, 10)
	//console.log(val1+val2)
	var result = parsedVal1 + parseVal2
	return result
}*/

// SCOPE GLOBAL, es accesible a cualquier parte del programa
/*console.log('----------')
var APPNAME = 'Clase 03'

function showAppName(){
	//SCOPE LOCAL
	var functionName = 'Show app name'
	console.log(functionName)
	console.log('----------')
	console.log(APPNAME)
}

showAppName()



//Funciones autoinvocables (No es necesario llamarla)

;(function mostrarMensaje(name){
	console.log('Hola ' + name)
})('Nico')//Aqui lo que va dentro de las variables

var app = (function (){
	var show = function mostrarMensaje(primerNombre){
		console.log('Hola ' + primerNombre)
	}

	var show2 = function mostrarMensaje2(segundoNombre){
		console.log('Hola ' + segundoNombre)
	}
	return { //Asi devuelvo mas de una cosa!
		show: show,
		show2: show2
	}
})()

app.show('Susana')
app.show2('PErejil')

//Ejercicio 1 Pequenias funciones 

console.log('Ejercicio Pequenias funciones')
var name = prompt('Ingresa tu nombre:')
var lastName = prompt('Ingresa tu apellido:')

var objName = {
	nombre: name,
	apellido: lastName
}

function showName(a, b){
	console.log('Mi nombre es: ' + objName.nombre + ' ' + objName.apellido)
}

showName()

//Ejercicio 2 Pequenias funciones
var week = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
var dia = prompt('Escribir un dia de la semana:')
var dia2 = prompt('Escribir un dia de la semana:')
var dia3 = prompt('Escribir un dia de la semana:')

function dayOfTheWeek(a, b, c){
	for(var i = 0; i<week.length; i++){
		var check = week[i]
		if(check === 'Sabado' || check === 'Domingo'){
			if(check === a){
				console.log('El dia que ingresaste es finde ( ' + a + ' )')
			}if(check === b){
				console.log('El dia que ingresaste es finde ( ' + b + ' )')
			}if(check === c){
				console.log('El dia que ingresaste es finde ( ' + c + ' )')
			}
		}else{
			if(check === a){
				console.log('El dia que ingresaste se labura ' + a + ' )')
			}if(check === b){
				console.log('El dia que ingresaste se labura ( ' + b + ' )')
			}if(check === c){
				console.log('El dia que ingresaste se labura ( ' + c + ' )')
			}
		}
	}
}

dayOfTheWeek(dia, dia2, dia3)*/

//Ejercicio 3 Pequenias funciones

var palabra = prompt('Escribir una palabra: ')

function unaPalabra(a){
	if(a.length >5){
		console.log(true + ' ' + a)
	}else{
		console.log(false + ' ' + a)
	}
}

unaPalabra(palabra)

var nuevaPalabra = prompt('Escribir otra palabra:')

function otraPalabra(a){
	while(a.length < 5){
		var a = prompt('Escribir otra palabra:')
		console.log('Escribir una palabra con mas de 6 letras')
	}
	alert('La palabra supera las 6 letras ( ' + a + ' )')
}

otraPalabra(nuevaPalabra)