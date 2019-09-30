const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);
    fs.writeFile('./db/data.json', data, function(err) {
        if (err) throw err;
        console.log('Guardado');
    });

}

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json');

    } catch (error) {
        listadoToDo = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let toDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB();
    return toDo;

}

const getListado = () => {
    cargarDB();
    return listadoToDo;
}

const actualizar = (descripcion, estado = true) => {
    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoToDo[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {
    cargarDB();
    let nuevoListadoToDo = listadoToDo.filter(tarea => tarea.descripcion != descripcion);
    if (nuevoListadoToDo.length === listadoToDo) {
        return false;
    } else {
        listadoToDo = nuevoListadoToDo;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}