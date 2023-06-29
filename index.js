
const express = require('express')
const app = express() 
const port = 8081
const path = require('path') 
const hbs = require('hbs')
app.use(express.static('public'))   

app.set('views', path.join(__dirname+'/public/vistas'))
app.set('view engine', 'hbs')//Motor de p<lantillas


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



app.listen(port, () => {

    console.log(`Listening to  ${port}`)
    
})
