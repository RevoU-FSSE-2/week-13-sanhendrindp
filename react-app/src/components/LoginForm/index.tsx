import { Button, Card, Input, Typography } from "antd";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./loginFormSchema";
import { LoginForm as LoginFormProps } from "../../types";

interface Props {
  onSubmit: (values: LoginFormProps) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  const handleSubmit = (values: LoginFormProps) => {
    onSubmit(values);
  };

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <Card title={"Login"} bordered style={{ width: "350px" }}>
        <form onSubmit={formMik.handleSubmit}>
          <div>
            <Typography.Paragraph style={{ textAlign: "left" }}>
              {"Username"}
            </Typography.Paragraph>
            <Input
              name={"username"}
              value={formMik.values.username}
              onChange={formMik.handleChange("username")}
              status={formMik.errors.username && "error"}
            />
            {formMik.errors.username && (
              <Typography.Paragraph style={{ color: "red" }}>
                {formMik.errors.username}
              </Typography.Paragraph>
            )}
          </div>
          <div>
            <Typography.Paragraph
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {"Password"}
            </Typography.Paragraph>
            <Input
              name={"password"}
              value={formMik.values.password}
              onChange={formMik.handleChange("password")}
              status={formMik.errors.password && "error"}
            />
            {formMik.errors.password && (
              <Typography.Paragraph style={{ color: "red" }}>
                {formMik.errors.password}
              </Typography.Paragraph>
            )}
          </div>
          <Button
            type={"primary"}
            htmlType={"submit"}
            style={{ width: "300px", marginTop: 20 }}
          >
            Login
          </Button>
        </form>
        <div style={{ marginTop: "30px" }}>
          <p style={{ fontStyle: "italic" }}>Don't have any account yet? </p>
          <Button
            type={"default"}
            htmlType={"submit"}
            style={{ width: "300px" }}
          >
            Register
          </Button>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
