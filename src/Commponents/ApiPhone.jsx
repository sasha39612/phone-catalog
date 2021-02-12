const BASE_URL = '/api/phones'



const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
  .then(response => {
    if (response.ok) {

      return response.json();
    }

    throw `${response.status} - ${response.statusText}`
  });
};

export const getPhonesFromApi = () => {

  return request('.json')
}

export const getPhonesFromApiByID = (id) => {

  return request(`/${id}.json`)
}
