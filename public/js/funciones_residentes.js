const url = 'https://apptower-bk.onrender.com/api/residentes'

const listar_residentes = async () => {

  console.log('Si estas dentro')

  let body = document.getElementById('contenido_residentes')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_residentes = data.residentes
        lista_residentes.map((residentes, item) => {


          (residentes.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'

          function formato_fecha(fecha_node) {

            let fecha = new Date(fecha_node)

            var dia = fecha.getDate();
            var mes = fecha.getMonth() + 1;
            var anio = fecha.getFullYear();

            fecha_resultado = dia + '-' + mes + '-' + anio;

            return fecha_resultado
          }



          mensaje += `<tr>

        
                <td>${item + 1}</td>
                <td>${residentes.tipo_documento_residente}</td>
                <td>${residentes.numero_documento_residente}</td>
                <td>${residentes.nombre_residente}</td>
                <td>${residentes.apellido_residente}</td>
                <td>${formato_fecha(residentes.fecha_nacimiento)}</td>
                <td>${residentes.genero_residente}</td>
                <td>${residentes.telefono_residente}</td>
                <td>${residentes.correo}</td>

                <td>${residentes.tipo_residente}</td>
                <td>${residentes.residencia}</td>
                <td>${residentes.habita === true ? 'SI' : 'NO'}</td>
                

                <td>${formato_fecha(residentes.fecha_inicio)}</td>
                <td>${formato_fecha(residentes.fecha_fin)}</td>


                <td><span class="badge ${resaltato}">${residentes.estado}</span></td>

                <td>

                <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"><i class = "fe fe-more-vertical fe-24"></i>
                </button>

                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionMenuButton">

                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick="">Crear envio</button>
                    
                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick='editar_residente(${JSON.stringify(residentes)})'>Editar</button>
                    <a onclick="eliminar_residente('${residentes._id}')" class="dropdown-item" href="#">Eliminar</a>
                    <a class="dropdown-item" href="#"></a>

                  </div>

                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_residente = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_documento_residente = document.querySelector('#tipo_documento_residente')
  const numero_documento_residente = document.querySelector('#numero_documento_residente')
  const nombre_residente = document.querySelector('#nombre_residente')
  const apellido_residente = document.querySelector('#apellido_residente')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_residente = document.querySelector('#genero_residente')
  const telefono_residente = document.querySelector('#telefono_residente')
  const correo = document.querySelector('#correo')
  const tipo_residente = document.querySelector('#tipo_residente')
  const residencia = document.querySelector('#residencia')
  const habita = document.querySelector('#habita')
  const fecha_inicio = document.querySelector('#fecha_inicio')
  const fecha_fin = document.querySelector('#fecha_fin')
  const estado = document.querySelector('#estado')

  let residentes = {
    _id: document.getElementById('_id').value,
    tipo_documento_residente: tipo_documento_residente.value,
    numero_documento_residente: numero_documento_residente.value,
    nombre_residente: nombre_residente.value,
    apellido_residente: apellido_residente.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_residente: genero_residente.value,
    telefono_residente: telefono_residente.value,
    correo: correo.value,
    tipo_residente: tipo_residente.value,
    residencia: residencia.value,
    habita: habita.value,
    fecha_inicio: fecha_inicio.value,
    fecha_fin: fecha_fin.value,
    estado: estado.value,
  }

  console.log(residentes)
  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(residentes),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

    .then(response => response.json()) //La respuesta del método POST de la API
    .then(json => {

      alert(json.residentes)

      location.reload()

    })

  // _id.value = ''
  // tipo_documento_residente.value = ''
  // numero_documento_residente.value = ''
  // nombre_residente.value = ''
  // apellido_residente.value = ''
  // fecha_nacimiento.value = ''
  // genero_residente.value = ''
  // telefono_residente.value = ''
  // correo.value = ''
  // tipo_residente.value = ''
  // residencia.value = ''
  // habita.value = ''
  // fecha_inicio.value = ''
  // fecha_fin.value = ''
  // estado.value = ''


}

const editar_residente = async (residentes) => {

  console.log(residentes._id)

  document.getElementById('_id').value = residentes._id
  document.getElementById('tipo_documento_residente').value = residentes.tipo_documento_residente
  document.getElementById('numero_documento_residente').value = residentes.numero_documento_residente
  document.getElementById('nombre_residente').value = residentes.nombre_residente
  document.getElementById('apellido_residente').value = residentes.apellido_residente
  document.getElementById('fecha_nacimiento').value = residentes.fecha_nacimiento
  document.getElementById('genero_residente').value = residentes.genero_residente
  document.getElementById('telefono_residente').value = residentes.telefono_residente
  document.getElementById('correo').value = residentes.correo
  document.getElementById('tipo_residente').value = residentes.tipo_residente
  document.getElementById('residencia').value = residentes.residencia
  document.getElementById('habita').value = residentes.habita
  document.getElementById('fecha_inicio').value = residentes.fecha_inicio
  document.getElementById('fecha_fin').value = residentes.fecha_fin
  document.getElementById('estado').value = residentes.estado

}



const eliminar_residente = async (_id) => {
  console.log("si entro aqui")
  if (confirm(`¿Está seguro de que quieres eliminar?`) == true) {

    let residentes = {

      _id: _id

    }

    console.log(residentes)

    console.log(residentes)
    console.log(JSON.stringify(residentes))

    fetch(url, {

      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(residentes),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    })
      .then(response => response.json()) //La respuesta del método POST de la API
      .then(json => {

        alert(json.residentes)

        location.reload()

      })
    // 
  }




}




const registrar_residente = () => {



  const tipo_documento_residente = document.querySelector('#tipo_documento_residente')
  const numero_documento_residente = document.querySelector('#numero_documento_residente')
  const nombre_residente = document.querySelector('#nombre_residente')
  const apellido_residente = document.querySelector('#apellido_residente')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_residente = document.querySelector('#genero_residente')
  const telefono_residente = document.querySelector('#telefono_residente')
  const correo = document.querySelector('#correo')
  const tipo_residente = document.querySelector('#tipo_residente')
  const residencia = document.querySelector('#residencia')
  const habita = document.querySelector('#habita')
  const fecha_inicio = document.querySelector('#fecha_inicio')
  const fecha_fin = document.querySelector('#fecha_fin')
  const estado = document.querySelector('#estado')

  let residentes = {

    tipo_documento_residente: tipo_documento_residente.value,
    numero_documento_residente: numero_documento_residente.value,
    nombre_residente: nombre_residente.value,
    apellido_residente: apellido_residente.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_residente: genero_residente.value,
    telefono_residente: telefono_residente.value,
    correo: correo.value,
    tipo_residente: tipo_residente.value,
    residencia: residencia.value,
    habita: habita.value,
    fecha_inicio: fecha_inicio.value,
    fecha_fin: fecha_fin.value,
    estado: estado.value,

  }

  console.log(JSON.stringify(residentes))

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(residentes),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => {

      alert(json.residentes)

    })



  tipo_documento_residente.value = ''
  numero_documento_residente.value = ''
  nombre_residente.value = ''
  apellido_residente.value = ''
  fecha_nacimiento.value = ''
  genero_residente.value = ''
  telefono_residente.value = ''
  correo.value = ''
  tipo_residente.value = ''
  residencia.value = ''
  habita.value = ''
  fecha_inicio.value = ''
  fecha_fin.value = ''
  estado.value = ''

}




listar_residentes()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {

  try {

    registrar_residente()

  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Salio mal',
      footer: '<a href="">SALIO RE PAILA</a>'
    })
  }




})

const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

  console.log('hola puto')
  actualizar_residente();

})


// module.exports = {

//   registrar_residente,
//   actualizar_residente

// }

