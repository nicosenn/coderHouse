console.log('Clase 4 - Objetos')

/*var user = {
	firstName: 'Nico',
	age: 27
}
user.lastName = 'Senn'
console.log(user.firstName)

//Cambiar firstName
user.firstName = 'Gustavo'

console.log(user.firstName)

//this DONDE ESTOY PARADO
function user(firstName, age){
	this.id = Math.random()
	this.modifed = false
	this.firstName = firstName
	this.age = age
}

user.prototype.showMessegeName = function (a){
	console.log('Hola soy ' + this.firstName)
}

user.prototype.getModifed = function (){

}

user.prototype.getFirstName = function(){
	return this.firstName
}

user.prototype.setFirstName = function(firstName){
	this.firstName = firstName
}

var newuser = new user('Lucas', 27)

var secondUser = new user('Nico', 27)

/*console.log('Primero: ', newuser)

console.log('Segundo: ', secondUser)

newuser.showMessegeName()

secondUser.showMessegeName()

var name = newuser.getFirstName()
console.log(name)

newuser.setFirstName('Pedro')
console.log('Hola ' + newuser.getFirstName())*/

//Ejercicio 1 Hacer un objeto que represente un usuario

function user(firstName, lastName, age, address){
	this.id = Date.now()
	this.firstName = firstName
	this.lastName = lastName
	this.age = age
	this.address = address
}

var primerUser = new user('Nicolas', 'Senn', '27', 'Aguilar 2547')
console.log(primerUser)

user.prototype.showFullName = function(){
	console.log('Hola soy: ' + primerUser.firstName + ' ' + primerUser.lastName)
}
primerUser.showFullName()

user.prototype.isLegalAge = function(){
	if(primerUser.age <18){
		console.log(primerUser.firstName + ' Es menor de edad!')
	}else{
		console.log(primerUser.firstName + ' Es mayor de edad!')
	}
}

primerUser.isLegalAge()