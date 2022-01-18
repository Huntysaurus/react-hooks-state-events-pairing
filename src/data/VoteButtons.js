import React, { useState } from "react";

function VoteButtons({downvotes, upvotes}) {

    const [voteUp, setVoteUp] = useState(upvotes)
    const [voteDown, setVoteDown] = useState(downvotes)

    function handleLike() {
       setVoteUp(voteUp + 1)
    }

    function handleDislike() {
        setVoteDown(voteDown - 1)
    }

    return (
        <div>
            <button onClick={handleLike}>{voteUp} likes</button>
            <button onClick={handleDislike}>{voteDown} dislikes</button>
        </div>
    )
}

export default VoteButtons