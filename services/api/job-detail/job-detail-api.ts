import { CONSTANTS } from "@/services/config/app-config";
import axios from "axios";

const GETJobDetailAPI =async (jobID: any) =>{
  const decodedUrl = decodeURIComponent(jobID)
  const enc = encodeURIComponent(decodedUrl)
  let response :any;
  
  
  await axios
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}?version=${CONSTANTS.VERSION}&method=job_opening_details&entity=job_opening&name=${enc}`,
      {
        timeout: 5000, // Timeout after 5 seconds
      }
    )
    .then((res) =>response= res.data);

    return response
  }
export default GETJobDetailAPI;

