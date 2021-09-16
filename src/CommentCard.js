
const CommentCard = ({ user, comment, rating }) => {

    return(
        <>
            <h3 className="user">{user}</h3>
            <div><strong>Rating:</strong> {rating}/5</div>
            <div>{comment}</div>

        </>
    )
}

export default CommentCard;