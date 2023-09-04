import { CONSTANTS } from "@/services/config/api-config";
import axios from "axios";


const GetProfileAPI =async (token:any) => {

    let response: any;
    const version = CONSTANTS.VERSION;
    const method = "get_profile";
    const entity = "profile";

    const params = `?version=${version}&method=${method}&entity=${entity}`;
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization: token,
        },
        timeout: 5000,
    };
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`,config)
        .then((res) => {
            response = res.data.message.data;
            console.log(response, "profile response in api");
        })
        .catch((err) => {
            console.log(err, "response in api");
        });
    return response;
}

export default GetProfileAPI;
