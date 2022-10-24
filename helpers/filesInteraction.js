
const fs = require('fs');
const file = './db/data.json';

// Function used to save the information in a json file
const saveDB = (data) => {

    fs.writeFileSync(file, JSON.stringify(data));

}

const readDB = () => {
    
    if(!fs.existsSync(file)) {
        return null;
    } 

    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    return data;

}

module.exports = {
    saveDB,
    readDB
}