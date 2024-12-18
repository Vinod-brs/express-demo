import express from 'express';
import router from './routes/userRoute.js';
import { getAllProfile } from './controller/userController.js';
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

app.use('*', getAllProfile);

app.listen(PORT, console.log('working'))