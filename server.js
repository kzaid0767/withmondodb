import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";


const app = express();
const port = 8082;
/* 
Connect to MongoDB
1. create a client
2. connect to the cluster
3. send a ping to confirm a successful connection
kzaid0767REometry123$
mondodburl: mongodb+srv://kzaid0767:Reometry123$@cluster0.8d1aj.mongodb.net/students-database  
*/
const client = new MongoClient("mongodb+srv://kzaid0767:Reometry123$@cluster0.8d1aj.mongodb.net/students-database", {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },    
});

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}    
connectToDatabase();

app.get("/", (req, res) => {
    res.send("Hello World!");    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})