import User from "../../models/User"
import connectDb from "../../middleware/mngConnect"
import bcrypt from 'bcrypt'
const handler = async (req,res)=>{
    if(req.method=='POST'){
console.log("Register route "+req.body);
        const {email,password} = req.body;
        const user = await User.findOne({email}).lean().exec();
        if(user){
            res.status(200).json({message:"User Already Exist",success:false})
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password,salt);
            const u = new User({
                email:req.body.email,
                password:hashed,
                age:req.body.age,
                gender:req.body.gender,
                role:req.body.state,
                name:req.body.name,
                regid:req.body.reg

            });
                await u.save();
                res.status(200).json({message:"Registration Successfull",success:true})
           
        }
    }
    else{
        res.status(200).json({message:'Route Working',success:false})
    }
}

export default connectDb(handler);