import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import CommentCard from "../CommentCard";

const Comments = ({ comments, id, addComment, deleteComment }) => {
    const [rating, setRating] = useState("1");
    const [comment, setComment] = useState("");
    const [user, setUser] = useState(3);
    const [restId, setRestId] = useState(id)

    

    // console.log(userId)
  

    function handleSubmit(e) {
        addComment({restaurant_id: restId, user_id: user, rating, comment})
        setComment("")
    }


    return(

        <section className="comments">
        <hr></hr>
        
        Rating: <select className="ui dropdown"
        type="text"
        id="rating"
        name="rating"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        >
        <option value="1">1 out of 5</option>
        <option value="2">2 out of 5</option>
        <option value="3">3 out of 5</option>
        <option value="4">4 out of 5</option>
        <option value="5">5 out of 5</option>
        </select>

        <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <label htmlFor="comment"> </label>
          <input
          type="text"
          id="comment"
          name="comment"
          placeholder = 'comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          />
          <button className = 'submit'type="submit" > Submit</button>
        </form>

        <h2 className="subtitle">Comments</h2>
        <br></br>
        <div className="comments">
            {comments.map(com => 
            <CommentCard
            com_id={com.id}
            user={com.username}
            comment={com.comment}
            rating={com.rating}
            deleteComment={deleteComment}
            />
        )}
        </div>

    </section>

    )
}

export default Comments;