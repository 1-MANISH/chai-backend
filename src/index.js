// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})
import connectDB from './db/index.js';
import {app} from './app.js'


const port = process.env.PORT

connectDB()
.then(()=>{
    
    app.listen(port|| 8000 ,()=>{

        console.log(`\n Server is Running at PORT : ${port} And Url : http://localhost:${port}`);

    })

})
.catch((err)=>{

    console.log(`MongoDb connection Failed : ${err}`);
    
})



















// Db connection -method-1

/*
import mongoose from 'mongoose'
import { DB_NAME } from './constant';
import express from "express"
const app = express()

// ife

;( async () => {
    try {
       
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on(`Error`,(error)=>{
            console.log(`Error -: ${error}`);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on PORT ${process.env.PORT}`);
        })

    } catch (error) {

        console.log(`Error -: ${error}`);

    }
} )()

*/

