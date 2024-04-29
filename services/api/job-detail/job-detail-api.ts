import { CONSTANTS } from "@/services/config/app-config";
import axios from "axios";

const GETJobDetailAPI = (jobID: any): Promise<any> =>
  axios
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=${CONSTANTS.VERSION}&method=job_opening_details&entity=job_opening&name=${jobID}`,
      {
        timeout: 5000, // Timeout after 5 seconds
      }
    )
    .then((response) => response.data);

export default GETJobDetailAPI;

