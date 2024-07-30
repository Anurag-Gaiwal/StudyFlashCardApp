const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db_url = process.env.DB_URL;

app.post("/save", (req,res)=>{
    const url = db_url
    const client = new MongoClient(url);
    const db = client.db("FlashCards");
    const coll = db.collection("Cards");
    const record = {"Question":req.body.question,"Answer":req.body.answer}
    coll.insertOne(record)
    .then(result=>res.send(result))
    .catch(error=>res.send(error));
})

app.get("/get",(req,res)=>{
	const url = db_url
	const client  = new MongoClient(url);
	const db = client.db("FlashCards");
    const coll = db.collection("Cards");
	coll.find({}).toArray()
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
})

app.delete("/delete",(req,res)=>{
	const url = db_url
	const client  = new MongoClient(url);
	const db = client.db("FlashCards");
    const coll = db.collection("Cards");
    const record = {"Question":req.body.question,"Answer":req.body.answer}
	coll.deleteOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
})

app.put("/update",(req,res)=>{
	const url = db_url
	const client  = new MongoClient(url);
	const db = client.db("FlashCards");
    const coll = db.collection("Cards");
	const whom = {"Question":req.body.oldquestion,"Answer":req.body.oldanswer};
	const what = {"$set":{"Question":req.body.newquestion,"Answer":req.body.newanswer}}
	coll.updateOne(whom,what)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));                            
})


app.listen(9000,()=>{console.log("Ready on @ 9000")});