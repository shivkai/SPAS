import User from "../../models/User"
import connectDb from "../../middleware/mngConnect"

const handler = async (req,res)=>{
    if(req.method=='GET'){
        const data = await User.find({role:'student'}).select('-password');
        res.status(200).json({data});
    }
    else{
            res.status(200).json({msg:'Nothing to see'});
            
        }
}

export default connectDb(handler);