
const express = require('express')
const app = express()
const port = 8082
const path = require('path')
const hbs = require('hbs')
app.use(express.static('public'))

app.set('views', path.join(__dirname + '/public/vistas'))
app.set('view engine', 'hbs')//Motor de p<lantillas


app.get('/propietarios', (req, res) => {
    res.render('propietarios')
})

app.get('/residentes_crear', (req, res) => {
    res.render('residentes_crear')
})

app.get('/residentes', (req, res) => {
    res.render('residentes', {

        title: 'Residentes 👨‍👨‍👧‍👧',
        modulo: 'Residentes'
    })
})

app.get('/visitantes', (req, res) => {
    res.render('visitantes')
})

app.get('/espacios', (req, res) => {
    res.render('espacios')
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
    res.render('agenda',{
        modulo: 'Agenda'
    })
})
app.get('/reserva_crear', (req, res) => {
    res.render('reserva_crear', {
        modulo: 'Reservas'
    })
})
app.get('/notificaciones', (req, res) => {
    res.render('notificacion_crear',{
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
