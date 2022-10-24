require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
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
                tasks.completeList();
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