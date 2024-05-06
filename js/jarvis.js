/* const numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let i = 0; i< numeros.length; i++){
    if( i===5){
        break;
    }
    console.log(numeros[i]);
}

for(let i = 0; i< numeros.length; i++){
    if( i===5){
        continue;
    }
    console.log(numeros[i]);
}
*/

/*
function sumar(a,b, ...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n
    });
    return resultado;
}
function restar(a,b, ...c){
    let resultado2= a - b;

    c.forEach(function(n){
        resultado2 -= n
    });
    return resultado2;
}
function multiplicar(a,b, ...c){
    let resultadom= a * b;

    c.forEach(function(n){
        resultadom *= n
    });
    return resultadom;
}

console.log(sumar(1,2,3,4,5,6,7));
console.log(restar(1,2,3,4,5,6,7));
console.log(multiplicar(1,2,3,4,5,6,7));

const arr1 = [ 10,11,12,13,14,], arr2 = [ 15,16,17,18,19];
console.log(arr1,arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);
*/


//''arrow function

/*const saludar = nombre => console.log('hola $(nombre)');
saludar("irma"); */

/*const sumar = (a,b) => a + b;
console.log(sumar(9,8));

const funcionDeVariasLineas = () => {
    console.log("uno");
    console.log("dos");
    console.log("tres");

}

funcionDeVariasLineas();*/

/*const perro = {
    nombre: "kenai",
    ladrar:() => {
        console.log(this)
    }
}
perro.ladrar();*/


/*
// funcion construtora
function Animal(nombre,genero){
// atributos
this.nombre = nombre;
this.genero = genero;
}

//metodos agrgados al prototipo de la function constructora
Animal.prototype.sonar =function(){
    console.log("hago sonidos por que estoy vivo");
    }

Animal.prototype.sonar =function(){
        console.log(`hola me llamo ${this.nombre}`);
        }
    
// herencia Prototipica
function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

//perro esta heredando de animal
Perro.prototype =new Animal();
Perro.prototype.constructor = Perro;

//sobre escrituta de prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("guuuua guuua");
}
const snoopy = new Animal("Snoopy", "Macho"),
lolaBunny =new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);
*/


// clases y herencias

/* 
class Animal{
//el constructor es un metodo especial que se ejecuta en el momento dee instanciar la clase constructora
constructor(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
}

// metodo

sonar(){
    console.log("estoy vivo");
}

saludar(){
    console.log(`Hola me llamo ${this.nombre}`);
}
}
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        // con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio = tamanio;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar(){
        console.log("guuauu guuauu!!!")
    }

    //un método estatico se pueden ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.")
    }

    // los setters y getters son metodos  especiales que permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.getRaza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();


const mimi = new Animal("Mimi","Hembra"),
scooby = new Perro("Scooby","Macho","Gigante");

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Grán Danés";
console.log(mimi);
*/

//objeto consola

/* console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Es un resgistro de lo que ha pasado en nuestra aplicación");

let nombre = "Edwin", apellido = "Mojica", edad = 26;

console.log(nombre,apellido,edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} ańos.`);
console.log(`Hola mi nombre es %s %s y tengo %d ańos.`,apellido,nombre,edad);

// console.clear();  //es para limpiar la consola 

console.log(window);
console.log(document);
console.dir(Window);
console.dir(document);

// onsole.group();
console.groupEnd();
son para hacer gruposmediante console.log 

console.clear();
console.log(console);
console.table(Object.entries(console).sort());

const numbers =[1,2,3,4,5], vocales =["a","e","i","o","u"];
console.table(numbers);
console.table(vocales);

const perro ={
    nombre: "Bonny", raza: "Boxer", color: "Cafe"}
console.table(perro);

console.time('Cuanto tiempo tarda mi codigo');
// aqui va la funcion que queremos saber
const arreglo = Array(1000);

for(let i = 0;i < arreglo.length; i++){arreglo[i] = i;}

console.timeEnd('Cuanto tiempo tarda mi codigo');

for (let i = 0;i<= 100; i++){
    console.count("codigo for");// para contar 
    console.log(i);
}

let x = 1, y = 2, pruebaXY = " Se espera que X siempre sea menor que Y"
console.assert(x<y,(x,y,pruebaXY));
*/


//Objeto Date
//console.log(Date());
// alert, confirm y prompt  


// function  anonima auto ejecutable




// formas de escribir las funciones anonimas autoejecutables
//Clasica
/*(function(){
    console.log("version Clasica")
})();

// La Crockford(JavaScript The God Parts)
((function(){
    console.log("Version Crockford")
})());

//Unaria
+function(){
    console.log("Version Unaria")
}();

// Facebook
!function(){
    console.log("Version Facebook")
}();*/

//import {pi} from "./constante.js"
//console.log(pi)
