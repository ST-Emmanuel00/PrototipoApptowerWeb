$(document).ready(function () {
  console.log("llegue2");


  
  const numerodocu = /^\d{8,10}$/;
  const telefonoRegex = /^\d{10}$/;
  const nombreRegex = /^[A-Za-z]+ ?[A-Za-z]+$/;
  const regexVehiculo = /^(N\/A|\b[A-Za-z]{3}-\d{3}\b)$/;

  function fecha() {
    const fecha = new Date(document.getElementById("fechaN").value);
    const fechaActual = new Date();
    return fecha < fechaActual;
  }
  let nombre = $("#nombre_visitante");
  let apellido = $("#apellido_visitante");
  let documento = $("#documento_visitante");
  let fechas = $("#fechaN");
  let vehiculo = $("#vehiculo");
  let telefono = $('#telefono')

  nombre.on("blur", function () {
    console.log("llegue2");
    var nombreh = $("#nombre_visitante").val();
    var mensajen = $("#FB_nombre");
    if (nombreRegex.test(nombreh)) {
      mensajen.text("");
      $(this).addClass("border-success"); // Agregar clase de Bootstrap para input válido
      $(this).removeClass("border-danger"); // Quitar clase de Bootstrap para input inválido
    } else {
      mensajen.text("El campo no cumple con el formato."); // Mostrar mensaje si es inválido

      $(this).addClass("border-danger"); // Agregar clase de Bootstrap para input inválido
      $(this).removeClass("border-success"); // Quitar clase de Bootstrap para input válido
    }
  });
  apellido.on("blur", function () {
    console.log("llegue3");
    var apellidoh = $("#apellido_visitante").val();
    var mensajen = $("#FB_apellido");
    if (nombreRegex.test(apellidoh)) {
      mensajen.text("");
      $(this).addClass("border-success"); // Agregar clase de Bootstrap para input válido
      $(this).removeClass("border-danger"); // Quitar clase de Bootstrap para input inválido
    } else {
      mensajen.text("El campo no cumple con el formato."); // Mostrar mensaje si es inválido

      $(this).addClass("border-danger"); // Agregar clase de Bootstrap para input inválido
      $(this).removeClass("border-success"); // Quitar clase de Bootstrap para input válido
    }
  });
  documento.on("blur", function () {
    console.log("llegue4");
    var documentoh = $("#documento_visitante").val();
    var mensajen = $("#FB_documento");
    if (numerodocu.test(documentoh)) {
      mensajen.text("");
      $(this).addClass("border-success"); // Agregar clase de Bootstrap para input válido
      $(this).removeClass("border-danger"); // Quitar clase de Bootstrap para input inválido
    } else {
      mensajen.text("El campo no cumple con el formato."); // Mostrar mensaje si es inválido

      $(this).addClass("border-danger"); // Agregar clase de Bootstrap para input inválido
      $(this).removeClass("border-success"); // Quitar clase de Bootstrap para input válido
    }
  });
  fechas.on("blur", function () {
    console.log(fecha());
    console.log("llegue3");
    var mensajen = $("#FB_fecha");
    if (fecha()) {
      mensajen.text("");
      $(this).addClass("border-success"); // Agregar clase de Bootstrap para input válido
      $(this).removeClass("border-danger"); // Quitar clase de Bootstrap para input inválido
    } else {
      mensajen.text("El campo no cumple con el formato."); // Mostrar mensaje si es inválido

      $(this).addClass("border-danger"); // Agregar clase de Bootstrap para input inválido
      $(this).removeClass("border-success"); // Quitar clase de Bootstrap para input válido
    }
  });
  vehiculo.on("blur", function () {
    console.log(fecha());
    console.log("llegue3");
    var vehiculoh = $("#vehiculo").val();
    var mensajen = $("#FB_vehiculo");
    if (regexVehiculo.test(vehiculoh)) {
      mensajen.text("");
      $(this).addClass("border-success"); // Agregar clase de Bootstrap para input válido
      $(this).removeClass("border-danger"); // Quitar clase de Bootstrap para input inválido
    } else {
      mensajen.text("El campo no cumple con el formato."); // Mostrar mensaje si es inválido

      $(this).addClass("border-danger"); // Agregar clase de Bootstrap para input inválido
      $(this).removeClass("border-success"); // Quitar clase de Bootstrap para input válido
    }
  });
  telefono.on("blur", function () {
    var telefonoh = $("#telefono").val();
    var mensajen = $("#FB_telefono");
    if (telefonoRegex.test(telefonoh)) {
      mensajen.text("");
      $(this).addClass("border-success"); // Agregar clase de Bootstrap para input válido
      $(this).removeClass("border-danger"); // Quitar clase de Bootstrap para input inválido
    } else {
      mensajen.text("El campo no cumple con el formato."); // Mostrar mensaje si es inválido

      $(this).addClass("border-danger"); // Agregar clase de Bootstrap para input inválido
      $(this).removeClass("border-success"); // Quitar clase de Bootstrap para input válido
    }
  });
  $('#boton_crear').on('click', function(e){
    e.preventDefault();
    const inputs = document.querySelectorAll('input.border-danger');
    console.log(inputs.length)
    console.log('boton exitos')
    try {
      if (!$('#nombre_visitante').val() || !$('#apellido_visitante').val() || !$('#documento_visitante').val() || !$('#fechaN').val() || !$('#vehiculo').val() || !$('#telefono').val()){
        throw new Error('Aun hay campos sin llenar')
      }
      if (inputs.length > 0){
        throw new Error('Aun hay campos sin no validos');
      }
      Swal.fire({
        icon: 'success',
        title: 'Muy bien...',
        text: 'Se creo el visitante exitosamente.',
      });
    }catch(e){
      Swal.fire({
        icon:'error',
        title: 'Ha ocurrido un error',
        text: e.message

    });
    }
  })
});

