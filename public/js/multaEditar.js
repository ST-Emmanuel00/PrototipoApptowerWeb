document.addEventListener("DOMContentLoaded", function () {
  console.log("holi");
  var fechaLE = document.getElementById("fechaLE");
  let aprobarbtn = document.getElementById("aprobar");
  let botoncito = document.getElementById("botoncito");

  if (fechaLE) {
    fechaLE.addEventListener("blur", function () {
      console.log("ingresa")
      var fechaLEValue = fechaLE.value;
      var fechaLimite = new Date(fechaLEValue);
      var fechaActual = new Date();
      var fechaValida = fechaLimite > fechaActual;

      if (fechaLEValue === "" || !fechaValida) {
        fechaLE.classList.remove("border-success");
        fechaLE.classList.add("border-danger");
      } else {
        fechaLE.classList.remove("border-danger");
        fechaLE.classList.add("border-success");
      }
    });
  }
  botoncito.addEventListener("click", function(){
    try{
      
      if(fechaLE.classList.contains('border-danger')||fechaLE==""){
        throw new Error("Fecha no valida o campo vacio")
      }
      Swal.fire(
        'Proceso exitoso',
        'Cambios guardados',
        'success'

      )
    }catch(e){
      Swal.fire(
        'Error',
        e.message,
        'error'
      )
    }
  })
    

  aprobarbtn.addEventListener("click", function (e) {
    Swal.fire({
      title: "Aprobar",
      text: "¿Estas seguro de aprobar el registro?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Aprobado",
          "El pago de la multa ha sido verificado con exito",
          "success"
        );
      }
    });
  });
});
