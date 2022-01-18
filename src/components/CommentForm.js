import React, { useState } from "react";

function CommentForm({comments}) {

    const commentSection = comments.map(comment => <div key={comment.comment}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
    </div>)

    const [hideComments, setHideComments] = useState(commentSection)
    const [commentHeader, setCommentHeader] = useState("Hide Comments")

    function handleComments() {
     if (commentHeader === "Hide Comments") {
        setCommentHeader("Show Comments")
        setHideComments("")
     } else {
         setCommentHeader("Hide Comments")
         setHideComments(commentSection)
     }
    }

    return (
        <div>
            <button onClick={handleComments}>{commentHeader}</button>
            <h2>{comments.length} Comments</h2>
            <div>{hideComments}</div>
        </div>
    )
}
export default CommentForm