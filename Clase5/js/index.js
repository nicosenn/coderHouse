console.log("Clase 5 - String")

var name = prompt("Ingresar nombre del alumno")
var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

console.log("Ejercicio 1")
function changeName(name){
	if(typeof name === 'string'){
		var nombre = name.toUpperCase()
		
		var sarasa = nombre.replace('Á', 'A')
		sarasa = sarasa.replace('É', 'E')
		sarasa = sarasa.replace('Í', 'I')
		sarasa = sarasa.replace('Ó', 'O')
		sarasa = sarasa.replace('Ú', 'U')

		return sarasa
		
	}else{
		return false
	}
}

var result = changeName(name)
console.log(result)

console.log(" ")
console.log("Ejercicio 2")
function noEsta(nombre){
	if(typeof nombre === 'strng' || Array.isArray(studentsList)){
		//var sara = changeName(nombre)
		var a = studentsList.indexOf(nombre)
		if( a === -1){
			return "No esta!"
		}else{
			return a
		}
	}
}

var result2 = noEsta(name)
console.log('El alumno: ' + result2)

console.log(" ")
console.log("Ejercicio 3")
function noEstaOtraVez (nombre){
	if(typeof nombre === 'strng' || Array.isArray(studentsList)){
		var sara = changeName(nombre)
		var a = studentsList.indexOf(sara)
		if( a === -1){
			return "No esta!"
		}else{
			return nombre + ' y esta en la posicion ' + a
		}
		
	}else{
		return false
	}
}

var result3 = noEstaOtraVez(name)
console.log('El alumno: ' + result3)