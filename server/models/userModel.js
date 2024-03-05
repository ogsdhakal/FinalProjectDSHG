const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema ({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// signup method
userSchema.statics.signup = async function(email, password){

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled.');
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    const emailExists = await this.findOne({email});

    if (emailExists) {
        throw Error('Email already exists!');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hashedPass});

    return user;
}

// static login method
userSchema.statics.login = async function(email, password){

    if (!email || !password) {
        throw Error('All fields must be filled.');
    }

    const user = await this.findOne({email});

    if (!user) {
        throw Error('Incorrect email');
    }

    const passMatch = await bcrypt.compare(password, user.password)

    if (!passMatch){
        throw Error('Incorrect password')
    }

    return user;
}

module.exports = mongoose.model('User', userSchema)