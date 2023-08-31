import axios from "axios";

const GETJobDetailAPI = (jobID: any): Promise<any> =>
  axios
    .get(
      `https://demo-v14.8848digitalerp.com/api/method/job_portal.sdk.api?version=v1&method=job_opening_details&entity=job_opening&name=${jobID}`
    )
    .then((response) => response.data);

export default GETJobDetailAPI;
