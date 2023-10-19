import User from "../../../models/userSchema";
import dbConnect from "../../../lib/dbconnect";
import { getServerSession } from "next-auth/next";
dbConnect();

async function handler(req, res) {
const email="btech10103.20@bitmesra.ac.in"




  
  if (req.method === "POST") {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    try {
      const {
       
        image,
        github,
        linkedIn,
        insta,
        bio,
        branch,
        yearofgraduation,
        hostel,
        room,
        phone,
        birthdate,
        name
      } = req.body;

      const user_instance = await User.updateOne(
        { email: email },
        {
          image: image,
          github: github,
          linkedIn: linkedIn,
          insta: insta,
          bio: bio,
          branch: branch,
          yearofgraduation: yearofgraduation,
          hostel: hostel,
          room: room,
          phone: phone,
          birthdate: birthdate,
          name: name,
        },
        { upsert: true }
      );
      console.log(user_instance);
      res.status(200).json({ message: "user Added", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).send(response);
    }
  }
  if (req.method === "GET") {
    const { email } = req.query;
   
    try {
      const user_instance = await User.find({ email: email });
      res.status(200).json({
        message: "User  fetched",
        Status: "Success",
        user: user_instance,
      });
   
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.send(response).status(400);
    }
  }
  if (req.method === "PUT") {
    try {
      const { email, newNote } = req.body;
      console.log("====================================");
      console.log(email);
      console.log("====================================");
      console.log(newNote);
      console.log("====================================");
      console.log("====================================");
      const user_instance = await User.findOne({ email });

      if (!user_instance) {
        return res
          .status(404)
          .json({ message: "User not found", Status: "Failure" });
      }
      console.log(user_instance);
      user_instance.notes.push(newNote);
      console.log(newNote);
      console.log(typeof newNote);
      await user_instance.save();

      res.status(200).json({ message: "Notes Updated", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).json(response);
    }
  }

  if (req.method === "DELETE") {
    try {
      const { email, id } = req.body;
      const user_instance = await User.findOne({ email });
      if (!user_instance) {
        return res
          .status(404)
          .json({ message: "User not found", Status: "Failure" });
      }

      user_instance.notes.splice(id, 1);
      await user_instance.save();
      res.status(200).json({ message: "Note Deleted", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).json(response);
    }
  }
}

export default handler;
