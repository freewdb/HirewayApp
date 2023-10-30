const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5001;

// MongoDB connection string
const uri = "mongodb+srv://Cluster33086:W21JYl5LbExp@cluster33086.ibkmtf5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Assuming your React app runs on port 3000

// Routes
app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the backend! Callie, you've got a nice backend aka ass!" });
});

//Mongo Routes
app.get('/test-connection', async (req, res) => {
    try {
        console.log('Received request to /test-connection');
      // Perform a sample database operation (e.g., find a document)
      const database = client.db('sample_analytics'); // Replace 'test' with your actual database name
      const collection = database.collection('transactions'); // Replace 'sample' with your actual collection name
      const result = await collection.find({}).toArray(); // Updated to find and toArray
  
      // Return a response to the frontend
      res.json({ message: 'MongoDB connection successful', data: result });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      res.status(500).json({ message: 'Error connecting to MongoDB' });
    }
});

// Start the Express server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB on startup:', error);
    }
});

// Handle server termination
process.on('SIGINT', async () => {
    await client.close();
    process.exit();
});