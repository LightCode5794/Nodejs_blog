const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        author: ObjectId,
        name: { type: String, default: '', maxLength: 255, required: true },
        description: { type: String, default: '', maxLength: 600 },
        image: { type: String, default: '', maxLength: 255 },
        videoId: { type: String, default: '', maxLength: 255, required: true },
        slug: { type: String, slug: 'name', unique: true },
        level: { type: String, default: '', maxLength: 255 },
        // createAt: { type: Date, default: Date.now},
        // updateAt: { type: Date, default: Date.now} // cái này có thể thay thế bằng cách thêm thuộc tính timestamp
    },
    {
        timestamps: true, //dể thêm vào thời gian tạo và update
    },
);

module.exports = mongoose.model('Course', Course);
