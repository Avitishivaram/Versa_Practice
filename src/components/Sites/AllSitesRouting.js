import React from "react";
import {Link} from 'react-router-dom';
import './Allsites.css'

const AllSitesRouting= () => {
    return(
        <>
        <ul>
        <Link to="/"><li>Mainpage</li></Link>
        <Link to="/Dashboard"><li>Dashboard</li></Link>
        <Link to="/KnowUs"><li>KnowUs</li></Link>
        <Link to="/Carrer"><li>Carrer</li></Link>
        <Link to="/ContactUS"><li>ContactUs</li></Link>
        <Link to="/Users"><li>Users</li></Link>
        <Link to="*"><li></li></Link>
        </ul>
           

        </>
    )
}

export default AllSitesRouting