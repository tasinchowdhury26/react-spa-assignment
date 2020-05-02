import React, { useState } from "react";
import fakeData from "../../fakeData/fakeData";
import "./Users.css";
import Person from "../Persons/Person";
import Counter from "../Counter/Counter";
const Users = () => {
    const users = [...fakeData];
    const [user,setUser] = useState(users);
    const [sum,setSum] = useState(0);
    const handler = () =>{
      console.log('Clicked');
    }
    // console.log(fakeData);
  return (
    <div className='user-container'>
      <div className="user-info">
        {
          user.map(usr => <Person handler={handler} item={usr}></Person>)     //item is property name. usr is property's value.So, each user is given inside as property.
        }
      </div>
      <div className="counter">
        <h2>Number of users : {user.length}</h2>
        <Counter></Counter>
      </div>
    </div>
  );
};

export default Users;
