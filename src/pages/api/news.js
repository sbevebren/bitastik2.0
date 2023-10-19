import dbConnect from "../../../lib/dbconnect";
import News from "../../../models/newsSchema";
import { useSession } from "next-auth/react";
dbConnect();

async function handler(req, res) {
  if (req.method === "GET") {
    console.log("====================================");
    try {
      const news = await News.find().sort({ createdAt: -1 });
      res.status(200).json({ news });
      console.log(news);
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.send(response).status(400);
    }
  }

  if (req.method === "POST") {
   try {
      const { title, image, date, description } = req.body;
      console.log("====================================");
      console.log(req.body);
      console.log("====================================");
      const news_instance = new News({
        title: title,
        image: image,
        date: date,
        description: description,
      });
      await news_instance.save();
      res.status(201).json({ message: "News Inserted" });
    } catch (err) {
      const response = { Status: "Failure", Desciription: err.message };
      res.send(response).status(400);
    }
  }
}

export default handler;
