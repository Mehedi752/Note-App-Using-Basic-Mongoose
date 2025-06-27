import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';

let server: Server;
const PORT = process.env.PORT || 5000;


async function main(){
    try{
        // Connect with Mongoose.
        await mongoose.connect('mongodb+srv://NoteApp:glPXbIYQMsbTWWRS@cluster0.xk6aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to MongoDB using Mongoose successfully!");

        server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }

    catch(err){
        console.error("Error starting server:", err);
    }
}

main();