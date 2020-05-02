import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const {name,email,annual_salary,id,img} = props.item;
    console.log(props);
    return (
        <div className='person'>
            <div className="person-image">
                <img src={img} alt=""/>
            </div>
            <div className="person-info">
                <h4>Name : {name}</h4>
                <p>Email : {email}</p>
                <p>Annual Salary : {annual_salary}</p>
                <p>ID : {id}</p>
                <button className='button' onClick={props.handler}><FontAwesomeIcon icon={faUserPlus} /></button>
            </div>
        </div>
    );
};

export default Person;