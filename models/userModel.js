const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    username: {type: String, required: true, max: 100},
    user_password: {type: String, required: true, max: 100},
    
    diary: {diary: { type: mongoose.Schema.Types.ObjectId, ref: 'Diary' },}
});


// Export the model
module.exports = mongoose.model('Users', UserSchema);