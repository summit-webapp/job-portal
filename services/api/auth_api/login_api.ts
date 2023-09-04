import { useMutation } from 'react-query';
import axios from 'axios';
import { CONSTANTS } from '@/services/config/api-config';

const getAccessTokenApi = async (usr:any, pwd:any) => {
    let response:any;
    console.log("token in api",usr, pwd)
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
      await axios
      .post(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=v1&method=get_access_token&entity=access_token&usr=${usr}&pwd=${pwd}`,undefined,{
        ...config,
        timeout: 5000,
      })
      .then((res) => {
        response = res.data.message;
        console.log("login api res",response)
      })
      .catch((err) => {
        if (err.code === "ECONNABORTED") {
          response = "Request timed out";
        } else if (err.code === "ERR_BAD_REQUEST") {
          response = "Bad Request";
        } else if (err.code === "ERR_INVALID_URL") {
          response = "Invalid URL";
        } else {
          response = err;
        }
      });
    return response;
};


export default getAccessTokenApi;
