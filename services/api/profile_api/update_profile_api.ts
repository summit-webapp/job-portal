import { CONSTANTS } from "@/services/config/app-config";
import axios from "axios";

const UpdateProfileAPI = async (token: any, data: any) => {
  let response: any;
  const version = CONSTANTS.VERSION;
  const method = "update_profile";
  const entity = "profile";

  const params = `?version=${version}&method=${method}&entity=${entity}`;

  const body = {
    version,
    method,
    entity,
    name: data.name,
    phone_number: data.phone_number,
    city: data.city,
    ...(data.resume ? { resume: data.resume } : {}),
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    timeout: 10000,
  };

  await axios
    .put(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`,
      body,
      config
    )
    .then((res) => {
      response = res.data;
      console.log(response, "update profile response");
    })
    .catch((err) => {
      console.log(err, "update profile error");
      response = err;
    });

  return response;
};

export default UpdateProfileAPI;
