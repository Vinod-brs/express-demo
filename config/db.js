import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://kingvinodkumart:vinod123@cluster0.qws8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/CURD");
        console.log(`connceted to ${conn.connection.host}`);
    }catch(er){
        console.log(er);
        process.exit(1);
    }
}

// export default connectDB