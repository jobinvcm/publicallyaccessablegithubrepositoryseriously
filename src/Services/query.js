import Axios from "axios";

const query = (queryType, params) => {
  let queryUrl = "https://api.themoviedb.org/3/";
  let apiKey = "key_goes_here";
  let queryBuilt = `${queryUrl}${queryType}?api_key=${apiKey}`;

  let queryResult = Axios.get(queryBuilt, {
    params
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
    });

  return queryResult;
};

export default query;
