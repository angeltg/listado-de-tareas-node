const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}

const opts = {
    descripcion
}
const opts2 = {
    descripcion,
    completado
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por realizar', opts)
    .command('actualizar', 'Actualiza una tarea ya hecha', opts2)
    .command('borrar', 'Borra una tarea de la lista', opts)
    .help()
    .argv;

module.exports = {
    argv
}