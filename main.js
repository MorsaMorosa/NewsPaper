AOS.init();

let hoy= new Date();

let dia = hoy.getDay();
let fecha = hoy.getDate();
let mes = hoy.getMonth() + 1;
let ano = hoy.getFullYear();

if (dia == 1) {
    dia = 'Lunes';
}

if (dia == 2) {
    dia = 'Martes';
}

if (dia == 3) {
    dia = 'Miercoles';
}

if (dia == 4) {
    dia = 'Jueves';
}

if (dia == 5) {
    dia = 'Viernes';
}

if (dia == 6) {
    dia = 'Sabado';
}

if (dia == 7) {
    dia = 'Domingo';
}

document.getElementById("time").innerHTML = `${ano} / ${mes} / ${fecha}`;
document.getElementById("day").innerHTML = `${dia}`;

