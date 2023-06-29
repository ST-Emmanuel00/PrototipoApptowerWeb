
const express = require('express')
const app = express()
const port = 8080

// Dependencias para excel
const xl = require('excel4node');
const fs = require('fs');

const path = require('path')
const hbs = require('hbs')
app.use(express.static('public'))


app.set('views', path.join(__dirname + '/public/vistas'))
app.set('view engine', 'hbs')//Motor de p<lantillas

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {

        title: 'Dashboard 📉',
        modulo: 'Dashboard'
    })
})
app.get('/propietarios', (req, res) => {
    res.render('propietarios', {

        title: 'Propietarios 👨‍👨‍👧‍👧',
        modulo: 'Propietarios',
        ir_boton_crear: 'Crear propietario'
    })
})

app.get('/propietarios_crear', (req, res) => {
    res.render('propietarios_crear', {

        modelo: 'propietario',
        datagrid: 'propietarios',
        boton_crear: 'Crear propietario'
    })
})

app.get('/residentes_crear', (req, res) => {
    res.render('residentes_crear', {

        modelo: 'residente',
        datagrid: 'residentes',
        boton_crear: 'Crear residente'
    })
})

app.get('/residentes', (req, res) => {
    res.render('residentes', {

        title: 'Residentes 👨‍👨‍👧‍👧',
        modulo: 'Residentes',
        ir_boton_crear: 'Crear residente',
        ir_boton_editar: 'Editar residente'
    })
})

app.get('/visitantes', (req, res) => {
    res.render('visitantes', {

        title: 'Visitantes 👩🏼‍🤝‍🧑🏾',
        modulo: 'Visitantes',
        ir_boton_crear: 'Crear visitante',
        ir_boton_editar: 'Editar visitante'
    })
})

app.get('/visitantes_crear', (req, res) => {
    res.render('visitantes_crear', {

        modelo: 'visitante',
        datagrid: 'visitantes',
        boton_crear: 'Crear visitante'
    })
})

app.get('/espacios', (req, res) => {
    res.render('espacios', {

        title: 'Espacios 🏤',
        modulo: 'Espacios',
        ir_boton_crear: 'Crear espacio'
    })
})

app.get('/espacios_crear', (req, res) => {
    res.render('espacios_crear', {

        modelo: 'espacio',
        datagrid: 'espacios',
        boton_crear: 'Crear espacio'
    })
})



app.get('/visitas', (req, res) => {
    res.render('visitas', {

        title: 'Visitas 👨‍👦',
        registro: 'visitas'

    })
})

app.get('/reservas', (req, res) => {
    res.render('reservas', {
        modulo: 'Reservas'
    })
})
app.get('/agenda', (req, res) => {
    res.render('agenda', {
        modulo: 'Agenda'
    })
})
app.get('/reserva_crear', (req, res) => {
    res.render('reserva_crear', {
        modulo: 'Reservas'
    })
})
app.get('/notificaciones', (req, res) => {
    res.render('notificacion_crear', {
        modulo: 'notificaciones'
    })
})
app.get('/vehiculos', (req, res) => {
    res.render('vehiculos', {
        modulo: 'Vehículos'
    })
})
app.get('/vehiculos_crear', (req, res) => {
    res.render('vehiculos_crear', {
        modulo: 'Vehículos'
    })
})

//FECHA
let fecha = new Date();
let dia = fecha.getUTCDate();
let mes = (fecha.getUTCMonth()) + 1;
let año = fecha.getUTCFullYear();


// Rutas de excel

