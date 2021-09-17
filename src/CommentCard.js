
const CommentCard = ({ user, comment, rating, com_id, deleteComment }) => {


    console.log(com_id)
    return(
        <>
            <h3 className="user">{user}</h3>
            <div><strong>Rating:</strong> {rating}/5</div>
            <div>
                {comment}  <button onClick={() => deleteComment(com_id)}>x</button>
            </div>

        </>
    )
}

export default CommentCard;