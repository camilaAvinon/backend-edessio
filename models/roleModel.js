const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleSchema = new Schema({
    name: {
        type: 'String',
        require: true
    }
});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;