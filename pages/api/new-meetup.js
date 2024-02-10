import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
    );
    const db = await client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ messge: "meetup inserted" });
  }
}

export default handler;