app.get("/descargar_excel_residentes", function (req, res) {

    // Configurar excel4node
    // Create a new instance of a Workbook class
    var wb = new xl.Workbook();
    let nombre_archivo = "residentes" + dia + mes + año + ".";
    var ws = wb.addWorksheet(nombre_archivo);

    // Crear estilos
    var estilo_columna = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    var contenido_estilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        }
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("tipo documento").style(estilo_columna);
    ws.cell(1, 2).string("numero documento").style(estilo_columna);
    ws.cell(1, 3).string("nombre").style(estilo_columna);
    ws.cell(1, 4).string("apellido").style(estilo_columna);
    ws.cell(1, 5).string("fecha nacimiento").style(estilo_columna);
    ws.cell(1, 6).string("genero").style(estilo_columna);
    ws.cell(1, 7).string("telefono").style(estilo_columna);
    ws.cell(1, 8).string("correo").style(estilo_columna);
    ws.cell(1, 9).string("tipo residente").style(estilo_columna);
    ws.cell(1, 10).string("residencia").style(estilo_columna);
    ws.cell(1, 11).string("habita").style(estilo_columna);
    ws.cell(1, 12).string("fecha inicio").style(estilo_columna);
    ws.cell(1, 13).string("fecha fin").style(estilo_columna);
    ws.cell(1, 14).string("estado").style(estilo_columna);

    const url = 'https://apptower-bk.onrender.com/api/residentes'

    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let lista_residentes = data.residentes
            console.log(lista_residentes)
            lista_residentes.forEach((residente, fila) => {

                celda = fila + 2;
                ws.cell(celda, 1).string(residente.tipo_documento_residente).style(contenido_estilo);
                ws.cell(celda, 2).string(residente.numero_documento_residente).style(contenido_estilo);
                ws.cell(celda, 3).string(residente.nombre_residente).style(contenido_estilo);
                ws.cell(celda, 4).string(residente.apellido_residente).style(contenido_estilo);
                ws.cell(celda, 5).date(new Date(residente.fecha_nacimiento)).style(contenido_estilo);
                ws.cell(celda, 6).string(residente.genero_residente).style(contenido_estilo);
                ws.cell(celda, 7).string(residente.telefono_residente).style(contenido_estilo);
                ws.cell(celda, 8).string(residente.correo).style(contenido_estilo);
                ws.cell(celda, 9).string(residente.tipo_residente).style(contenido_estilo);
                ws.cell(celda, 10).string(residente.residencia).style(contenido_estilo);
                ws.cell(celda, 11).style({ ...contenido_estilo, bold: true }).string(residente.habita ? 'Sí' : 'No');
                ws.cell(celda, 12).date(new Date(residente.fecha_nacimiento)).style(contenido_estilo);
                ws.cell(celda, 13).date(new Date(residente.fecha_nacimiento)).style(contenido_estilo);
                ws.cell(celda, 14).string(residente.estado).style(contenido_estilo);

            })

            //Ruta del archivo
            const path_excel = path.join(__dirname, 'excel', nombre_archivo + '.xlsx');

            //Escribir o guardar
            wb.write(path_excel, function (err, stats) {

                if (err) console.log(err);

                else {

                    // Crear función y descargar archivo
                    function downloadFile() { res.download(path_excel); }
                    downloadFile();

                    // Borrar archivo
                    fs.rm(path_excel, function (err) {
                        if (err) console.log(err);
                        else console.log("Archivo descargado y borrado del servidor correctamente");
                    });
                }
            });

        })


});

app.get("/descargar_excel_propietarios", function (req, res) {

    // Configurar excel4node
    // Create a new instance of a Workbook class
    var wb = new xl.Workbook();
    let nombre_archivo = "propietarios" + dia + mes + año + ".";
    var ws = wb.addWorksheet(nombre_archivo);

    // Crear estilos
    var estilo_columna = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    var contenido_estilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        }
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("tipo documento").style(estilo_columna);
    ws.cell(1, 2).string("numero documento").style(estilo_columna);
    ws.cell(1, 3).string("nombre").style(estilo_columna);
    ws.cell(1, 4).string("apellido").style(estilo_columna);
    ws.cell(1, 5).string("fecha nacimiento").style(estilo_columna);
    ws.cell(1, 6).string("genero").style(estilo_columna);
    ws.cell(1, 7).string("telefono").style(estilo_columna);
    ws.cell(1, 8).string("correo").style(estilo_columna);
    ws.cell(1, 9).string("propiedad").style(estilo_columna);
    ws.cell(1, 10).string("estado").style(estilo_columna);


    const url = 'https://apptower-bk.onrender.com/api/propietarios'


    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let lista_propietarios = data.propietarios
            lista_propietarios.forEach((propietario, fila) => {

                celda = fila + 2;
                ws.cell(celda, 1).string(propietario.tipo_documento_propietario).style(contenido_estilo);
                ws.cell(celda, 2).string(propietario.numero_documento_propietario).style(contenido_estilo);
                ws.cell(celda, 3).string(propietario.nombre_propietario).style(contenido_estilo);
                ws.cell(celda, 4).string(propietario.apellido_propietario).style(contenido_estilo);
                ws.cell(celda, 5).date(new Date(propietario.fecha_nacimiento)).style(contenido_estilo);
                ws.cell(celda, 6).string(propietario.genero_propietario).style(contenido_estilo);
                ws.cell(celda, 7).string(propietario.telefono_propietario).style(contenido_estilo);
                ws.cell(celda, 8).string(propietario.correo).style(contenido_estilo);
                ws.cell(celda, 9).string(propietario.propiedad).style(contenido_estilo);
                ws.cell(celda, 10).string(propietario.estado).style(contenido_estilo);

            })

            //Ruta del archivo
            const path_excel = path.join(__dirname, 'excel', nombre_archivo + '.xlsx');

            //Escribir o guardar
            wb.write(path_excel, function (err, stats) {

                if (err) console.log(err);

                else {

                    // Crear función y descargar archivo
                    function downloadFile() { res.download(path_excel); }
                    downloadFile();

                    // Borrar archivo
                    fs.rm(path_excel, function (err) {
                        if (err) console.log(err);
                        else console.log("Archivo descargado y borrado del servidor correctamente");
                    });
                }
            });

        })
});


