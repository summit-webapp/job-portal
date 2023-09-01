import axios from "axios";
import { CONSTANTS } from "../../config/api-config";

const GetFiltersListAPI = (): Promise<any> =>
  axios
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=${CONSTANTS.VERSION}&method=get_filters&entity=filters`
    )
    .then((response) => response.data);

export default GetFiltersListAPI;
