require('dotenv').config();
const mongoose = require('mongoose')

const mongoConnString = process.env.DATABASE_URL

mongoose.connect(mongoConnString, {}, err => {
    if (!err) {
        console.log('Database connected successfuly...')
    } else {
        console.log('Error in connection | ' +err)
    }
})

require('./orders')
require('./products')


//* u: ecvii
//* p: ecvii