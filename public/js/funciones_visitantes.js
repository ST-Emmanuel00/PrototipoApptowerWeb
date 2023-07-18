const url = 'https://apptower-bk.onrender.com/api/visitantes'
let fechaTemporal = new Date();
const ER_placa = /^(|N\/A|[A-Z]{3}\d{3})$/
const ER_telefono = /^\d{10}$/
const ER_nombre = /^[A-Za-z\s]+$/
const ER_apellido = /^[A-Za-z\s]+$/
const ER_Ndocumento= /^(?:\d{8}|\d{10}|[A-Z]\d{6,7}|[\w\d]{1,10})$/

const listar_visitantes = async () => {

  console.log('Si estas dentro visitantes')

  let body = document.getElementById('contenido_visitantes')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_visitantes = data.visitantes
        lista_visitantes.map((visitante, item) => {


          (visitante.permiso == 'PERMITIDO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'


          mensaje += `<tr>


                <td>${item + 1}</td>
                <td>${visitante.tipo_documento_visitante}</td>
                <td>${visitante.numero_documento_visitante}</td>
                <td>${visitante.nombre_visitante}</td>
                <td>${visitante.apellido_visitante}</td>
                <td>${18 + item}</td>
                <td>${3206685816 + item}</td>
                <td>${visitante.genero_visitante}</td>
                <td>${visitante.tipo_visitante}</td>
                <td>N/A</td>
                <td><span class="badge ${resaltato}">${visitante.permiso}</span></td>
                <td>${fechaTemporal.getDate() + "/" + fechaTemporal.getMonth() + "/"
            + fechaTemporal.getFullYear() + " - " + fechaTemporal.getHours() + ":"
            + fechaTemporal.getMinutes() + ":" + fechaTemporal.getSeconds()}</td>

                <td>                  
                  <a href="#" data-toggle="modal" data-target="#eventModal" 
                  onclick='editar_visitantes(${JSON.stringify(visitante)})'>
                    <span class="fe fe-24 fe-edit">
                  </a>

                  <a href="#" data-toggle="modal" data-target="#modalCrear">
                  <span class="fe fe-24 fe-log-in"></span></a>
                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}
let telefono = document.querySelector('#telefono')
if (telefono) {
  telefono.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_telefono.test(telefono.value)) {
      telefono.classList.remove("border-success");
      telefono.classList.add("border-danger");
    } else {
      telefono.classList.remove("border-danger");
      telefono.classList.add("border-success");
    }
  });
}
let placa = document.querySelector('#placa')
if (placa) {
  placa.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_placa.test(placa.value)) {
      placa.classList.remove("border-success");
      placa.classList.add("border-danger");
    } else {
      placa.classList.remove("border-danger");
      placa.classList.add("border-success");
    }
  });
}

const actualizar_visitante = async () => {

  console.log('lo intentaste bro')
  const telefono = document.querySelector('#telefono')
  const placa = document.querySelector('#placa')

  // let visitante = {
  //   _id: document.getElementById('_id').value,
  //   tipo_documento_visitante: tipo_documento_visitante.value,
  //   numero_documento_visitante: numero_documento_visitante.value,
  //   nombre_visitante: nombre_visitante.value,
  //   apellido_visitante: apellido_visitante.value,
  //   genero_visitante: genero_visitante.value,
  //   tipo_visitante: tipo_visitante.value,
  //   anfitrion: anfitrion.value,
  //   permiso: permiso.value,

  // }

  // Validaciones POST espacios 

  

  try {
    if (telefono.value === '' || placa.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_telefono.test(telefono.value)) {

      throw 'El telefono de visitante no es válido';


    } else if (!ER_placa.test(placa.value)) {

      throw 'La placa no es válido';


    } else {
      Swal.fire({

        icon: 'success',
        title: '¡Éxito!',
        text: 'Actualizacion existosa',
        showCancelButton: false,
        showConfirmButton: true,
        allowOutsideClick: false
      }).then(() => {
        location.reload(); // Recargar la página
      });

      // fetch(url, {
      //   method: 'PUT',
      //   mode: 'cors',
      //   body: JSON.stringify(visitante),
      //   headers: { "Content-type": "application/json; charset=UTF-8" }

      // })

        // .then(response => response.json())
        // .then(json => {
        //   Swal.fire({

        //     icon: 'success',
        //     title: '¡Éxito!',
        //     text: json.visitantes,
        //     showCancelButton: false,
        //     showConfirmButton: true,
        //     allowOutsideClick: false

        //   }).then(() => {

        //     window.location.href = 'visitantes'

        //   })
        // })
        // .catch(error => {
        //   Swal.fire({

        //     icon: 'error',
        //     title: 'Tienes un problema',
        //     text: error

        //   });
        // });
    }
  } catch (error) {

    Swal.fire({

      icon: 'error',
      title: 'Tienes un problema',
      text: error

    });
  }



}

const editar_visitantes = (visitantes) => {

  console.log(visitantes._id)

  document.getElementById('_id').value = visitantes._id
  document.getElementById('tipo_documento_visitante').value = visitantes.tipo_documento_visitante
  document.getElementById('numero_documento_visitante').value = visitantes.numero_documento_visitante
  document.getElementById('nombre_visitante').value = visitantes.nombre_visitante
  document.getElementById('apellido_visitante').value = visitantes.apellido_visitante
  document.getElementById('genero_visitante').value = visitantes.genero_visitante
  document.getElementById('tipo_visitante').value = visitantes.tipo_visitante
  document.getElementById('anfitrion').value = visitantes.anfitrion
  document.querySelector('#permiso').value = visitantes.permiso

  document.getElementById('estado').value = visitantes.estado

}



// const eliminar_visitante = (_id,) => {
//   Swal.fire({

//     title: '¿Está seguro que quieres eliminar este item?',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Sí',
//     cancelButtonText: 'Cancelar'

//   }).then((result) => {

//     if (result.isConfirmed) {
//       // Captura de valores de datos enviados desde el formulario
//       let visitante = {

//         _id: _id

//       };

//       fetch(url, {

//         method: 'DELETE',
//         mode: 'cors',
//         body: JSON.stringify(visitante),
//         headers: { "Content-type": "application/json; charset=UTF-8" }

//       })
//         .then(response => response.json())
//         .then(json => {

//           if (json.visitante) {

//             Swal.fire({
//               icon: 'error',
//               title: 'Error',
//               text: json.mensaje
//             });

//           } else {

//             Swal.fire({
//               icon: 'success',
//               title: 'Eliminación Exitosa',
//               text: 'Se eliminó la reserva correctamente',
//             }).then(() => {

//               location.reload();

//             });

//           }
//         });
//     }
//   });


// }



//Variables para la creacion de un visitante
const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
const numero_documento_visitante = document.querySelector('#numero_documento_visitante')
const nombre_visitante = document.querySelector('#nombre_visitante')
const apellido_visitante = document.querySelector('#apellido_visitante')
const fechaNacimiento = document.querySelector('#fechaNacimiento')
const genero_visitante = document.querySelector('#genero_visitante')
const telefonoC = document.querySelector('#telefonoC')
const placaC = document.querySelector('#placaC')

//Validadores campo a campo

if (placaC) {
  placaC.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_placa.test(placaC.value)) {
      placaC.classList.remove("border-success");
      placaC.classList.add("border-danger");
    } else {
      placaC.classList.remove("border-danger");
      placaC.classList.add("border-success");
    }
  });
}
if (telefonoC) {
  telefonoC.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_telefono.test(telefonoC.value)) {
      telefonoC.classList.remove("border-success");
      telefonoC.classList.add("border-danger");
    } else {
      telefonoC.classList.remove("border-danger");
      telefonoC.classList.add("border-success");
    }
  });
}
if (nombre_visitante) {
  nombre_visitante.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_nombre.test(nombre_visitante.value)) {
      nombre_visitante.classList.remove("border-success");
      nombre_visitante.classList.add("border-danger");
    } else {
      nombre_visitante.classList.remove("border-danger");
      nombre_visitante.classList.add("border-success");
    }
  });
}
if (apellido_visitante) {
  apellido_visitante.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_apellido.test(apellido_visitante.value)) {
      apellido_visitante.classList.remove("border-success");
      apellido_visitante.classList.add("border-danger");
    } else {
      apellido_visitante.classList.remove("border-danger");
      apellido_visitante.classList.add("border-success");
    }
  });
}
if (numero_documento_visitante) {
  numero_documento_visitante.addEventListener("blur", function () {
    console.log("ingresa")
    

    if (!ER_Ndocumento.test(numero_documento_visitante.value)) {
      numero_documento_visitante.classList.remove("border-success");
      numero_documento_visitante.classList.add("border-danger");
    } else {
      numero_documento_visitante.classList.remove("border-danger");
      numero_documento_visitante.classList.add("border-success");
    }
  });
}

if (fechaNacimiento) {
  fechaNacimiento.addEventListener("blur", function () {
    let fechaIngresada = new Date(fechaNacimiento.value);
    let fechaAyer = new Date();
    fechaAyer.setDate(fechaAyer.getDate() - 1); // Obtener la fecha de ayer

    // Establecer las horas, minutos, segundos y milisegundos a cero en ambas fechas
    fechaIngresada.setHours(0, 0, 0, 0);
    fechaAyer.setHours(0, 0, 0, 0);

    // Comparar solo el día, mes y año
    if (
      !fechaNacimiento.value ||
      isNaN(fechaIngresada) ||
      fechaIngresada >= fechaAyer
    ) {
      fechaNacimiento.classList.remove("border-success");
      fechaNacimiento.classList.add("border-danger");
    } else {
      fechaNacimiento.classList.remove("border-danger");
      fechaNacimiento.classList.add("border-success");
    }
  });
}

const registrar_visitante = () => {

  console.log('Si esta crear propietario')





  // let visitante = {

  //   tipo_documento_visitante: tipo_documento_visitante.value,
  //   numero_documento_visitante: numero_documento_visitante.value,
  //   nombre_visitante: nombre_visitante.value,
  //   apellido_visitante: apellido_visitante.value,
  //   genero_visitante: genero_visitante.value,
  //   tipo_visitante: tipo_visitante.value,
  //   anfitrion: anfitrion.value,
  //   permiso: permiso.value,

  // }

  // Validaciones POST espacios 

  

  try {

    if (tipo_documento_visitante.value === '' || numero_documento_visitante.value === '' || nombre_visitante.value === '' ||
      apellido_visitante.value === ''|| fechaNacimiento==='' || genero_visitante.value === '' || telefonoC.value === '' ) {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_visitante.value)) {

      throw 'El nombre de visitante no es válido';


    } else if (!ER_apellido.test(apellido_visitante.value)) {

      throw 'El apellido de visitante no es válido';


    } else if (!ER_Ndocumento.test(numero_documento_visitante.value)) {

      throw 'El numero de documento no es válido';


    } else if (!ER_telefono.test(telefonoC.value)) {

      throw 'El numero de telefono no es válido';


    } else if (!ER_placa.test(placaC.value)) {

      throw 'La placa no es válida';


    } else {

    //   fetch(url, {
    //     method: 'POST',
    //     mode: 'cors',
    //     body: JSON.stringify(visitante),
    //     headers: { "Content-type": "application/json; charset=UTF-8" }

    //   })

    //     .then(response => response.json())
    //     .then(json => {
    //       Swal.fire({

    //         icon: 'success',
    //         title: '¡Éxito!',
    //         text: json.visitantes,
    //         showCancelButton: false,
    //         showConfirmButton: true,
    //         allowOutsideClick: false

    //       }).then(() => {

    //         window.location.href = 'visitantes'

    //       })
    //     })
    //     .catch(error => {
    //       Swal.fire({

    //         icon: 'error',
    //         title: 'Tienes un problema',
    //         text: error

    //       });
    //     });
    Swal.fire({

             icon: 'success',
              title: '¡Éxito!',
              text: 'Creacion exitosa',
              showCancelButton: false,
              showConfirmButton: true,
              allowOutsideClick: false
  
           }).then(() => {
  
            window.location.href = 'visitantes'
  
          })
    }
  } catch (error) {

    Swal.fire({

      icon: 'error',
      title: 'Tienes un problema',
      text: error

    });
  }



}



listar_visitantes()


if (document.querySelectorAll('#boton_crear')){
const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {

  registrar_visitante()

})
}

// const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

//   actualizar_visitante();

// })

