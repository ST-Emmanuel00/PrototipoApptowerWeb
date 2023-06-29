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

visitantes.forEach((visitante) => {
  personas.innerHTML += `<option value="${visitante}">${visitante}</option>`;
});