app.get("/descargar_excel_visitantes", function (req, res) {

    // Configurar excel4node
    // Create a new instance of a Workbook class
    var wb = new xl.Workbook();
    let nombre_archivo = "visitantes" + dia + mes + año + ".";
    var ws = wb.addWorksheet(nombre_archivo);

    // Crear estilos
    var estilo_columna = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    var contenido_estilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        }
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("tipo documento").style(estilo_columna);
    ws.cell(1, 2).string("numero documento").style(estilo_columna);
    ws.cell(1, 3).string("nombre").style(estilo_columna);
    ws.cell(1, 4).string("apellido").style(estilo_columna);
    ws.cell(1, 5).string("genero").style(estilo_columna);
    ws.cell(1, 6).string("tipo visitante").style(estilo_columna);
    ws.cell(1, 7).string("anfitrion").style(estilo_columna);
    ws.cell(1, 8).string("permiso").style(estilo_columna);

    const url = 'https://apptower-bk.onrender.com/api/visitantes'


    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let lista_visitantes = data.visitantes
            lista_visitantes.forEach((visitante, fila) => {

                celda = fila + 2;
                ws.cell(celda, 1).string(visitante.tipo_documento_visitante).style(contenido_estilo);
                ws.cell(celda, 2).string(visitante.numero_documento_visitante).style(contenido_estilo);
                ws.cell(celda, 3).string(visitante.nombre_visitante).style(contenido_estilo);
                ws.cell(celda, 4).string(visitante.apellido_visitante).style(contenido_estilo);
                ws.cell(celda, 5).string(visitante.genero_visitante).style(contenido_estilo);
                ws.cell(celda, 6).string(visitante.tipo_visitante).style(contenido_estilo);
                ws.cell(celda, 7).string(visitante.anfitrion).style(contenido_estilo);
                ws.cell(celda, 8).string(visitante.permiso).style(contenido_estilo);

            })

            //Ruta del archivo
            const path_excel = path.join(__dirname, 'excel', nombre_archivo + '.xlsx');

            //Escribir o guardar
            wb.write(path_excel, function (err, stats) {

                if (err) console.log(err);

                else {

                    // Crear función y descargar archivo
                    function downloadFile() { res.download(path_excel); }
                    downloadFile();

                    // Borrar archivo
                    fs.rm(path_excel, function (err) {
                        if (err) console.log(err);
                        else console.log("Archivo descargado y borrado del servidor correctamente");
                    });
                }
            });

        })

});


app.get("/descargar_excel_espacios", function (req, res) {

    // Configurar excel4node
    // Create a new instance of a Workbook class
    var wb = new xl.Workbook();
    let nombre_archivo = "espacios" + dia + mes + año + ".";
    var ws = wb.addWorksheet(nombre_archivo);

    // Crear estilos
    var estilo_columna = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    var contenido_estilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        }
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("tipo espacio").style(estilo_columna);
    ws.cell(1, 2).string("nombre").style(estilo_columna);
    ws.cell(1, 3).string("area").style(estilo_columna);
    ws.cell(1, 4).string("capacidad").style(estilo_columna);
    ws.cell(1, 5).string("estado").style(estilo_columna);

    const url = 'https://apptower-bk.onrender.com/api/espacios'


    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let lista_espacios = data.espacios
            lista_espacios.forEach((espacio, fila) => {

                celda = fila + 2;
                ws.cell(celda, 1).string(espacio.tipo_espacio).style(contenido_estilo);
                ws.cell(celda, 2).string(espacio.nombre_espacio).style(contenido_estilo);
                ws.cell(celda, 3).string(espacio.area + '').style(contenido_estilo);
                ws.cell(celda, 4).string(espacio.capacidad + '').style(contenido_estilo);
                ws.cell(celda, 5).string(espacio.estado).style(contenido_estilo);


            })

            //Ruta del archivo
            const path_excel = path.join(__dirname, 'excel', nombre_archivo + '.xlsx');

            //Escribir o guardar
            wb.write(path_excel, function (err, stats) {

                if (err) console.log(err);

                else {

                    // Crear función y descargar archivo
                    function downloadFile() { res.download(path_excel); }
                    downloadFile();

                    // Borrar archivo
                    fs.rm(path_excel, function (err) {
                        if (err) console.log(err);
                        else console.log("Archivo descargado y borrado del servidor correctamente");
                    });
                }
            });

        })


});

