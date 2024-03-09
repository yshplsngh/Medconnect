import React, { useState } from 'react';
import arrow from './images/pointdown.png';
import s from './images/secure.png';
import './Dropdown.css';

export default function Dropdown(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const cardStyle = {
    height: isExpanded ? 'auto' : '18vh', // Adjust the height as needed
  };

  return (
    <div className='dropdown' style={cardStyle}>
      <div>
        <img src={s} alt="Secure" className='secure' />
        <h5>{props.t}</h5>
        <img src={arrow} alt="Arrow" onClick={handleClick} className='arrow' />
      </div>
      {isExpanded && <p>{props.des}</p>}
    </div>
  );
}