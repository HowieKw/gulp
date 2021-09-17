import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const RestaurantDetails = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [commentView, setCommentView] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${id}`)
        .then(resp => resp.json())
        .then(restData => {
            setRestaurant(restData);
            setComments(restData.reviews);
            setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, category, description, price } = restaurant;
    

    function handleAddComment(newComment) {
        fetch(`http://localhost:9292/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(resp => resp.json())
        .then(newCom => {
            setComments(comments.concat(newCom))
        })
    }


    function deleteComment(comId) {
        fetch(`http://localhost:9292/reviews/${comId}`, {
            method: 'DELETE'
        })
        let remainCom = comments.filter(comment => comment.id !== comId)
        setComments([...remainCom])
    }


    return(
        <section className="details">
            <div className="rest-details">
                <h2>
                    {name}
                </h2>
                <h3>
                    {category}
                </h3>
                    {price}
                <h4>
                Description:
                </h4>
                <p>
                    {description}
                </p>
            </div>
            <div>
                    <>
                        <Comments  
                        comments={comments}
                        addComment={handleAddComment}
                        deleteComment={deleteComment}
                        id={id}
                        />
                    </>
    
            </div>
        </section>
    )
}

export default RestaurantDetails;