// const {registrar_residente, actualizar_residente} = require('../js/funciones_residentes')

// const habita = document.getElementById('habita').addEventListener('change', () => {
//     const habitaValue = document.getElementById('habita').value;
//     const div_fecha_fin = document.getElementById('div_fecha_fin');

//     if (habitaValue === 'true') {
//       div_fecha_fin.style.display = 'none';
//     } else if (habitaValue === 'false') {
//       div_fecha_fin.style.display = 'block';
//     }
//   });


function validacion_genero_residente() {

    try {

        const genero_residente = document.querySelector('#genero_residente')
        const FB_genero_residente = document.querySelector('#FB_genero_residente')
        if (genero_residente.value == '') throw 'Debes selecionar un genero'
        else {

            genero_residente.style.borderColor = ''
            FB_genero_residente.innerHTML = '';
            FB_genero_residente.color = ''

        }

    } catch (error) {

        const genero_residente = document.querySelector('#genero_residente')
        const FB_genero_residente = document.querySelector('#FB_genero_residente')

        genero_residente.style.borderColor = '#900D09'
        FB_genero_residente.innerHTML = error;
        FB_genero_residente.style.color = '#900D09';

    }
}

function validacion_tipo_residente() {

    try {

        const tipo_residente = document.querySelector('#tipo_residente')
        const FB_tipo_residente = document.querySelector('#FB_tipo_residente')
        if (tipo_residente.value == '') throw 'Debes selecionar un tipo de residente'
        else {

            tipo_residente.style.borderColor = ''
            FB_tipo_residente.innerHTML = '';
            FB_tipo_residente.color = ''

        }

    } catch (error) {

        const tipo_residente = document.querySelector('#tipo_residente')
        const FB_tipo_residente = document.querySelector('#FB_tipo_residente')

        tipo_residente.style.borderColor = '#900D09'
        FB_tipo_residente.innerHTML = error;
        FB_tipo_residente.style.color = '#900D09';

    }
}

function validacion_tipo_documento_residente() {

    try {

        const tipo_documento_residente = document.querySelector('#tipo_documento_residente')
        const FB_tipo_documento = document.querySelector('#FB_tipo_documento')
        if (tipo_documento_residente.value == '') throw 'Debes selecionar un tipo de documento'
        else {

            tipo_documento_residente.style.borderColor = ''
            FB_tipo_documento.innerHTML = '';
            FB_tipo_documento.color = ''

        }

    } catch (error) {

        const tipo_documento_residente = document.querySelector('#tipo_documento_residente');
        const FB_tipo_documento = document.querySelector('#FB_tipo_documento');

        tipo_documento_residente.style.borderColor = '#900D09'
        FB_tipo_documento.innerHTML = error;
        FB_tipo_documento.style.color = '#900D09';

    }
}


function validacion_numero_documento_residente() {
    console.log('Estas en la validacion de documento residentes')
    try {

        const ER_numero_documento = /^[0-9]{8,}$/

        const numero_documento = document.querySelector('#numero_documento_residente');
        const FB_documento = document.querySelector('#FB_documento');

        if (ER_numero_documento.test(numero_documento.value) == true) {

            numero_documento.style.borderColor = ''
            FB_documento.innerHTML = '';
            FB_documento.color = ''

        }

        else throw 'El numero de documento tiene mas digitos y no tiene letras';



    } catch (error) {

        const numero_documento = document.querySelector('#numero_documento_residente');
        const FB_documento = document.querySelector('#FB_documento');

        numero_documento.style.borderColor = '#900D09'
        FB_documento.innerHTML = error;
        FB_documento.style.color = '#900D09';


    }

}
function validacion_nombre_residente() {

    try {

        const ER_nombre = /^[A-Za-z\s]+$/

        const nombre = document.querySelector('#nombre_residente');
        const FB_nombre = document.querySelector('#FB_nombre');

        nombre.value = nombre.value.toUpperCase()

        if (ER_nombre.test(nombre.value)) {

            nombre.style.borderColor = ''

            FB_nombre.innerHTML = '';
            FB_nombre.style.color = ''
        }

        else throw 'El nombre no debe tener numeros ni simbolos';

    } catch (error) {

        const nombre = document.querySelector('#nombre_residente');
        const FB_nombre = document.querySelector('#FB_nombre');

        FB_nombre.innerHTML = error;
        nombre.style.borderColor = '#900D09'

        FB_nombre.style.color = '#900D09'

    }

}