app.get('/reservas', (req, res) => {
    res.render('reservas', {
        modulo: 'Reservas'
    })
})
app.get('/agenda', (req, res) => {
    res.render('agenda', {
        modulo: 'Agenda'
    })
})
app.get('/reserva_crear', (req, res) => {
    res.render('reserva_crear', {
        modulo: 'Reservas'
    })
})
app.get('/notificaciones', (req, res) => {
    res.render('notificacion_crear', {
        modulo: 'notificaciones'
    })
})
app.get('/vehiculos', (req, res) => {
    res.render('vehiculos', {
        modulo: 'Vehículos'
    })
})
app.get('/vehiculos_crear', (req, res) => {
    res.render('vehiculos_crear', {
        modulo: 'Vehículos'
    })
})
app.listen(port, () => {

    console.log(`Listening to  ${port}`)

})




app.get('/', (req, res)=>{
    res.render ('login')
})
app.get('/usuariosC', (req, res)=>{
    res.render('usuarios_crear')
})
app.get('/usuariosL', (req, res)=>{
    res.render('usuarios_listar')
})
app.get('/rolesC', (req, res)=>{
    res.render('roles_crear')
})
app.get('/rolesL', (req, res)=>{
    res.render('roles_listar')
})
app.get('/rolesE', (req, res)=>{
    res.render('roles_E')
})

app.get('/Registro', (req, res)=>{
    res.render('registrarUsuario')
})

app.get('/vigilantesC', (req, res)=>{
    res.render('vigilantes_crear')
})
app.get('/vigilantesL', (req, res)=>{
    res.render('vigilantes_listar')
})

app.get('/modificarPerfil', (req, res)=>{
    res.render('modificarPerfil')
})
app.get('/recuperarC', (req, res)=>{
    res.render('recuperarC')
})
app.get('/restablecerC',(req, res)=>{
    res.render('restablecerC')
})


// Rutas de excel

app.get("/descargarExcel", function (req, res) {

    // Configurar excel4node
    // Create a new instance of a Workbook class
    var wb = new xl.Workbook();
    let nombre_archivo = "usuarios";
    var ws = wb.addWorksheet(nombre_archivo);

    // Crear estilos
    var estilo_columna = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    var contenido_estilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        }
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("tipo_documento").style(estilo_columna);
    ws.cell(1, 2).string("documento").style(estilo_columna);
    ws.cell(1, 3).string("nombre").style(estilo_columna);
    ws.cell(1, 4).string("apellido").style(estilo_columna);
    ws.cell(1, 5).string("correo").style(estilo_columna);
    ws.cell(1, 6).string("telefono").style(estilo_columna);
    ws.cell(1, 7).string("rol").style(estilo_columna);
    ws.cell(1, 8).string("estado").style(estilo_columna);
    ws.cell(1, 9).string("fecha").style(estilo_columna);
   

    const url = 'https://backnodejs.onrender.com/api/usuarios/usuarios'

    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            let listarUsuarios = data.usuario
            console.log(listarUsuarios)
            listarUsuarios.forEach((usuario, fila) => {

                celda = fila + 2;
                ws.cell(celda, 1).string(usuario.tipo_documento).style(contenido_estilo);
                ws.cell(celda, 2).string(usuario.documento.toString()).style(contenido_estilo);
                ws.cell(celda, 3).string(usuario.nombre).style(contenido_estilo);
                ws.cell(celda, 4).string(usuario.apellido).style(contenido_estilo);
                ws.cell(celda, 5).string(usuario.correo).style(contenido_estilo);
                ws.cell(celda, 6).string(usuario.telefono.toString()).style(contenido_estilo);
                ws.cell(celda, 7).string(usuario.rol).style(contenido_estilo);
                ws.cell(celda, 8).string(usuario.estado ? 'activo' : 'inactivo').style(contenido_estilo);
                ws.cell(celda, 9).date(new Date(usuario.fecha)).style(contenido_estilo);
               

            })

            //Ruta del archivo
            const path_excel = path.join(__dirname, 'excel', nombre_archivo + '.xlsx');

            //Escribir o guardar
            wb.write(path_excel, function (err, stats) {

                if (err) console.log(err);

                else {

                    // Crear función y descargar archivo
                    function downloadFile() { res.download(path_excel); }
                    downloadFile();

                    // Borrar archivo
                    fs.rm(path_excel, function (err) {
                        if (err) console.log(err);
                        else console.log("Archivo descargado y borrado del servidor correctamente");
                    });
                }
            });

        })


});
