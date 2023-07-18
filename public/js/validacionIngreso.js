const fechaInput = document.getElementById('fechaI');
const fechaActual = new Date().toISOString().split('T')[0];
fechaInput.value = fechaActual;
const personas = document.getElementById('visitantes');
const ER_nombre2 = /^[A-Za-z\s]+$/
const fechaSalida = document.getElementById('fechaSalida');
const salir = document.getElementById('salir');

const espacios = [
  '301',
  '303',
  '304',
  '305',
  '401',
  '402',
];

const visitantes = [
  'Trixie Than',
  'El chucho',
  'Pamela Bustamante',
];

const docuVisitante = document.querySelector('#docuVisitante');
const torre = document.querySelector('#torre');
const espacio = document.querySelector('#espacio');
const anfitrion = document.querySelector('#Anfitrion');
const espacioVehiculo = document.querySelector('#espaciovehiculo');

if (anfitrion) {
  anfitrion.addEventListener("blur", function () {

    if (!ER_nombre2.test(anfitrion.value)) {
      anfitrion.classList.remove("border-success");
      anfitrion.classList.add("border-danger");
    } else {
      anfitrion.classList.remove("border-danger");
      anfitrion.classList.add("border-success");
    }
  });
}

function alertSucces() {
  try{
    if (docuVisitante.value === "" || torre.value === "" || espacioVehiculo.value === "" || espacio.value === "" || anfitrion.value === "") {
      throw new Error("Aun quedan campos por seleccionar o llenar")
     }
     else{

    Swal.fire(
      'Ingreso creado con exito',
      '',
      'success'
    ).then(() => {

         window.location.href = 'ingresos'

       })
     }

  }catch(e){
    Swal.fire({

      icon: 'error',
      title: 'Tienes un problema',
      text: e

    });
  }
  
}

function guardarFechaHora() {
  var fechaHora = new Date();

  var dia = ("0" + fechaHora.getDate()).slice(-2);      // Obtener el día con dos dígitos
  var mes = ("0" + (fechaHora.getMonth() + 1)).slice(-2); // Obtener el mes con dos dígitos
  var año = fechaHora.getFullYear();                     // Obtener el año
  var hora = ("0" + fechaHora.getHours()).slice(-2);     // Obtener la hora con dos dígitos
  var minutos = ("0" + fechaHora.getMinutes()).slice(-2); // Obtener los minutos con dos dígitos
  var segundos = ("0" + fechaHora.getSeconds()).slice(-2); // Obtener los segundos con dos dígitos

  var formatoFechaHora = dia + "/" + mes + "/" + año + " " + hora + ":" + minutos + ":" + segundos;
  fechaSalida.innerHTML= formatoFechaHora;
  salir.style.display="none";

  
  console.log(formatoFechaHora); // Aquí puedes hacer lo que necesites con la variable formatoFechaHora
}

function alertDelete() {
  Swal.fire({
    title: 'Eliminar',
    text: "¿Estas seguro de eliminar el registro?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado',
        'El registro ha sido eliminado con exito',
        'success'
      )
    }
  })
}

// visitantes.forEach((visitante) => {
//   personas.innerHTML += `<option value="${visitante}">${visitante}</option>`;
// });