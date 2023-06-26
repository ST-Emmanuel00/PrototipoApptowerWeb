const url = 'http://localhost:3000/api/reservas';

// Función para listar las reservas
const listar_reservas = async () => {
  console.log('Si estás dentro');

  let body = document.getElementById('contenido_reservas');

  if (body) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        console.log(data);

        if (Array.isArray(data.reservas)) { // <-- Actualizar la verificación del objeto "reservas"
          const mensajes = data.reservas.map((reserva) => { // <-- Acceder al arreglo "reservas"
            return `<tr>
              <td>${reserva.tipo_espacio}</td>
              <td>${reserva.espacio}</td>
              <td>${reserva.propietario}</td>
              <td>${reserva.fecha_Peticion}</td>
              <td>${reserva.fecha_Reserva}</td>
              <td>${reserva.vehiculo}</td>
              <td>${reserva.parqueadero}</td>
              <td>${reserva.personas}</td>
              <td>${reserva.estado}</td>
              <td>
                <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acciones</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#eventModal">Editar</a>
                <buttom class="dropdown-item" id="boton_eliminar" href="#">Eliminar</buttom>
                </div>
              </td>
            </tr>`;
          });

          body.innerHTML = mensajes.join('');
        } else {
          console.error('El objeto "reservas" no es un arreglo válido.'); // <-- Mostrar un error si "reservas" no es un arreglo
        }
      } else {
        console.error('Error al obtener las reservas:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
};


// Función para crear una reserva
const crearReserva = async () => {
  try {
    const tipo_espacio = document.getElementById('tipo_espacio').value;
    const espacio = document.getElementById('espacio').value;
    const propietario = document.getElementById('propietario').value;
    const fecha_Peticion = document.getElementById('fecha_Peticion').value;
    const fecha_Reserva = document.getElementById('fecha_Reserva').value;
    const vehiculo = document.getElementById('vehiculo').value;
    const parqueadero = document.getElementById('parqueadero').value;
    const personas = document.getElementById('personas').value;
    const estado = 'Pendiente';

    const nuevaReserva = {
      tipo_espacio,
      espacio,
      propietario,
      fecha_Peticion,
      fecha_Reserva,
      vehiculo,
      parqueadero,
      personas,
      estado,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaReserva),
    });

    if (response.ok) {
      console.log('Reserva creada exitosamente');
      // Actualizar la lista de reservas
      listar_reservas();
    } else {
      console.error('Error al crear la reserva:', response.status);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

// Función para editar una reserva
async function actualizarReserva() {
  const datosFormulario = obtenerDatosFormulario();

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosFormulario)
    });

    if (response.ok) {
      // La reserva se actualizó correctamente
      alert('La reserva se actualizó correctamente.');
      location.reload(); // Recargar la página o realizar otras acciones necesarias
    } else {
      // Error al actualizar la reserva
      alert('Hubo un error al actualizar la reserva.');
    }
  } catch (error) {
    // Error de conexión o cualquier otro error
    alert('Hubo un error al realizar la solicitud.');
    console.error(error);
  }
}

function obtenerDatosFormulario() {
  const tipoEspacio = document.getElementById('tipo_espacio').value;
  const espacio = document.getElementById('espacio').value;
  const propietario = document.getElementById('propietario').value;
  const fechaPeticion = document.getElementById('fecha_Peticion').value;
  const fechaReserva = document.getElementById('fecha_Reserva').value;
  const vehiculo = document.getElementById('vehiculo').value;
  const parqueadero = document.getElementById('parqueadero').value;
  const personas = document.getElementById('personas').value;

  return {
    tipoEspacio,
    espacio,
    propietario,
    fechaPeticion,
    fechaReserva,
    vehiculo,
    parqueadero,
    personas
  };
}


// Función para eliminar una reserva
async function eliminarReserva() {
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      });

      if (response.ok) {
        // La reserva se eliminó correctamente
        alert('La reserva se eliminó correctamente.');
        location.reload(); // Recargar la página o realizar otras acciones necesarias
      } else {
        // Error al eliminar la reserva
        alert('Hubo un error al eliminar la reserva.');
      }
    } catch (error) {
      // Error de conexión o cualquier otro error
      alert('Hubo un error al realizar la solicitud.');
      console.error(error);
    }
  }


  listar_reservas();

document.getElementById('boton_actualizar').addEventListener('click', actualizarReserva);
document.getElementById('boton_eliminar').addEventListener('click', eliminarReserva);
