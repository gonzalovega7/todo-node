const { ModuleDetectionKind } = require('typescript');

require('colors');

const showMenu = () => {

    return new Promise (resolve => {
        console.clear();
        console.log('====================='.green);
        console.log('  Choose an option: '.green);
        console.log('=====================\n'.green);

        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List tasks`);
        console.log(`${'3.'.green} List complete tasks`);
        console.log(`${'4.'.green} List pending tasks`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Exit \n`);

        const readline = require('readline').createInterface ({
            input: process.stdin,
            output: process.stdout
        });

    
        readline.question('Choose an option: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    } )
    
    
}

const pause = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface ({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    })
    

}

module.exports = {
    showMenu,
    pause
}