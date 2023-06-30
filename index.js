const express = require('express')
const app = express() 
const port = 8080
const path = require('path') 
const hbs = require('hbs')
// const XLSX = require('xlsx');
// const fs = require('fs');

app.use(express.static('public'))

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/');
// });


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
app.get('/multas', (req, res) => {
    res.render('multas', {

        title: 'Multas 👩🏼‍🤝‍🧑🏾',
        modulo: 'Multas',
        ir_boton_crear: 'Crear Multa',
        ir_boton_editar: 'Editar Multa'
        
    })
})
app.get('/multas_crear', (req, res) => {
    res.render('multas_Crear', {

        title: 'Multas 👩🏼‍🤝‍🧑🏾',
        modulo: 'Multas',
        ir_boton_crear: 'Crear Multa',
        ir_boton_editar: 'Editar Multa'
        
    })
})
app.get('/visitantesD', (req, res) => {
    res.render('visitantes_D', {

        title: 'Visitantes 👩🏼‍🤝‍🧑🏾',
        modulo: 'Visitantes',
        ir_boton_crear: 'Crear visitante',
        ir_boton_editar: 'Editar visitante'
        
    })
})

app.get('/visitantes_crear', (req, res) => {
    res.render('visitantes_crear', {

        title: 'Visitantes 👩🏼‍🤝‍🧑🏾',
        modulo: 'Visitantes',
        boton_crear: 'Crear visitante',
        ir_boton_editar: 'Editar visitante',
        datagrid: 'visitantes'
    })
})

app.get('/ingresos', (req, res) => {
    res.render('ingresos', {

        title: 'Ingresos 👩🏼‍🤝‍🧑🏾',
        modulo: 'Ingresos',
        ir_boton_crear: 'Crear ingreso',
        ir_boton_editar: 'Editar ingreso'
    })
})

app.get('/ingresos_crear', (req, res) => {
    res.render('ingresos_crear', {

        title: 'Ingresos 👩🏼‍🤝‍🧑🏾',
        modulo: 'Ingresos',
        datagrid: 'ingresos',
        registro: 'Ingreso',
        boton_crear: 'Crear ingreso',
    })
})


app.get('/espacios', (req, res) => {
    res.render('espacios', {

        title: 'Espacios 🏤',
        modulo: 'Espacios',
        ir_boton_crear: 'Crear espacio'
    })
})
app.get('/multas', (req, res) => {
    res.render('multas', {

        title: 'Multas 🏤',
        modulo: 'Multas',
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
app.get('/descargar_excel_ingresos', (req, res) => {
    res.render('descargar_excel_ingresos', {
    })
})
app.listen(port, () => {

    console.log(`Listening to  ${port}`)

})
