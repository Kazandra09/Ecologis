var nombre=prompt("Ingrese su nombre");
alert("Bienvenidos a mi página web" +nombre+ ",espero que sea util esta información y me mandes un comentario");
const days= {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}
var fecha=prompt (nombre+ "Ingrese su fecha de nacimiento como AAAA/MM/DD y sabrá el día de la semana que nació");
let birthday=new Date (fecha); 
alert(nombre+ "naciste un" +days[birthday.getDay()]);
