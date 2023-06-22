
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

app.get('/visitantes_crear', (req, res) => {
    res.render('visitantes_crear', {

        title: 'Visitantes 👩🏼‍🤝‍🧑🏾',
        modulo: 'Visitantes',
        ir_boton_crear: 'Crear visitante',
        ir_boton_editar: 'Editar visitante'
    })
})

app.get('/visitas', (req, res) => {
    res.render('visitas', {

        title: 'Visitas 👩🏼‍🤝‍🧑🏾',
        modulo: 'Visitas',
        ir_boton_crear: 'Crear visita',
        ir_boton_editar: 'Editar visita'
    })
})

app.get('/visitas_crear', (req, res) => {
    res.render('visitas_crear', {

        title: 'Visitas 👩🏼‍🤝‍🧑🏾',
        modulo: 'Visitas',
        datagrid: 'visitas',
        boton_crear: 'Crear visita',
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



app.listen(port, () => {

    console.log(`Listening to  ${port}`)
    
})
