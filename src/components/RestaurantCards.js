import { Link } from "react-router-dom";
import { P } from "../theme";

const RestaurantCards = ({ restaurant }) => {
    const { name, category, price, id } = restaurant

    let path = `/Restaurants/${id}`

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
                <P>
                    <Link to={path}>
                        See more
                    </Link>
                </P>
            </li>
        </div>
    )
}

export default RestaurantCards;