import React from 'react';
import App from '../App';

function Userprops(props){
    console.log(props)
    return(
        
        <div>
            <p>Name of the employee: {props.name}</p>
            <p>Id of the employee: {props.id}</p>
            <p>Age of the employee: {props.age}</p>
            <p>Address of the employee: {props.address}</p>



            {/* <p>Phn number of the employee: {props.phm}</p>
            <p>Experience of the employee: {props.exp}</p>
            <p>Blood Grp of the employee: {props.bloodgrp}</p> */}

            <p>Company of the employee: {props.company}</p>
        </div>
    )
}

export {Userprops}