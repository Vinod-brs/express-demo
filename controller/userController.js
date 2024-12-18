import { User } from "../routes/model/userModel.js"



 const createUser = async (req, res) => {
    try{

    
    const {firstName, lastName, email} = req.body
    try{
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400).json({
                message: " user already exist",
            });
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
        })
        res.status(201).json({ message: "User created successfully"})
    }catch(er) {
        res.status(500).send("Server error...")
    }
}catch(e){
        
}
}

const getProfile = async (req, res) => {
    const userId = req.params.userId
    try{
        const userExists = await User.findById(userId)
        if(!userExists)
            res.status(404).json({
                message: " User not found.......",
            });
        else  
            res.status(200).json(userExists)
        

        
    }catch(er) {
        res.status(500).send("Server error...")
    }
}


const getAllProfile = async (req, res) => {
   
    // const userId = req.params.userId
    try{
        const userExists = await User.find()
        if(!userExists)
            res.status(404).json({
                message: " User not found.......",
            });
        else  
            res.status(200).json(userExists)
        

        
    }catch(er) {
        res.status(500).send("Server error...")
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.userId
    try{
        const userExists = await User.findById(userId)
        if(!userExists){
            res.status(404).json({
                message: " user not found",
            });
        }else{
            userExists.firstName = req.body.firstName || userExists.firstName
            userExists.lastName = req.body.lastName || userExists.lastName
            await userExists.save()
            
        
        res.status(200).json(userExists)
        }

        
    }catch(er) {
        res.status(500).send("Server error...")
    }
}


const deleteUser = async (req, res) => {
    const userId = req.params.userId
    try{
        const userExists = await User.findByIdAndDelete(userId)
        if(!userExists){
            res.status(404).json({
                message: " user not found",
            });
        }else{
            res.status(200).json({ message: "User Deleted successfully !"})
        }

        
    }catch(er) {
        res.status(500).send("Server error...")
    }
}

export {getProfile, createUser, updateUser, deleteUser, getAllProfile}
