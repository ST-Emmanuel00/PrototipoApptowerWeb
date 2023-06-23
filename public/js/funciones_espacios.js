const url = 'https://apptower-bk.onrender.com/api/espacios'

const listar_espacios = async () => {

  console.log('Si estas dentro espacios')

  let body = document.getElementById('contenido_espacios')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_espacios = data.espacios
        lista_espacios.map((espacio, item) => {


          (espacio.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'


          mensaje += `<tr>

        
                <td>${item + 1}</td>
                <td>${espacio.tipo_espacio}</td>
                <td>${espacio.nombre_espacio}</td>
                <td>${espacio.area}</td>
                <td>${espacio.capacidad}</td>
                           


                <td><span class="badge ${resaltato}">${espacio.estado}</span></td>

                <td>


                    <a class="waves-effect waves-light btn modal-trigger" href="#modal_editar" onclick = 'editar_espacio(${JSON.stringify(espacio)})'><i class = "fe fe-edit fe-24"></i></a>
                    <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick = "eliminar_espacio('${espacio._id}')"><i class = "fe fe-delete fe-24"></i></a>



                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_espacio = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_espacio = document.querySelector('#tipo_espacio')
  const nombre_espacio = document.querySelector('#nombre_espacio')
  const area = document.querySelector('#area')
  const capacidad = document.querySelector('#capacidad')
  const estado = document.querySelector('#estado')


  let espacios = {
    _id: document.getElementById('_id').value,
    tipo_espacio: tipo_espacio.value,
    tipo_espacio: tipo_espacio.value,
    nombre_espacio: nombre_espacio.value,
    area: area.value,
    capacidad: capacidad.value,
    estado: estado.value,


  }

  console.log(espacios)
  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(espacios),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

    .then(response => response.json()) //La respuesta del método POST de la API
    .then(json => {

      alert(json.espacios)
    })

  _id.value = ''
  tipo_espacio.value = ''
  nombre_espacio.value = ''
  area.value = ''
  capacidad.value = ''
  estado.value = ''



}

const editar_espacio = (espacios) => {

  console.log(espacios._id)

  document.getElementById('_id').value = espacios._id
  document.getElementById('tipo_espacio').value = espacios.tipo_espacio
  document.getElementById('nombre_espacio').value = espacios.nombre_espacio
  document.getElementById('area').value = espacios.area
  document.getElementById('capacidad').value = espacios.capacidad
  document.getElementById('estado').value = espacios.estado


}



const eliminar_espacio = (_id,) => {
  console.log("si entro aqui")
  if (confirm(`¿Está seguro de que quieres eliminar?`) == true) {

    let espacios = {

      _id: _id

    }

    console.log(espacios)

    console.log(espacios)
    console.log(JSON.stringify(espacios))

    fetch(url, {

      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(espacios),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    })
      .then(response => response.json()) //La respuesta del método POST de la API
      .then(json => {

        alert(json.espacios)

      })
  }

  location.reload();
}




const registrar_espacio = () => {

  console.log('Si esta crear espacio')

  const tipo_espacio = document.querySelector('#tipo_espacio')
  const nombre_espacio = document.querySelector('#nombre_espacio')
  const area = document.querySelector('#area')
  const capacidad = document.querySelector('#capacidad')
  const estado = document.querySelector('#estado')


  let espacio = {

    tipo_espacio: tipo_espacio.value,
    nombre_espacio: nombre_espacio.value,
    area: area.value,
    capacidad: capacidad.value,
    estado: estado.value,


  }

  console.log(JSON.stringify(espacio))

  fetch(url, {

    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(espacio),
    headers: { "Content-type": "application/json; charset=UTF-8" }

  })

    .then(response => response.json()) //La respuesta del método POST de la API
    .then(json => {

      alert(json.espacios)

    })

  tipo_espacio.value = ''
  nombre_espacio.value = ''
  area.value = ''
  capacidad.value = ''
  estado.value = ''


}


listar_espacios()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {



  registrar_espacio()


})

// const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

//   actualizar_visitante();

// })




