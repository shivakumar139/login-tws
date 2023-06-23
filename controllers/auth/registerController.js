import Joi from "joi";
import {User} from "../../models";
import bcrypt from "bcrypt";
import {JwtService, CustomErrorHandler } from "../../services";


const registerController = {

    async register(req, res, next){


        // validation using Joi library
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
            mobile: Joi.string().min(10).max(10).required(),
            city: Joi.string().min(3).max(30).required(),
            state: Joi.string().min(3).max(30).required(),
            country: Joi.string().min(3).max(30).required(),
            address: Joi.string().min(3).max(30).required(),

        })


        try{
            await registerSchema.validateAsync(req.body);
        }catch(error){
            return next(error);
        }
        


        // check if user is already present in the database
        try{
            const exists = await User.exists({email: req.body.email});
            if(exists){
                return next(CustomErrorHandler.emailAlreadyExists("Email is Already Exists."));
            }

        }catch(error){
            return next(error);
        }
        

        // hash password
        const hashedPassword = await bcrypt.hash(req.body.password,10);

        // prepare the model 
        const {name, email, mobile, city, state, country, address} = req.body;
        const user = new User({
            name,
            email,
            password: hashedPassword,
            mobile,
            city,
            state,
            country,
            address
        });


        let token;
        try {
            const result = await user.save();

            // token
            token = JwtService.sign({_id: result._id, name: result.name, email: result.email});

        } catch (error) {
            return next(error);
        }

        return res.json({token: token});

    }
}

export default registerController;