
import User from '../../../models/userSchema'
import dbConnect from "../../../lib/dbconnect";



dbConnect();

async function handler(req,res){
    if(req.method==="GET"){
        try{
            const bitians_instance=await User.find();
            res.status(200).json({bitians_instance});
        }
        catch(err){
            const response={Status:"Failure",Description:err.message};
            res.send(response).status(400);
        }
    }
}

export default handler;