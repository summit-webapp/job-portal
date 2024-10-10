import * as Yup from "yup";
export const RegistrationValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(5, "Name must be at least 5 characters"),
  email: Yup.string().email().required("Please enter a valid email"),
  contact: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10)
    .max(10)
    .required("A phone number is required"),
  address_1: Yup.string().required("Please enter an address"),
  address_2: Yup.string().required("Please enter an address"),
  gst_number: Yup.string(),
  state: Yup.string().required("Please enter your state"),
  city: Yup.string().required("Please select a valid city"),
  postal_code: Yup.string().required("Pincode is required"),
});

