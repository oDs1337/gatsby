import React from "react";
import {Contact} from "../components/contact";
import {Link} from 'gatsby';
import './header.css';

export const Header = () => <div>

<ul>
        <li><Link to ='/' activeClassName='activeLink'>Home</Link></li>
        <li><Link to ='/about' activeClassName='activeLink'>About</Link></li>



    </ul>
   

</div>