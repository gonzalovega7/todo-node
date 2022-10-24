
const Tarea = require('./task');

class Tasks {
    // using _ to indicate that its private
    _listOfTasks = {};

    get arrList() {
        const list = [];
        // array of all keys
        Object.keys(this._listOfTasks).forEach( key => {
            const task = this._listOfTasks[key];
            list.push(task.desc);
        });

        return list;
    }

    constructor() {
        this._listOfTasks = {};
    }

    createTask(desc) {
        const tarea = new Tarea(desc);
        this._listOfTasks[tarea.id] = tarea; 
    }
}

module.exports = Tasks;