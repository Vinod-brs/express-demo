import express from 'express';
import router from './routes/userRoute.js';
// import { getProfile, createUser, updateUser, deleteUser } from './controller/userController.js';
import { connectDB } from './config/db.js';


const PORT = 5000;
const app = express()
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/users", router);

app.get("/", (req, res) => {
    
    res.send("Hello world...");
})

app.use('*', (req, res) => {
    res.status(404).json({
        Message: 'Not Found!',
        statuseCode: 404,
    });
   
});

app.listen(PORT, console.log('working'))