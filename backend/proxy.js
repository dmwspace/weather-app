const express = require('express')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000

const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY

app.get('/backend_current', (req, res) => {
    const url = `http://api.weatherbit.io/v2.0/current?postal_code=${req.query.fiveDigits}&country=US&units=I&key=${apiKey}`
    request({url, json: true}, (error, {data}) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(data)
        //res.send(data)
    })
})

app.get('/backend_fiveDay', (req, res) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${req.query.fiveDigits}&country=US&days=5&units=I&key=${apiKey}`
    request({url, json: true}, (error, {data}) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(data)
        //res.send(data)
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})