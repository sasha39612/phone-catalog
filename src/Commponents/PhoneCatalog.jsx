import React, { useEffect, useState } from 'react';
import { getPhonesFromApi, getPhonesFromApiByID } from './ApiPhone';
import { Phone } from './Phone';

export const PhoneCatalog = () => {
  const [phones, setPhones] = useState([]);
  const [phoneId, setPhoneId] = useState('');

  useEffect(() => {
    getPhonesFromApi().then(setPhones)
  }, []);

  const chosePhone = (phoneID) => {
    setPhoneId(phoneID)
  };

  return (
    <>
    <ul
      className="phones"
    >
      {phones.map(phone => (
       <Phone
        phone={phone}
        key={phone.id} 
        onChosePhone={chosePhone}
      />
      )
      )}
    </ul>
    </>
  )
}
