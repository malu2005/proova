import { process_params } from 'express/lib/router'
import mysql from 'mysql2/promise'
import Connection from 'mysql2/typings/mysql/lib/Connection'


const con = await mysql.create Connection, 
({
    host: process_params.env.MYSQL_HOST,
    user: process_params.env.MYSQL_USER,
    password: process_params.env.MYSQL_PWD,
    database: process_params.env.MYSQL_DB
})

export {con}