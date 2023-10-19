import { format } from "timeago.js";
import { useSession } from "next-auth/react";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useState } from "react";

function ConfessionItem({ confession, upvoteHandler, downvoteHandler }) {
  const { data: session } = useSession();
  const [upvotes, setUpvotes] = useState(confession.upvotes);
  const [downvotes, setDownvotes] = useState(confession.downvotes);
  const userVote = confession.votedBy.find(
    (vote) => vote.email === session.user.email
  );

  const [isUpvoted, setIsUpvoted] = useState(
    userVote && userVote.vote === "upvote"
  );
  const [isDownvoted, setIsDownvoted] = useState(
    userVote && userVote.vote === "downvote"
  );

  function downvote() {
    if(isUpvoted){
      setUpvotes(upvotes-1);
    }
    setIsUpvoted(false);
    if(isDownvoted){
    setDownvotes(downvotes-1);
    }
    if(!isDownvoted){
      setDownvotes(downvotes+1);
    }
    setIsDownvoted(!isDownvoted);
    downvoteHandler(confession._id);
  }

  function upvote() {
    if(isDownvoted){
      setDownvotes(downvotes-1);
      setIsDownvoted(false);
    }
   
    if(isUpvoted){
      setUpvotes(upvotes-1);
    }
    if(!isUpvoted){
      setUpvotes(upvotes+1);
    }
    setIsUpvoted(!isUpvoted);
   
    upvoteHandler(confession._id);
  }

  return (
    <div className=" p-4   rounded-lg shadow bg-transparent border hover:bg-gray-900 text-gray-400 mb-4">
      <div className="max-w-xl">
        <div className="text-lg mb-2 text-green-400">{confession.content}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            className={`flex items-center space-x-1 cursor-pointer ${
              isUpvoted ? " text-blue-500" : ""
            }`}
            onClick={upvote}
          >
            {isUpvoted ? (
              <ThumbUpIcon fontSize="small" />
            ) : (
              <ThumbUpOffAltIcon fontSize="small" />
            )}
            <span>{upvotes}</span>
          </button>
          <button
            className={`flex items-center space-x-1 cursor-pointer ${
              isDownvoted ? " text-pink-500" : ""
            }`}
            onClick={downvote}
          >
            {isDownvoted ? (
              <ThumbDownAltIcon fontSize="small" />
            ) : (
              <ThumbDownOffAltIcon fontSize="small" />
            )}
            <span>{downvotes}</span>
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2 md:mt-0">
          {format(new Date(confession.createdAt), "MMM dd, yyyy")}
        </div>
      </div>
    </div>
  );
}

export default ConfessionItem;
