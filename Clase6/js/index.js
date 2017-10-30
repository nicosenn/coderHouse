console.log ('Clase 6 - Local Storage')

var name = prompt('Ingresar nombre a guardar')
var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

function saveLocalStorage(name){
	var parsedList = JSON.stringify(studentsList)
	localStorage.setItem('savedList', parsedList)

	

	/*studentsList.push(name)
	localStorage.setItem('token', studentsList)*/
}

var nombre = saveLocalStorage(name)
console.log('El nombre ingresado es: ' + name)