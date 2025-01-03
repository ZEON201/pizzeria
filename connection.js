const mysql2 = require("mysql2");
require("dotenv").config();

let connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})
connection.connect((err) => {
    if (!err) {
        console.log("connected")
    } else {
        console.log(err)
    }
});
module.export = connection;
