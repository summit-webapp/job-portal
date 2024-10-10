import { CONSTANTS } from "@/services/config/app-config";
import axios from "axios";

const UploadFileApi = async (request: any) => {
  let response: any;

  const formData = new FormData();
  console.log("register api formData", formData);
  formData.append("file", request.file);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: "token 4b1690b4e3df667:26b5c8c66c432cc",
    },
  };
  await axios
    .post(`${CONSTANTS.API_BASE_URL}/api/method/upload_file`, formData, config)
    .then((res) => {
      console.log(res, "response in api");
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

export default UploadFileApi;
