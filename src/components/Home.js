import React from 'react';
import App from '../App';
import Sum from './Defaultexport'
import {sum,avg} from './Namedexport'

import { Userprops } from './Userprops';
 class Home extends React.Component{
    
    render(){
        console.log(Sum);
        console.log(sum);
        console.log(avg);
        return(
            <div className="mt-5 d-flex justify-content-left">
                {/* <Userprops name="Sidhu" id="VFX2092" age='21' address="TDR" company="VersaFlex"/>
                <Userprops name="Dhanush" id="VFX2119" age='24' address="Hyd" company="VersaFlex"/> */}
                <h2>Welcome to Home page</h2>
                <h5>Versaflex home page is opened now for the user</h5>
            </div>
        );
    }
}
export default Home;