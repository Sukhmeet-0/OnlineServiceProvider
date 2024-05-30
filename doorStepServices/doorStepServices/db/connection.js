const sql = require("mysql2")
const {
    development
} = require("../configuration/credentials")
const configurations = {
    host: development.host,
    user: development.user,
    password: development.password,
    database: development.database,
    port:"3306"

}

let conn = sql.createConnection(configurations);

conn.connect((e)=>
{
    if(e)
    {
        console.log(e);
    }
    else
    {
        console.log("Connected to db");
    }
})

module.exports = {sql, configurations, conn}