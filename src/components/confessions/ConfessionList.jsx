import ConfessionItem from "./ConfessionItem";
import { useState } from "react";
import Cheader from "./Cheader";


export default function ConfessionList({ confessions ,upvoteHandler,downvoteHandler,refreshConfessions}) {



   


return (
  <div className="mt-0">
<Cheader refreshConfessions={refreshConfessions}/>


      <div className="p-5">
        {confessions.map((c) => (
          <ConfessionItem key={c._id} confession={c}  upvoteHandler={upvoteHandler} downvoteHandler={downvoteHandler}/>
        ))}
      </div>
    
    </div>
  );
}

