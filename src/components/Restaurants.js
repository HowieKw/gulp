import RestaurantCards from "./RestaurantCards";

const Restaurant = ({ restaurants }) => {

    const displayRestaurants =
    restaurants.map(restaurant => 
        <RestaurantCards
        key={restaurant.id}
        restaurant={restaurant}
        />
        )

    return(
        <section className="restaurants">
            {displayRestaurants}
        </section>
    )
}

export default Restaurant;