import { CONSTANTS } from "@/services/config/api-config";
import axios from "axios";

const RegisterPost = async (request: any) => {
    let response: any;
    const version = CONSTANTS.VERSION;
    const method = "customer_signup";
    const entity = "registration";
    console.log(request, "body");
    const params = `?version=${version}&method=${method}&entity=${entity}`;
    const encodedPassword = encodeURIComponent(request.confirm_password);
    console.log('register api', request)

    const formData = new FormData();
    console.log('register api formData', formData)
    formData.append("email", request.email);
    formData.append("password", request.password);
    formData.append("name", request.name);
    formData.append("phone_number", request.phone_number);
    formData.append("city", request.city);
    formData.append("resume", request.resume);
    formData.append("version", version); // Add version to formData
    formData.append("method", method);   // Add method to formData
    formData.append("entity", entity);   // Add entity to formData
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
        },
        timeout: 5000,
    };
    await axios
        .post(
            `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}`, formData, config
        )
        .then((res) => {
            console.log(res, "response in api");
            response = res.data.message;
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


export default RegisterPost;
