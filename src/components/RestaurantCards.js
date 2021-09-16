import { Link } from "react-router-dom";
// import { RenderCards, Card } from "../theme";

const RestaurantCards = ({ restaurant }) => {
    const { name, category, price, id } = restaurant

    return(
        <div className="cards">
            <li className="card">
                <h2>
                    {name}
                </h2>
                <h3>
                    {category}
                </h3>
                    {price}
            </li>
        </div>
    )
}

export default RestaurantCards;