import React from "react"
import video from "../data/video.js";
import Header from "../data/Header.js"
import VoteButtons from "../data/VoteButtons.js"
import CommentForm from "./CommentForm"

function App() {

  // const [upVotes, setUpVotes] = useState(video.upvotes)
  // const [downVotes, setDownVotes] = useState(video.downvotes)
  console.log("Here's your data:", video);
  console.log(video.comments.length)

  return (
    <>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={video.title}
        />
      </div>
      <Header title={video.title} createdAt={video.createdAt} views={video.views} />
      <VoteButtons downvotes={video.downvotes} upvotes={video.upvotes}/>
      <CommentForm comments={video.comments}/>
    </>
  );
}

export default App;

// App_______
//   |      |
//   video  Header
//          |
//          buttons
