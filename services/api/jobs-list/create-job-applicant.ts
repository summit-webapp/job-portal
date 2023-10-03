import axios from "axios";
import { API_CONFIG, TIMEOUT } from "@/services/config/api-config";
import { CONSTANTS } from "@/services/config/app-config";

const CreateJobApplicantAPI = async (
  token: string,
  designation: string,
  name: string,
  status: string
) => {
  console.log("applicant creation", token, designation, name, status);

  let response: any;
  let params: any;

  params = `?version=${CONSTANTS.VERSION}&method=apply_job&entity=job_applicant&designation=${designation}&name=${name}&status=${status}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
    timeout: TIMEOUT,
  };
  await axios
    .post(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`,
      undefined,
      config
    )
    .then((res) => {
      console.log("applicant creation api successfull", res);
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

export default CreateJobApplicantAPI;
