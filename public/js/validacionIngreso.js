const fechaInput = document.getElementById('fechaI');
const fechaActual = new Date().toISOString().split('T')[0];
fechaInput.value = fechaActual;
const personas = document.getElementById('visitantes');

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

function alertSucces() {
  Swal.fire(
    'Actualizacion con exito',
    '',
    'success'
  )
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

visitantes.forEach((visitante) => {
  personas.innerHTML += `<option value="${visitante}">${visitante}</option>`;
});