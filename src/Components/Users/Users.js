import React, { useState } from "react";
import fakeData from "../../fakeData/fakeData";
import "./Users.css";
import Person from "../Persons/Person";
import Counter from "../Counter/Counter";
const Users = () => {
    const users = [...fakeData];
    const [user,setUser] = useState(users);
    const [names,setNames] = useState([]);
    let [count,setCount] = useState([]);
    const handler = (data) =>{
      const newCount = [...count,data];
      setCount(newCount);
      let newNames = [...names,data.name];
      setNames(newNames);
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
        <h3>Number of users : {user.length}</h3>
        <Counter count={count} names={names}></Counter>
      </div>
    </div>
  );
};

export default Users;
