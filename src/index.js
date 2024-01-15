// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})
import connectDB from './db/index.js';



connectDB()









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

