import axios from "axios";
import { CONSTANTS } from "../config/api-config";
import { API_CONFIG, TIMEOUT } from "../config/app-config";

const GetJobsListAPI = (): Promise<any> =>
  axios
    .get(
      "https://demo-v14.8848digitalerp.com/api/method/job_portal.sdk.api?version=v1&method=job_opening_list&entity=job_opening"
    )
    .then((response) => response.data);

// const GetJobsListAPI = async () => {
//   let response;
//   const version = CONSTANTS.VERSION;
//   const method = "get_job_opening";
//   const entity = "job_opening";
//   const params = `?version=${version}&method=${method}&entity=${entity}`;
//   await axios
//     .get(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`, {
//       ...API_CONFIG,
//       timeout: TIMEOUT,
//     })
//     .then((res) => {
//       console.log("jobs list data api", res);
//       response = res.data;
//       res.data;
//     })
//     .catch((err) => console.log("err in api", err));

//   return response;
// };
export default GetJobsListAPI;
