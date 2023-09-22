import * as yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = yup.object({
  username: yup.string().required("Name require to fill"),
  password: yup.number().min(1).required("Price require to fill"),
});
