//Ejercicio 1
/*var nombre

nombre = prompt('Ingresa tu nombre: ')

alert('Buen dia: ' + nombre)

//Ejercicio 2
var numero

numero = prompt('Ingresa un numero para sumar a 2: ')
numeroParseado = parseInt(numero, 10)
var suma = numeroParseado+2

alert(suma)

//Ejercicio 3
var numero2
numero2 = prompt('Ingresa un numero para restar a 2: ')
numeroParseado4 = parseInt(numero2, 10)

var resta = (numeroParseado4-2)

alert(resta)

//Ejercicio 4
var numero3
var numero4

numero3 = prompt('Ingresar numero a sumar: ')
numero4 = prompt('Ingresar siguiente numero')

numeroParseado5 = parseInt(numero3, 10)
numeroParseado2 = parseInt(numero4, 10)

var suma2 = numeroParseado5 + numeroParseado2

alert(suma2)


//Ejercicio dias de la semana
var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

for (i = 0; i< semana.length; i++){
	var dia = semana[i]
	if(dia === 'Sabado' || dia ==='Domingo'){
		console.log( dia +' es fin de semana!')
	}else{
		console.log(dia + ' es dia de laburo!')
	}
}*/

//Trabajo practico Semana
//var dia
//dia = prompt('Ingresar un dia de la semana')
var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
var opcion = prompt('Ingresar un dia de la semana primer letra Mayuscula')

for(var i = 0; i < semana.length; i++){
	var dia = semana[i]
	if(dia === 'Sabado' || dia === 'Domingo'){
		console.log(dia + ' Es fin de semana')
		if(dia === opcion){
			console.log(dia + (' El dia que ingresaste es finde!'))
			break
		}
	}else{
		console.log(dia + ' Es dia de laburo')
		if(dia === opcion){
			console.log(dia + ' El dia que ingresaste se labura!')
			break
		}
	}
}
