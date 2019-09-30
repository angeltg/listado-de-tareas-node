const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./todo/todo');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getListado();
        console.log('==========To Do=========='.green);
        for (let tarea of listado) {
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log(`--------------------------`);
        }
        console.log('============================='.green);

        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = toDo.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log("Comando no encontrado");
        break;
}