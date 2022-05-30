const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require ('joi-password-complexity')
/**
 * Creacion del modelo para el registro de los usuarios
*/
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true,
        length:100
    },
    userName:{
        type:String,
        required: true,
        length:50
    },
    userPassword:{
        type: String,
        required: true,
        length:50
    },
    userEmail:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn:'7d'})
    return token 
}
//validacion de la información
const validate = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().required().label("Nombre completo"),
		userName: Joi.string().required().label("Nombre de usuario"),
        userPassword: passwordComplexity().required().label("Contraseña"),
		userEmail: Joi.string().email().required().label("Correo electrónico")
		
	});
	return schema.validate(data);
};


//exportacion del esquema
const User = mongoose.model('users', userSchema);

module.exports = {User,validate}
