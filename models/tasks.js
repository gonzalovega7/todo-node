
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

    deleteTask(id = '') {
        // delete task
        if(this._listOfTasks[id]) {
            delete this._listOfTasks[id];
        }
    }

    loadTasksFromArray(tasks = [] ) {
        tasks.forEach( task => {
            this._listOfTasks[task.id] = task;
        })
    }
    
    completeList() {
        console.log('\n');
        // Looping all tasks and then show them in the console. If the task is complete = green. Else (pending) = red.
        this.arrList.forEach((task,i) => {
            const idx = `${i + 1}`.green;
            const { desc, completeDate } = task;
            const state = (completeDate) ? 'Complete'.green : 'Pending'.red;

            console.log(`${idx} ${desc} :: ${state}`);
        })

    }

    listPendingAndCompletes( complete = true) {

        console.log('\n');
        let index = 0;
        this.arrList.forEach((task) => {
            const { desc, completeDate } = task;
            const state = (completeDate) ? 'Complete'.green : 'Pending'.red;

            if( complete ) {
                // Show complete tasks
                if(completeDate) {
                    index += 1;
                    console.log(`${(index + '.').green} ${desc} :: ${completeDate.green}`);
                }
            } else {
                // Show pending tasks
                if(!completeDate) {
                    index += 1;
                    console.log(`${(index + '.').red} ${desc} :: ${state} `);
                }
            }
        });
    }

    createTask(desc) {
        const tarea = new Tarea(desc);
        this._listOfTasks[tarea.id] = tarea; 
    }

    toggleState(ids = []) {
        Object.keys(this._listOfTasks).forEach(id => {
            const task = this._listOfTasks[id];
            task.completeDate = ids.includes(id) ? (task.completeDate || (new Date().toISOString())) : null
        });
    }
}

module.exports = Tasks;