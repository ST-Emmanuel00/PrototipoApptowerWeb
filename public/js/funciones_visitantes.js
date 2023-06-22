const url = 'http://localhost:8087/api/visitantes'

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
                <td>${visitante.genero_visitante}</td>
                <td>${visitante.tipo_visitante}</td>
                <td>${visitante.anfitrion}</td>                


                <td><span class="badge ${resaltato}">${visitante.permiso}</span></td>

                <td>


                    <a class="waves-effect waves-light btn modal-trigger" href="#modal_editar" onclick = 'editar_visitantes(${JSON.stringify(visitante)})'><i class = "fe fe-edit fe-24"></i></a>
                    <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick = "eliminar_residente('${visitante._id}')"><i class = "fe fe-delete fe-24"></i></a>



                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_propietario = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario')
  const numero_documento_propietario = document.querySelector('#numero_documento_propietario')
  const nombre_propietario = document.querySelector('#nombre_propietario')
  const apellido_propietario = document.querySelector('#apellido_propietario')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_propietario = document.querySelector('#genero_propietario')
  const telefono_propietario = document.querySelector('#telefono_propietario')
  const correo = document.querySelector('#correo')
  const propiedad = document.querySelector('#propiedad')
  const estado = document.querySelector('#estado')

  let propietarios = {
    _id: document.getElementById('_id').value,
    tipo_documento_propietario: tipo_documento_propietario.value,
    numero_documento_propietario: numero_documento_propietario.value,
    nombre_propietario: nombre_propietario.value,
    apellido_propietario: apellido_propietario.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_propietario: genero_propietario.value,
    telefono_propietario: telefono_propietario.value,
    correo: correo.value,
    propiedad: propiedad.value,
    estado: estado.value
  }

  console.log(propietarios)
  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(propietarios),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

    .then(response => response.json()) //La respuesta del método POST de la API
    .then(json => {

      alert(json.propietarios)
    })

  _id.value = ''
  tipo_documento_propietario.value = ''
  numero_documento_propietario.value = ''
  nombre_propietario.value = ''
  apellido_propietario.value = ''
  fecha_nacimiento.value = ''
  genero_propietario.value = ''
  telefono_propietario.value = ''
  correo.value = ''
  propiedad.value = ''
  estado.value = ''


}

const editar_visitantes = (propietarios) => {

  console.log(propietarios._id)

  document.getElementById('_id').value = propietarios._id
  document.getElementById('tipo_documento_propietario').value = propietarios.tipo_documento_propietario
  document.getElementById('numero_documento_propietario').value = propietarios.numero_documento_propietario
  document.getElementById('nombre_propietario').value = propietarios.nombre_propietario
  document.getElementById('apellido_propietario').value = propietarios.apellido_propietario
  document.getElementById('fecha_nacimiento').value = propietarios.fecha_nacimiento
  document.getElementById('genero_propietario').value = propietarios.genero_propietario
  document.getElementById('telefono_propietario').value = propietarios.telefono_propietario
  document.getElementById('correo').value = propietarios.correo
  document.querySelector('#propiedad').value = propietarios.propiedad
  
  document.getElementById('estado').value = propietarios.estado

}



const eliminar_residente = (_id,) => {
  console.log("si entro aqui")
  if (confirm(`¿Está seguro de que quieres eliminar?`) == true) {

    let visitante = {

      _id: _id

    }

    console.log(visitante)

    console.log(visitante)
    console.log(JSON.stringify(visitante))

    fetch(url, {

      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(visitante),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    })
      .then(response => response.json()) //La respuesta del método POST de la API
      .then(json => {

        alert(json.visitante)

      })
  }

  location.reload();
}




const registrar_propietario = () => {

  console.log('Si esta propietario')

  const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario')
  const numero_documento_propietario = document.querySelector('#numero_documento_propietario')
  const nombre_propietario = document.querySelector('#nombre_propietario')
  const apellido_propietario = document.querySelector('#apellido_propietario')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_propietario = document.querySelector('#genero_propietario')
  const telefono_propietario = document.querySelector('#telefono_propietario')
  const correo = document.querySelector('#correo')
  const propiedad = document.querySelector('#propiedad')
  const estado = document.querySelector('#estado')

  let propietarios = {

    tipo_documento_propietario: tipo_documento_propietario.value,
    numero_documento_propietario: numero_documento_propietario.value,
    nombre_propietario: nombre_propietario.value,
    apellido_propietario: apellido_propietario.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_propietario: genero_propietario.value,
    telefono_propietario: telefono_propietario.value,
    correo: correo.value,
    propiedad: propiedad.value,
    estado: estado.value

  }

  console.log(JSON.stringify(propietarios))

  fetch(url, {

    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(propietarios),
    headers: { "Content-type": "application/json; charset=UTF-8" }

  })

    .then(response => response.json()) //La respuesta del método POST de la API
    .then(json => {

      alert(json.propietarios)

    })

    tipo_documento_propietario.value = ''
    numero_documento_propietario.value = ''
    nombre_propietario.value = ''
    apellido_propietario.value = ''
    fecha_nacimiento.value = ''
    genero_propietario.value = ''
    telefono_propietario.value = ''
    correo.value = ''
    propiedad.value = ''
    estado.value = ''

}




listar_visitantes()

// const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {



//   registrar_propietario()


// })

// const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

//   actualizar_propietario();

// })




