const app = require('./app')
const dotenv = require('dotenv')
const  connectDatabase = require('./config/database')


dotenv.config({path:'./backend/config/config.env'})

connectDatabase()


app.listen(3000,()=>{
    console.log(`server is running at ${3000}`)
})