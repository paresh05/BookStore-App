import * as yup from "yup";

export const createUserSchema = yup.object().shape({
    firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(3,"Too Short").required("Required"),
    lastName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(3,"Too Short").required("Required"),
    email: yup.string().email("Enter valid email").required("Required"),
    password:yup.string().min(8, "Minimum characters should be 8").required("Required"),
    confirmPassword:  yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Required")
});
export const loginUserSchema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Required"),
    password:yup.string().min(8, "Minimum characters should be 8").required("Required"),
});