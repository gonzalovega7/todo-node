require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();
    
    do {
        // This function is used to print menu 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create option
                const desc = await readInput('Description:');
                tasks.createTask(desc);
                console.log(desc);
            break;
        
            case '2':
                console.log(tasks.arrList);
            break;
        }


        if(opt !== '0') {
            await pause();
        }

    } while (opt !== '0');
    //pause();
} 

main();