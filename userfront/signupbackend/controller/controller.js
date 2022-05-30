
const {User,validate}=require('../models/SignUpModel')
const bcrypt = require("bcrypt");
const Joi = require("joi");

exports.saveUser = async(req,res)=>{
    try{
        const {error} = validate(req.body)
        if(error){
            return res.status(400).send({message: error.details[0].message})
        }
        const userO = await await User.findOne({ userEmail: req.body.email })
        if(userO){
            return res.status(409).send({message: "Ya existe un usuario con este correo"})
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.userPassword, salt);
        const signUpUser = new User({
            fullName: req.body.fullName,
            userName: req.body.userName,
            userPassword: hashPassword,
            userEmail: req.body.userEmail,
        })
        await signUpUser.save()
        res.status(201).send({ message: "Usuario creado exitosamente!" });
        }catch(error){
            res.status(500).send({ message: "Internal Server Error" });
    }   
}
exports.loginUser = async (req, res) => {
	try {
		const { error } = validate2(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ userEmail: req.body.userEmail });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.userPassword,
			user.userPassword
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

const validate2 = (data) => {
	const schema = Joi.object({
		userEmail: Joi.string().email().required().label("Email"),
		userPassword: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};




