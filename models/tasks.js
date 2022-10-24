
const Tarea = require('./task');

class Tasks {
    // using _ to indicate that its private
    _listOfTasks = {};

    get arrList() {
        const list = [];
        // array of all keys
        Object.keys(this._listOfTasks).forEach( key => {
            const task = this._listOfTasks[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._listOfTasks = {};
    }

    loadTasksFromArray(tasks = [] ) {
        tasks.forEach( task => {
            this._listOfTasks[task.id] = task;
        })
    }
    
    completeList() {
        console.log('\n');
        this.arrList.forEach((task,i) => {
            const idx = `${i + 1}`.green;
            const { desc, completeDate } = task;
            const state = (completeDate) ? 'Complete'.green : 'Pending'.red;

            console.log(`${idx} ${desc} :: ${state}`);
        })

    }

    createTask(desc) {
        const tarea = new Tarea(desc);
        this._listOfTasks[tarea.id] = tarea; 
    }
}

module.exports = Tasks;