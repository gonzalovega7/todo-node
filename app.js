require('colors');

const { inquirerMenu, pause, readInput, deleteTasksList, confirm, showChecklistList } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/filesInteraction');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();
    const tasksDB = readDB();

    if( tasksDB ) {
        // Load tasks
        tasks.loadTasksFromArray(tasksDB);

    }

    do {
        // This function is used to print menu 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create option
                const desc = await readInput('Description:');
                tasks.createTask(desc);
            break;
        
            case '2':
                // list all tasks
                tasks.completeList();
            break;
            case '3':
                // list complete tasks 
                tasks.listPendingAndCompletes(true);
            break;
            case '4':
                // list pending tasks
                tasks.listPendingAndCompletes(false);
            break;
            case '5':
                // complete | pending
                const ids = await showChecklistList(tasks.arrList);
                tasks.toggleState(ids);
            break;
            case '6':
                // show task to choose to delete
                const id = await deleteTasksList(tasks.arrList);
                if(!id == 0) { 
                    // confirmation about deleting 
                    const deleteOk = await confirm('Are you sure?');
                    if(deleteOk) {
                        tasks.deleteTask(id);
                        console.log('Task was deleted.'.red);
                    }
                }
            break;
        }

        // Saving all my tasks in a json file
        saveDB(tasks.arrList);

        if(opt !== '0') {
            await pause();
        }

    } while (opt !== '0');
    //pause();
} 

main();