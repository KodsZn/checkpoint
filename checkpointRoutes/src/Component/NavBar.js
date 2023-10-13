import React from 'react'
import './NV.css';

import { Rating } from '@mui/material';
import { Button, Form } from 'react-bootstrap';

const NavBar = ({setInputSearch,setInputStars}) => {
  return (
    <>
        <nav class="menu2">
        <menu>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#"><Rating name="size-medium" defaultValue={0} onChange={(e)=>setInputStars(e)}/></a></li>
            <li><a href="#"><Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setInputSearch(e.target.value)}>
                    </Form.Control>
                    <Button onClick={()=>(setInputSearch(""),setInputStars(0))}>clear</Button>
            </a></li>

</menu>
</nav>

</>
  )
}

export default NavBar