function validacion_apellido_residente() {

    try {

        const ER_apellido = /^[A-Za-z\s]+$/

        const apellido = document.querySelector('#apellido_residente');
        const FB_apellido = document.querySelector('#FB_apellido');

        apellido.value = apellido.value.toUpperCase()

        if (ER_apellido.test(apellido.value)) {

            apellido.style.borderColor = ''

            FB_apellido.innerHTML = '';
            FB_apellido.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + apellido.value;

    } catch (error) {

        const apellido = document.querySelector('#apellido_residente');
        const FB_apellido = document.querySelector('#FB_apellido');

        FB_apellido.innerHTML = error;
        apellido.style.borderColor = '#900D09'
        FB_apellido.style.color = '#900D09'

    }

}

// 

function validacion_correo() {

    try {

        const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

        const correo = document.querySelector('#correo');
        const FB_correo = document.querySelector('#FB_correo');

        if (ER_correo.test(correo.value)) {

            correo.style.borderColor = ''

            FB_correo.innerHTML = '';
            FB_correo.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + correo.value;

    } catch (error) {

        const correo = document.querySelector('#correo');
        const FB_correo = document.querySelector('#FB_correo');

        FB_correo.innerHTML = error;
        correo.style.borderColor = '#900D09'
        FB_correo.style.color = '#900D09'

    }

}

function validacion_telefono_residente() {

    try {

        const ER_telefono = /^[0-9]{10}$/

        const telefono = document.querySelector('#telefono_residente');
        const FB_telefono = document.querySelector('#FB_telefono');

        if (ER_telefono.test(telefono.value)) {

            telefono.style.borderColor = ''

            FB_telefono.innerHTML = '';
            FB_telefono.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + telefono.value;;

    } catch (error) {

        const telefono = document.querySelector('#telefono_residente');
        const FB_telefono = document.querySelector('#FB_telefono');

        FB_telefono.innerHTML = error;
        telefono.style.borderColor = '#900D09'
        FB_telefono.style.color = '#900D09'

    }

}
function validacion_fecha_nacimiento() {

    const fecha_nacimiento = document.querySelector('#fecha_nacimiento');

    const FB_fecha_nacimiento = document.querySelector('#FB_fecha_nacimiento');


    const fecha_actual = new Date()

    console.log(new Date(fecha_nacimiento.value))
    console.log(new Date(fecha_actual))
    try {

        // if (new Date(fecha_inicio.value) < fecha_actual) {

        //     throw `La fecha inicio ${fecha_inicio.value} no es valida`;


        // }

        // if (new Date(fecha_fin.value) < fecha_actual) {

        //     throw `La fecha salida ${fecha_fin.value} no es valida`;

        // }

        if (new Date(fecha_nacimiento.value) > new Date(fecha_actual)) {

            throw 'La fecha de nacimiento debe ser anterior a la fecha actual'

        }

        else if (isNaN(new Date(fecha_nacimiento.value))) {

            throw 'Debes seleccionar la fecha de nacimiento'
        }

        else {

            // console.log('Continua viendo precios de vuelos');
            fecha_nacimiento.style.borderColor = '';
            fecha_nacimiento.style.borderColor = '';
            FB_fecha_nacimiento.innerHTML = '';
            // fecha_fin.style.borderColor = '';

        }
    } catch (error) {

        const fecha_nacimiento = document.querySelector('#fecha_nacimiento');
        const FB_fecha_nacimiento = document.querySelector('#FB_fecha_nacimiento');

        FB_fecha_nacimiento.innerHTML = error;
        fecha_nacimiento.style.borderColor = '#900D09';
        FB_fecha_nacimiento.style.color = '#900D09';


    }
}


function validacion_fecha_inicio() {

    const fecha_inicio = document.querySelector('#fecha_inicio');
    const fecha_fin = document.querySelector('#fecha_fin');

    const FB_fecha_inicio = document.querySelector('#FB_fecha_inicio');


    const fecha_actual = new Date()

    try {

        // if (new Date(fecha_inicio.value) < fecha_actual) {

        //     throw `La fecha inicio ${fecha_inicio.value} no es valida`;


        // }

        // if (new Date(fecha_fin.value) < fecha_actual) {

        //     throw `La fecha salida ${fecha_fin.value} no es valida`;

        // }

        if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

            throw 'La fecha de salida debe ser antes que la fecha de ingreso'

        }

        else if (isNaN(new Date(fecha_inicio.value))) {

            throw 'Debes seleccionar la fecha de inicio'
        }

        else {

            // console.log('Continua viendo precios de vuelos');
            fecha_inicio.style.borderColor = '';
            fecha_fin.style.borderColor = '';
            FB_fecha_inicio.innerHTML = '';
            // fecha_fin.style.borderColor = '';

        }
    } catch (error) {

        const fecha_inicio = document.querySelector('#fecha_inicio');
        const fecha_fin = document.querySelector('#fecha_fin');
        const FB_fecha_inicio = document.querySelector('#FB_fecha_inicio');

        FB_fecha_inicio.innerHTML = error;
        fecha_inicio.style.borderColor = '#900D09';
        fecha_fin.style.borderColor = '#900D09';


    }
}

function validacion_fecha_fin() {

    const fecha_inicio = document.querySelector('#fecha_inicio');
    const fecha_fin = document.querySelector('#fecha_fin');

    const FB_fecha_fin = document.querySelector('#FB_fecha_fin');


    const fecha_actual = new Date()

    try {

        if (new Date(fecha_inicio.value) < fecha_actual) {

            throw `La fecha inicio ${fecha_inicio.value} no es valida`;


        }

        if (new Date(fecha_fin.value) < fecha_actual) {

            throw `La fecha salida ${fecha_fin.value} no es valida`;

        }

        else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

            throw 'La fecha de salida debe ser antes que la fecha de ingreso'

        }



        else {

            // console.log('Continua viendo precios de vuelos');
            // fecha_inicio.style.borderColor = 'green';
            FB_fecha_fin.innerHTML = '';
            fecha_fin.style.borderColor = '';

        }
    } catch (error) {

        const fecha_inicio = document.querySelector('#fecha_inicio');
        const fecha_fin = document.querySelector('#fecha_fin');

        const FB_fecha_inicio = document.querySelector('#FB_fecha_inicio');


        const FB_fecha_fin = document.querySelector('#FB_fecha_fin');

        // FB_fecha_inicio.innerHTML = error;
        // FB_fecha_inicio.style.color = '#900D09';
        // fecha_inicio.style.borderColor = '#900D09';
        FB_fecha_fin.innerHTML = error;
        FB_fecha_fin.style.color = '#900D09';
        fecha_fin.style.borderColor = '#900D09';



    }
}







