
const CommentCard = ({ user, comment, rating, com_id, deleteComment }) => {


    console.log(com_id)
    return(
        <div className="comment">
            
            <h3 className="user">{user}</h3>
            <div><strong>Rating:</strong> {rating}/5</div>
            <div>
                {comment}  <button onClick={() => deleteComment(com_id)}>x</button>
            </div>

        </div>
    )
}

export default CommentCard;