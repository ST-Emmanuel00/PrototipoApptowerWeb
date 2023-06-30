// console.log("Hola")

document.addEventListener('DOMContentLoaded', function(){
  let fechaL = document.getElementById('fechaL')
  let fechaActual = document.querySelector('#fechaC');
  let botonGenerar= document.querySelector('#botonGenerar');
  let file = document.querySelector('#customFile');
  const datos=[
      {apartamento: 404,
          residente: "Paula Gomez"},
          {
              apartamento: 505,
              residente: "Jonathan Gimenez"
          }
  ]
  
  const datosM = [
      { 
          motivo: "Mal uso de estacionamiento",
          descripcion: "Se reportarion varias incidencias en parqueo por mas de 3 dias en estacionamiento de visitantes"   
      },
  
      {
          motivo: "Aqui otro motivo",
          descripcion: "Se crea otra descripcion"
      }
  ]
  
  // Función para actualizar el campo de entrada del residente
  function actualizarResidente() {
      const apartamentoSelect = document.getElementById("apartamento");
      const residenteInput = document.getElementById("residente");
      
      // Obtener el apartamento seleccionado
      const apartamentoSeleccionado = apartamentoSelect.value;
      
      // Buscar el objeto de datos correspondiente al apartamento seleccionado
      const seleccionado = datos.find(dato => dato.apartamento == apartamentoSeleccionado);
      
      // Actualizar el valor del campo de entrada del residente
      if (seleccionado) {
        residenteInput.value = seleccionado.residente;
      } else {
        residenteInput.value = "";
      }
    }
  
    // Asignar el evento onchange al select de apartamento desde el código JavaScript
    const apartamentoSelect = document.getElementById("apartamento");
    apartamentoSelect.addEventListener("change", actualizarResidente);
  
    // Inicializar el select con las opciones del array de datos
    datos.forEach(dato => {
      const option = document.createElement("option");
      option.value = dato.apartamento;
      option.text = dato.apartamento;
      apartamentoSelect.appendChild(option);
    });
    
    function actualizarDescripcion() {
      const motivoSelect = document.getElementById("motivo");
      const descripcionTextarea = document.getElementById("descripcion");
      
      // Obtener el motivo seleccionado
      const motivoSeleccionado = motivoSelect.value;
      
      // Buscar el objeto de datos correspondiente al motivo seleccionado
      const seleccionado = datosM.find(dato => dato.motivo === motivoSeleccionado);
      
      // Actualizar el valor del campo de texto de la descripción
      if (seleccionado) {
        descripcionTextarea.value = seleccionado.descripcion;
      } else {
        descripcionTextarea.value = "";
      }
    }
  
    // Asignar el evento onchange al select del motivo desde el código JavaScript
    const motivoSelect = document.getElementById("motivo");
    motivoSelect.addEventListener("change", actualizarDescripcion);
  
    // Inicializar el select con las opciones del array de datos
    datosM.forEach(dato => {
      const option = document.createElement("option");
      option.value = dato.motivo;
      option.text = dato.motivo;
      motivoSelect.appendChild(option);
    });
  
    fechaActual.value='2023-05-05'
    console.log(fechaActual)
  
    if(fechaL){
    fechaL.addEventListener('blur', function(){
      console.log("buneas")
      var fechaLValue = fechaL.value;
        var fechaLimite = new Date(fechaLValue);
        var fechaActual = new Date();
        var fechaValida = fechaLimite > fechaActual;
  
        if (fechaLValue === "" || !fechaValida) {
          fechaL.classList.remove("border-success");
          fechaL.classList.add("border-danger");
        } else {
          fechaL.classList.remove("border-danger");
          fechaL.classList.add("border-success");
        }
    });
  }
  
  botonGenerar.addEventListener('click', function(){
      try{
      if(fechaL.value.length==0 || fechaL.classList.contains("border-danger") || file.length == 0){
          throw new Error("No se aceptan el campos vacios")
      }
      Swal.fire(
          'Exito',
          'Se ha registrado la multa',
          'success'
      )
  }catch(e){
      Swal.fire(
          'Error',
          e.message,
          'error'
      )
  }
  });
  
  })