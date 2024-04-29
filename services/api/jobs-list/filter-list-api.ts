import axios from "axios";
import { CONSTANTS } from "../../config/app-config";

const GetFiltersListAPI = (): Promise<any> =>
  axios
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=${CONSTANTS.VERSION}&method=get_filters&entity=filters`,
      {
        timeout: 5000, // Timeout after 5 seconds
      }
    )
    .then((response) => response.data);

export default GetFiltersListAPI;
