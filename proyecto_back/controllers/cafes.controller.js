const Cafe = require ("../models/cafes.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let cafe = new Cafe({
        cafe_id: req.body.cafe_id,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        sabor: req.body.sabor,
        planta: req.body.planta,
        localizacion: req.body.localizacion,
        tostion: req.body.tostion,
        tipo: req.body.tipo,
        peso: req.body.peso,
        precio: req.body.precio
    })

    cafe.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar las características del café"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Las características del café se guardaron correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Cafe.find(function(err, cafes){
        res.json(cafes)
    })
}

exports.findOne = function(req,res){
    Cafe.findOne({_id: req.params.id},function(err, cafe){
        res.json(cafe)
    })
}

exports.update = function(req,res){
    let cafe = ({
        cafe_id: req.body.cafe_id,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        sabor: req.body.sabor,
        planta: req.body.planta,
        localizacion: req.body.localizacion,
        tostion: req.body.tostion,
        tipo: req.body.tipo,
        peso: req.body.peso,
        precio: req.body.precio
    })

    Cafe.findByIdAndUpdate(req.params.id, {$set: cafe}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al editar las características del café"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Las características del café se editaron correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    
    Cafe.findByIdAndRemove({_id: req.params.id },function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el cafe"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El cafe se eliminó correctamente"
        res.json(response)
    })
}