// const url = 'http://localhost:8087/api/visitantes'

// const listar_visitantes = async () => {

//   console.log('Si estas dentro visitantes')

//   let body = document.getElementById('contenido_visitantes')

//   if (body) {

//     let mensaje = ''

//     fetch(url)
//       .then(res => res.json())
//       .then(function (data) {
//         let lista_visitantes = data.visitantes
//         lista_visitantes.map((visitante, item) => {

//           (visitante.permiso == 'PERMITIDO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
//           // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'

//           mensaje += `<tr>

//                 <td>${item + 1}</td>
//                 <td>${visitante.tipo_documento_visitante}</td>
//                 <td>${visitante.numero_documento_visitante}</td>
//                 <td>${visitante.nombre_visitante}</td>
//                 <td>${visitante.apellido_visitante}</td>
//                 <td>${visitante.genero_visitante}</td>
//                 <td>${visitante.tipo_visitante}</td>
//                 <td>${visitante.anfitrion}</td>

//                 <td><span class="badge ${resaltato}">${visitante.permiso}</span></td>

//                 <td>

//                     <a class="waves-effect waves-light btn modal-trigger" href="#modal_editar" onclick = 'editar_visitantes(${JSON.stringify(visitante)})'><i class = "fe fe-edit fe-24"></i></a>
//                     <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick = "eliminar_visitante('${visitante._id}')"><i class = "fe fe-delete fe-24"></i></a>

//                 </td>

//               </tr>`

//           body.innerHTML = mensaje

//         }
//         )
//       })
//   }
// }

// const actualizar_visitante = async () => {

//   console.log('lo intentaste bro')
//   const _id = document.querySelector('#_id')
//   const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
//   const numero_documento_visitante = document.querySelector('#numero_documento_visitante')
//   const nombre_visitante = document.querySelector('#nombre_visitante')
//   const apellido_visitante = document.querySelector('#apellido_visitante')
//   const genero_visitante = document.querySelector('#genero_visitante')
//   const tipo_visitante = document.querySelector('#tipo_visitante')
//   const anfitrion = document.querySelector('#anfitrion')
//   const permiso = document.querySelector('#permiso')

//   let visitantes = {
//     _id: document.getElementById('_id').value,
//     tipo_documento_visitante: tipo_documento_visitante.value,
//     numero_documento_visitante: numero_documento_visitante.value,
//     nombre_visitante: nombre_visitante.value,
//     apellido_visitante: apellido_visitante.value,
//     genero_visitante: genero_visitante.value,
//     tipo_visitante: tipo_visitante.value,
//     anfitrion: anfitrion.value,
//     permiso: permiso.value,

