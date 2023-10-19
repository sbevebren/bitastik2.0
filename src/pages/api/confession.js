import Confession from "../../../models/confessionSchema";
import dbConnect from "../../../lib/dbconnect";
dbConnect();

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, content } = req.body;
      const confession_instance = new Confession({
        email: email,
        content: content,
      });
      await confession_instance.save();
-
      res.status(200).json({ message: "content Added", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).send(response);
    }
  }
  if (req.method === "GET") {
    try {
      const confessions = await Confession.find().sort({ createdAt: -1 });
      res.status(200).json({ confessions });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.send(response).status(400);
    }
  }

  if (req.method === "PUT") {
    try {
      const { email, _id, vote } = req.body;
      const confession_array = await Confession.find({ _id: _id });

      const confession_instance = confession_array[0];

      const found = confession_instance.votedBy.some(
        (voted) => voted.email === email
      );
    
      if (!found) {

confession_instance.votedBy.push({ email, vote })
   
        if (vote === "upvote") {
          confession_instance.upvotes += 1;
        } else {
          confession_instance.downvotes += 1;
        }
      } else {
        const currentVoteObj = confession_instance.votedBy.filter((voted) => voted.email === email);
        console.log(currentVoteObj);
        console.log(currentVoteObj[0].vote)
        const currentVote=currentVoteObj[0].vote
      
        if (currentVote === vote) {
          confession_instance.votedBy.splice(
            confession_instance.votedBy.indexOf(currentVoteObj[0]),
            1
          );
          console.log(confession_instance.upvotes)
          if (vote === "upvote") {
            confession_instance.upvotes -= 1;
            console.log(confession_instance.upvotes)
          } else {
            confession_instance.downvotes -= 1;
          }
        } else {
          currentVoteObj[0].vote=vote
          if (vote === "upvote") {
            confession_instance.upvotes += 1;
            confession_instance.downvotes -= 1;
          } else {
            confession_instance.upvotes -= 1;
            confession_instance.downvotes += 1;
          }
        }
      }

      await confession_instance.save();
      res
        .status(200)
        .json({ message: "content Added", Status: "Success", confession_instance});
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).send(response);
    }
  }
}

export default handler;
