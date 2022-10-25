const mongoose = require ("mongoose")

const host = "localhost";
const port = "27017";
const db = "hr";

// cadena de conexión
exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    // Configuraciones para conectarnos a mongodb
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind (console,"Mongodb connection error"))
} 