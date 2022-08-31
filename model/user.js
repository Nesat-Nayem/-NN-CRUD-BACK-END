import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// user schema for data formate
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// user schema on controlar
const postUser = mongoose.model('user', userSchema);

export default postUser;