const url = 'http://localhost:8087/api/residentes'

const listar_residentes = async () => {

  console.log('Si estas dentro')

  let body = document.getElementById('contenido_residentes')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_residentes = data.residentes
        lista_residentes.map((residentes) => {


          (residentes.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'


          mensaje += `<tr>

        

                <td>${residentes.tipo_documento_residente}</td>
                <td>${residentes.numero_documento_residente}</td>
                <td>${residentes.nombre_residente}</td>
                <td>${residentes.apellido_residente}</td>
                <td>${residentes.fecha_nacimiento}</td>
                <td>${residentes.genero_residente}</td>
                <td>${residentes.telefono_residente}</td>
                <td>${residentes.correo}</td>

                <td>${residentes.tipo_residente}</td>
                <td>${residentes.residencia}</td>
                <td>${residentes.habita}</td>
                

                <td>${residentes.fecha_inicio}</td>
                <td>${residentes.fecha_fin}</td>


                <td><span class="badge ${resaltato}">${residentes.estado}</span></td>

                <td>

                  <button class="btn btn-sm dropdown-toggle more-horizontal" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="text-muted sr-only">Acciones</span>
                  </button>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Editar</a>
                    <a class="dropdown-item" href="#">Eliminar</a>

                  </div>

                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
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

    .then(response => response.json()) //La respuesta del método POST de la API
    .then(json => {

      alert(json.residentes)

    })

}




listar_residentes()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {

  
    
    registrar_residente()

  
})




