const url = 'http://localhost:8087/api/propietarios'

const listar_propietarios = async () => {

  console.log('Si estas dentro propietarios')

  let body = document.getElementById('contenido_propietarios')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_propietarios = data.propietarios
        lista_propietarios.map((propietarios, item) => {


          (propietarios.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'


          mensaje += `<tr>

        
                <td>${item + 1}</td>
                <td>${propietarios.tipo_documento_propietario}</td>
                <td>${propietarios.numero_documento_propietario}</td>
                <td>${propietarios.nombre_propietario}</td>
                <td>${propietarios.apellido_propietario}</td>
                <td>${propietarios.fecha_nacimiento}</td>
                <td>${propietarios.genero_propietario}</td>
                <td>${propietarios.telefono_propietario}</td>
                <td>${propietarios.correo}</td>

                <td>${propietarios.propiedad}</td>
                


                <td><span class="badge ${resaltato}">${propietarios.estado}</span></td>

                <td>


                    <a class="waves-effect waves-light btn modal-trigger" href="#modal_editar" onclick = 'editar_propietario(${JSON.stringify(propietarios)})'><i class = "fe fe-edit fe-24"></i></a>
                    <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick = "eliminar_residente('${propietarios._id}')"><i class = "fe fe-delete fe-24"></i></a>



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

const editar_propietario = (propietarios) => {

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




listar_propietarios()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {



  registrar_propietario()


})

const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

  actualizar_propietario();
})




