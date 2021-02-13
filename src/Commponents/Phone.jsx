import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Phone = ({ phone, onChosePhone }) => {

  return (
    <li className="thumbnail">
      <p className="phones__btn-buy-wrapper">
        <a className="btn btn-success" href="#buy">
          Add
        </a>
      </p>

      <Link
        to={`/phonecatalog/phoneProperty/${phone.id}`}
        className="thumb"
        value={phone.id}
        onClick={() => {onChosePhone(phone.id)}}
      >
        <img alt={phone.id} src={phone.imageUrl} />
      </Link>

      <Link
        to={`/phonecatalog/phoneProperty/${phone.id}`}
        value={phone.id}
        onClick={() => {onChosePhone(phone.id)}}
      >
        {phone.name}
      </Link>
      <p>{phone.snippet}</p>

    </li>
  )
}
