import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhonesFromApiByID } from './ApiPhone';


export const PhoneProperty = ({ phoneId }) => {
  const [ phone, setPhone ] = useState({});

  useEffect(() => {
    getPhonesFromApiByID("motorola-xoom-with-wi-fi")
      .then(setPhone)
  }, []);

  return (
    <li className="thumbnail">

      <h2>{phone.name}</h2>
      {(phone.hasOwnProperty('name')) && (
        <div className="thumb">
        <img alt={phone.id} src={phone.images[0]} />
        <img alt={phone.id} src={phone.images[1]} />
        <img alt={phone.id} src={phone.images[2]} />
      </div>
      )}
        
      <p>{phone.description}</p>
      <p className="phones__btn-buy-wrapper">
        <Link 
          to="/"
          className="btn btn-success"
        >
          Back
        </Link>
      </p>
    </li>
  )
}
