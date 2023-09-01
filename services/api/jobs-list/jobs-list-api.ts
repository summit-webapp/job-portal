import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { API_CONFIG, TIMEOUT } from "../../config/app-config";

export const GetJobsListAPI = (filters?: any): Promise<any> => {
  console.log("filters in api file", filters);
  let params: any;
  if (filters?.length > 0) {
    params = `?version=${CONSTANTS.VERSION}&method=job_opening_list&entity=job_opening&job_category=${filters}`;
  } else {
    params = `?version=${CONSTANTS.VERSION}&method=job_opening_list&entity=job_opening`;
  }
  return axios
    .get(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`)
    .then((response) => response.data);
};
