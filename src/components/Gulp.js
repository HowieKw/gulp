import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useOnClickOutside } from '../hooks';
import { Burger, Menu } from './MenuToggle';
import Home from './Home';
import Nightmode from './Nightmode';
import Restaurant from './Restaurants';
import RestaurantDetails from './RestaurantDetails';
import SignupForm from './SignupForm';

const Gulp = ({ themeToggler, theme }) => {
    const [open, setOpen] = useState(false);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/restaurants')
        .then(resp => resp.json())
        .then(restaurantData => setRestaurants(restaurantData))
      }, []);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return(
        
        <>
        <header className="header">
            <h1 className="title">GULP</h1>
        <div ref={node}>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </div>
        
        <div>
            <Nightmode theme={theme} themeToggler={themeToggler} />
        </div>
        </header>

        <div>
            <Switch>
                <Route path="/Login-Signup" component={() => <SignupForm />} />
            
                <Route path="/Restaurants/:id" component={() => <RestaurantDetails />} />

                <Route path="/Restaurants" component={() => <Restaurant restaurants={restaurants}/>} />

                <Route path="/" component={() => <Home />} />
            </Switch>
        </div>
        </>
    )
}

export default Gulp;