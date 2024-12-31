import express from "express";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";


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
        /*
        1.database name
        2.collection name
        3. students data 
         */
        const database = client.db("all-students");
        const collection = database.collection("teachers");
        
        //const result = await collection.find({role: "student"}).limit(2).toArray();
        //update id 6772c8425bb486bb78f3ed87
        //const result = await collection.updateOne({_id: new ObjectId("6772c8425bb486bb78f3ed87")}, {$set: {age: 43}});
        //delete
        // const result = await collection.findOneAndUpdate({name: "Sharifa Zaid"}, {$set: {age: 11}});
        // const result =  await collection.findOne({name: "Sharifa Zaid"});
        // const result = await collection.updateMany({role: "student"}, {$set: {school: "KZS"}});
        // const result = await collection.insertOne({_id: 67, role: "student", name: "Shafa Zaid", age: 12, school: "KZS"});
        // const result = await collection.deleteOne({_id: 67});
        // const result = await collection.deleteMany({role: "teacher"});
        // const result = await collection.findOneAndDelete({role: "sudent"});
        /* const result = await collection.insertMany([
            {_id: 21, subject:'math', role: "teacher", name: "Jafar Jaid", age: 22, school: "KZS"},
            {_id: 22, subject: 'science', role: "teacher", name: "Safa Kaid", age: 32, school: "KZS"},
            {_id: 23, subject: 'english', role: "teacher", name: "Tahira Paid", age: 32, school: "KZS"},
            {_id: 24, subject: 'arabic', role: "teacher", name: "Jamil Said", age: 52, school: "KZS"},
            
        ]) */

        // const result = await collection.find({subject: {$eq: "math"}, age: {$lt: 30}}).toArray();
        //with logical operators
        // const result = await collection.find({$and: [{role: "teacher"}, {age: {$gte: 30}}]}).toArray();

        // const result = await collection.find({$or: [{role: "teacher"}, {age: {$gt: 30}}]}).toArray();

        const result = await collection.find({$nor: [{subject: "math"}, {age: {$eq: 30}}]}).toArray();
        console.log(result);

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