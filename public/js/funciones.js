const url = 'http://localhost:8087/api/residentes'

const listar_residentes = async() => {

    console.log('Si estas dentro')

    let body = document.getElementById('contenido_residentes')


    if(body){

        let mensaje = ''
        

        fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let lista_residentes = data.residentes
            lista_residentes.map((residentes) => {

        
            (residentes.estado == 'ACTIVO')?resaltato = 'badge-success':resaltato = 'badge-danger'
            // (residentes.habita == true)?habita = 'SI':habita = 'NO'

                
                mensaje += `<tr>

        

                <td>${residentes.tipo_documento_residente}</td>
                <td>${residentes.numero_documento_residente}</td>
                <td>${residentes.nombre_residente}</td>
                <td>${residentes.apellido_residente}</td>
                <td>${residentes.telefono_residente}</td>
                <td>${residentes.fecha_nacimiento}</td>
                <td>${residentes.correo}</td>

                <td>${residentes.genero_residente}</td>
                <td>${residentes.tipo_residente}</td>

                <td>${residentes.habita}</td>
                <td>${residentes.residencia}</td>

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

listar_residentes()

const registrar_residente = async() =>{
    //Captura de valores de datos enviados desde el formulario
    
    let numero_documento_residente = document.querySelector('#numero_documento_residente').value
    console.log(numero_documento_residente)
    let usuario = {
        nombre: nombre,
        password: password,
        rol: rol,
        estado: estado
    }

    if((password.length >0 && confirmarPassword.length>0) && (password == confirmarPassword)){
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })
    }
    else{
        alert('El password y la confirmación del Password no coinciden. Por favor verifique')
    }
}

const boton_crear = document.querySelector('#boton_crear').addEventListener('click',(e) =>{
    e.preventDefault()
    listar_residentes()
})



const editar = (usuario) =>{
    document.getElementById('_id').value = ''
    document.getElementById('nombre').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirmarPassword').value = ''
    document.getElementById('rol').value = ''
    document.getElementById('estado').value = ''

    document.getElementById('_id').value = usuario._id
    document.getElementById('nombre').value = usuario.nombre
    document.getElementById('password').value = usuario.password
    document.getElementById('confirmarPassword').value = usuario.password
    document.getElementById('rol').value = usuario.rol
    document.getElementById('estado').value = usuario.estado
}

const actualizarUsuario = async() =>{
    //Captura de valores de datos enviados desde el formulario
    let nombre = document.getElementById('nombre').value
    let password = document.getElementById('password').value
    let confirmarPassword = document.getElementById('confirmarPassword').value
    let rol = document.getElementById('rol').value
    let estado = document.getElementById('estado').value

    let usuario = {
        _id: document.getElementById('_id').value,
        nombre: nombre,
        password: password,
        rol: rol,
        estado: estado,
        tipoModificacion: 'Unitaria'
    }

    if((password.length >0 && confirmarPassword.length>0) && (password == confirmarPassword)){
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })
    }
    else{
        alert('El password y la confirmación del Password no coinciden. Por favor verifique')
    }
}

const eliminar =(_id) => {
    if(confirm('¿Está seguro de realizar la eliminación?') == true){
            //Captura de valores de datos enviados desde el formulario
    let usuario = {
        _id: _id
    }
    
    //console.log(usuario)

       fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })     
    }
}