const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        const MONGODB_URI = 'mongodb+srv://amankumar020003:hQuQck7ZnmOeJxRn@cluster0.m0hzbal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(MONGODB_URI, {
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = { connectToDatabase };
