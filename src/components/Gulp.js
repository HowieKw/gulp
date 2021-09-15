import React, { useState, useEffect, useRef } from 'react'
import { useOnClickOutside } from '../hooks';
import { Burger, Menu } from './MenuToggle';

const Gulp = () => {
    const [open, setOpen] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return(
        <div ref={node}>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Gulp;