import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhonesFromApiByID } from './ApiPhone';

export const PhoneProperty = ({ match }) => {
  const [ phone, setPhone ] = useState({});

  useEffect(() => {
    getPhonesFromApiByID(match.params.phoneId)
      .then(setPhone)
  }, []);



  return (
    <div className="thumbnail">

      <h2>{phone.name}</h2>
      <ul className="thumb">
        {(phone.hasOwnProperty('name')) && (
          phone.images.map(image => (
            <li key={Math.random()}>
              {console.log(image)}
            <img src={image} alt={phone.id}/>
          </li>
          )))}
      </ul>
   
      <p>{phone.description}</p>
      <p className="phones__btn-buy-wrapper">
        <Link 
          to="/phone-catalog"
          className="btn btn-success"
        >
          Back
        </Link>
      </p>
    </div>
  )
}