//   }

//   console.log(visitantes)
//   fetch(url, {
//     method: 'PUT',
//     mode: 'cors',
//     body: JSON.stringify(visitantes),
//     headers: { "Content-type": "application/json; charset=UTF-8" }
//   })

//     .then(response => response.json())
//     .then(json => {

//       alert(json.visitantes)
//     })

//   _id.value = ''
//   tipo_documento_propietario.value = ''
//   numero_documento_propietario.value = ''
//   nombre_propietario.value = ''
//   apellido_propietario.value = ''
//   fecha_nacimiento.value = ''
//   genero_propietario.value = ''
//   telefono_propietario.value = ''
//   correo.value = ''
//   propiedad.value = ''
//   estado.value = ''

// }

// const editar_visitantes = (visitantes) => {

//   console.log(visitantes._id)

//   document.getElementById('_id').value = visitantes._id
//   document.getElementById('tipo_documento_visitante').value = visitantes.tipo_documento_visitante
//   document.getElementById('numero_documento_visitante').value = visitantes.numero_documento_visitante
//   document.getElementById('nombre_visitante').value = visitantes.nombre_visitante
//   document.getElementById('apellido_visitante').value = visitantes.apellido_visitante
//   document.getElementById('genero_visitante').value = visitantes.genero_visitante
//   document.getElementById('tipo_visitante').value = visitantes.tipo_visitante
//   document.getElementById('anfitrion').value = visitantes.anfitrion
//   document.querySelector('#permiso').value = visitantes.permiso

//   document.getElementById('estado').value = visitantes.estado

// }

// const eliminar_visitante = (_id,) => {
//   console.log("si entro aqui")
//   if (confirm(`¿Está seguro de que quieres eliminar?`) == true) {

//     let visitante = {

//       _id: _id

//     }

//     console.log(visitante)

//     console.log(visitante)
//     console.log(JSON.stringify(visitante))

//     fetch(url, {

//       method: 'DELETE',
//       mode: 'cors',
//       body: JSON.stringify(visitante),
//       headers: { "Content-type": "application/json; charset=UTF-8" }

//     })
//       .then(response => response.json())
//       .then(json => {

//         alert(json.visitante)

//       })
//   }

//   location.reload();
// }

// const registrar_visitante = () => {

//   console.log('Si esta crear propietario')

//   const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
//   const numero_documento_visitante = document.querySelector('#numero_documento_visitante')
//   const nombre_visitante = document.querySelector('#nombre_visitante')
//   const apellido_visitante = document.querySelector('#apellido_visitante')
//   const genero_visitante = document.querySelector('#genero_visitante')
//   const tipo_visitante = document.querySelector('#tipo_visitante')
//   const anfitrion = document.querySelector('#anfitrion')
//   const permiso = document.querySelector('#permiso')

//   let visitantes = {

//     tipo_documento_visitante: tipo_documento_visitante.value,
//     numero_documento_visitante: numero_documento_visitante.value,
//     nombre_visitante: nombre_visitante.value,
//     apellido_visitante: apellido_visitante.value,
//     genero_visitante: genero_visitante.value,
//     tipo_visitante: tipo_visitante.value,
//     anfitrion: anfitrion.value,
//     permiso: permiso.value,

//   }

//   console.log(JSON.stringify(visitantes))

//   fetch(url, {

//     method: 'POST',
//     mode: 'cors',
//     body: JSON.stringify(visitantes),
//     headers: { "Content-type": "application/json; charset=UTF-8" }

//   })

//     .then(response => response.json())
//     .then(json => {

//       alert(json.visitantes)

//     })

//     tipo_documento_visitante.value = ''
//     numero_documento_visitante.value = ''
//     nombre_visitante.value = ''
//     apellido_visitante.value = ''
//     genero_visitante.value = ''
//     tipo_visitante.value = ''
//     anfitrion.value = ''
//     permiso.value = ''

// }

// listar_visitantes()

// const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {

//   registrar_visitante()

// })

// const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

//   actualizar_visitante();

// })
