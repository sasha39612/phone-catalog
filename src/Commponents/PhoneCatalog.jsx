import React from 'react';

export async function getPhonesFromApi() {
  const response = await fetch('../../public/api/phones.json');

  console.log(response, 123)
  return response.json();
}

export const PhoneCatalog = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getPhonesFromApi().then(setPhones)
  }, []);

  return (
    <>
    <ul
      className="phones"
    >
      {phones.map(phone => (
        <li className="thumbnail" key={phone.id}>
          <a href="#!/phones/motorola-atrix-4g" className="thumb">
            <img alt="MOTOROLA ATRIX™ 4G" src={phone.imageUrl} />
          </a>
          <a href="#!/phones/motorola-atrix-4g">{phone.name}</a>
          <p>{phone.shippet}</p>
          </li>
        )
      )}
    </ul>
    </>
  )
}


{/* <li className="thumbnail">
<a href="#!/phones/motorola-atrix-4g" className="thumb">
  <img alt="MOTOROLA ATRIX™ 4G" src={phone.imageUrl} />
</a>
<a href="#!/phones/motorola-atrix-4g">{phone.name}</a>
<p>{phone.shippet}</p>
</li>

{
  "age": 2, 
  "carrier": "AT&T", 
  "id": "motorola-atrix-4g", 
  "imageUrl": "img/phones/motorola-atrix-4g.0.jpg", 

},  */}