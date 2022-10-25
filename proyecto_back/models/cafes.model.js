const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const CafesSchema = new Schema ({
    cafe_id:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    marca:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:500},
    //caracteristicas del cafe
    sabor:{type: String, required: true, max:40}, //Chocolate, Cítrico, Dulce, Especias, Floral, Frutal, Frutos secos
    // caracteristicas de la semilla
    planta:{type: String, required: true, max:40}, //Arabica, robusta
    localizacion:{type: String, required: true, max:40},
    tostion:{type: String, required: true, max:40}, //medio, medio oscuro, oscuro
    // caracteristicas del paquete
    tipo:{type: String, required: true, max:40}, //grano, molido, soluble
    peso:{type: String, required: true, max:40},
    precio:{type: Number, required: true, max:100000}
});

module.exports = mongoose.model("cafes", CafesSchema);