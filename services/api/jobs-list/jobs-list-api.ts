import axios from "axios";
import { CONSTANTS } from "../../config/app-config";
import { API_CONFIG, TIMEOUT } from "../../config/api-config";

const GetJobsListAPI = async (query?: any) => {
  let response: any;

  let params: any;

  if (Object.keys(query)?.length > 0) {
    params = `?version=${
      CONSTANTS.VERSION
    }&method=job_opening_list&entity=job_opening&job_category=${JSON.stringify(
      query
    )}`;
  } else {
    params = `?version=${CONSTANTS.VERSION}&method=job_opening_list&entity=job_opening`;
  }

  // console.log("job listing api params", params);
  await axios
    .get(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`, {
      ...API_CONFIG,
      timeout: TIMEOUT,
    })
    .then((res) => {
      // console.log("job listing api successfull", res);
      response = res;
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
export default GetJobsListAPI;
