import User from "../../models/User"
import connectDb from "../../middleware/mngConnect"
import bcrypt from 'bcrypt'
let jwt = require('jsonwebtoken');
const handler = async (req,res)=>{
    if(req.method=='POST'){

        const {email,password,reg} = req.body;
        const user = await User.findOne({email}).lean().exec();
        const comp = await bcrypt.compare(password,user.password);
        console.log("Two string are same "+comp);
        if(user){
            if(user.email === email && comp && reg==user.regid){
                // console.log("Login Successfull");
                let token = jwt.sign({email:user.email ,name:user.name,role:user.role,regid:user.regid},'veryhighlevelsecret');
                res.status(200).json({message:"Login Successfull",success:true,token:token})
            }
            else{
                res.status(200).json({message:"Invalid Credentials",success:false,token:null});
            }
        }
        else{
            res.status(200).json({message:"User Does Not Exist",success:false,token:nu});
        }
    }
    else{
        res.status(200).json({message:'Route Working'})
    }
}

export default connectDb(handler);