const boton_crear = document.getElementById('boton_crear');
boton_crear.addEventListener('click', function(e){
    e.preventDefault();
    console.log('holi')
    const documento = document.getElementById('numero_documento').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const regexdocu = /^[0-9]{10}$/
    const regexnombre = /^[a-zA-Z]+\s?[a-zA-Z]*$/
    const regexapellido = /^[a-zA-Z]+\s?[a-zA-Z]*$/
    const regexedad = /^[1-9]?[0-9]?[0-9]$/

        function validarDocu(){
            try{
            if(documento == ""){
                throw new Error("El campo no debe ir vacio");
            }
            else if(regexdocu.test(documento)==false){
                throw new Error("El documento no es valido");
            }
        }catch(e){
            $('#FB_documento').innerHTML = e.message;
        }

        }
        function validarNombre(){
            try{
            if(nombre == ""){
                throw new Error("El campo no debe ir vacio");
            }
            else if(regexdocu.test(nombre)==false){
                throw new Error("El nombre no es valido");
            }
        }catch(e){
            $('#FB_nombre').innerHTML = e.message;
        }

        }
        function validarDocu(){
            try{
            if(documento == ""){
                throw new Error("El campo no debe ir vacio");
            }
            else if(regexdocu.test(documento)==false){
                throw new Error("El documento no es valido");
            }
        }catch(e){
            $('#FB_documento').innerHTML = e.message;
        }

        }
        function validarDocu(){
            try{
            if(documento == ""){
                throw new Error("El campo no debe ir vacio");
            }
            else if(regexdocu.test(documento)==false){
                throw new Error("El documento no es valido");
            }
        }catch(e){
            $('#FB_documento').innerHTML = e.message;
        }

        }
        
        if(regexnombre.test(nombre)==false){
            throw new Error("El nombre no es valido");
        }
        else if(regexapellido.test(apellido)==false){
            throw new Error("El apellido no es valido");
        }
        else if(regexedad.test(edad)==false){
            throw new Error("La edad no es valida");
        }

        Swal.fire('Éxito', 'Visitante Registrado con exito', 'success');
});