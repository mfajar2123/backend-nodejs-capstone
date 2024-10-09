require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    try {
        // Task 1: Connect to MongoDB
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Successfully connected to MongoDB");

        // Task 2: Connect to database and store in variable dbInstance
        dbInstance = client.db(dbName);
        console.log(`Connected to database: ${dbName}`);

        // Task 3: Return database instance
        return dbInstance;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

module.exports = connectToDatabase;
