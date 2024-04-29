import { CONSTANTS } from "@/services/config/app-config";
import axios from "axios";

const CategoriesAPI = (): Promise<any> =>
  axios
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=${CONSTANTS.VERSION}&method=get_job_category&entity=job_category`,
      {
        timeout: 5000, // Timeout after 5 seconds
      }
    )
    .then((response) => response.data);

export default CategoriesAPI;
