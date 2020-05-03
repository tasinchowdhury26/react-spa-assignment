import React from "react";
import "./Counter.css";
const Counter = (props) => {
  // console.log(props);
  const count = props.count;
  const names = props.names;
  const total = count.reduce(
    (total, usr) => Number(total + usr.annual_salary),
    0
  );
  return (
    <div className="counter-card">
      <div className="maths">
        <p>Currently Added : {count.length} users</p>
        <p>Total Annual Salary :$ {total}</p>
      </div>
      <div className="names">
          <h3>Added Users</h3>
        <ul>
            {
                names.map(n => <li className='list'>{n}</li>)
            }
        </ul>
      </div>
    </div>
  );
};

export default Counter;
