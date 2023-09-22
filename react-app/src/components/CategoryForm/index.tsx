import { Card, Typography, Input, Select, Button } from "antd";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./categoryFormSchema";
import { CategoryForm as CategoryFormProps } from "../../types";

interface Props {
  onSubmit: (values: CategoryFormProps) => void;
}

const CategoryForm = ({ onSubmit }: Props) => {
  const handleSubmit = (values: CategoryFormProps) => {
    onSubmit(values);
  };

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <Card title={"Add New Category"} bordered style={{ width: "350px" }}>
        <form onSubmit={formMik.handleSubmit}>
          <div>
            <Typography.Paragraph style={{ textAlign: "left" }}>
              {"Name"}
            </Typography.Paragraph>
            <Input
              name={"name"}
              value={formMik.values.name}
              onChange={formMik.handleChange("name")}
              status={formMik.errors.name && "error"}
            />
            {formMik.errors.name && (
              <Typography.Paragraph>{formMik.errors.name}</Typography.Paragraph>
            )}
          </div>
          <div>
            <Typography.Paragraph style={{ textAlign: "left" }}>
              {"Status"}
            </Typography.Paragraph>
            <Select
              style={{ width: "300px", textAlign: "left" }}
              value={formMik.values.is_active}
              onChange={(value) => formMik.setFieldValue("is_active", value)}
              options={[
                {
                  value: true,
                  label: "Active",
                },
                {
                  value: false,
                  label: "Deactive",
                },
              ]}
            ></Select>
            {formMik.errors.is_active && (
              <Typography.Paragraph>
                {formMik.errors.is_active}
              </Typography.Paragraph>
            )}
          </div>
          <Button
            type={"primary"}
            htmlType={"submit"}
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default CategoryForm;
