import { CONSTANTS } from "@/services/config/api-config";
import axios from "axios";

const CategoriesAPI = (): Promise<any> =>
  axios
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=${CONSTANTS.VERSION}&method=get_job_category&entity=job_category`
    )
    .then((response) => response.data);

export default CategoriesAPI;