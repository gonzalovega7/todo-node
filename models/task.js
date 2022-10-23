const { v4: uuidv4 } = require('uuid');

class Task {
    id = '';
    desc = '';
    completeDate = null;

    constructor(desc) {

        // unique identifier using uuid package
        this.id = uuidv4();
        this.desc = desc;
    }

}

module.exports = Task;