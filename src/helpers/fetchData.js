import { HOST_URL, USE_LOCAL_DATA } from '../common/constants';
import jsonData from '../data/data.json';

const fetchData = async () => {
  let responseData;
  
  if(USE_LOCAL_DATA){
    responseData = jsonData.data;
  } else {
    const response = await fetch(HOST_URL);
    responseData = await response.json();
  }

  return responseData;
}

export default fetchData;
