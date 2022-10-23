require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async() => {
    
    let opt = '';
    do {
        // opt = await inquirerMenu();
        // console.log({opt});

        const task = new Task('Buy food');
        const tasks = new Tasks();
        
        tasks._listOfTasks[task.id] = task;
        console.log(tasks);

        if(opt !== '0') {
            await pause();
        }

    } while (opt !== '0');
    //pause();
} 

main();