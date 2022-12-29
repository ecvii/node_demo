require('./models/db')

const express = require('express')
const routes = require('./routes/routes')
const logger = require('morgan')
const cors = require('cors')
const app = express()

app.use(logger('combined'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "It worked!"
//     })
// })

app.use('/api', routes, cors())

app.listen(3000, () => {
    console.log('server started at port 3000')
})