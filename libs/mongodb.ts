import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('Please add your Mongo URI to .env.local');
          }
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log('connected to MongoDB');
    } catch (e) {
        console.log(e);
    }
};

export default connectMongoDB;
