const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    diary_title: {type: String, required: true},
    diary_image: {type: String, required: true},
    diary_blog: {type: String, required: true},
    places: [
        { place: { type: mongoose.Schema.Types.ObjectId, ref: 'Places' } }
      ],
});


// Export the model
module.exports = mongoose.model('Diary', UserSchema);