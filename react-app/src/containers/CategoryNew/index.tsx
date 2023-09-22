import { CategoryForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { CategoryForm as CategoryFormProps } from "../../types";
import { Card } from "antd";

const CategoryNew = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: CategoryFormProps) => {
    try {
      const fetching = await fetch(
        "https://mock-api.arikmpt.com/api/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1YzIwMjM3LTkyN2QtNGNjZi1iZDUyLWQ1NGE2Y2Y5ZWE3MCIsImlhdCI6MTY5NTM5NjAwMSwiZXhwIjoxNjk1NDE3NjAxfQ.e3apOMqivgQExZAiwgyVKlciGpYmJnBvAzLtEpfwbq0",
          },
          body: JSON.stringify(values),
        }
      );
      await fetching.json();
      navigate("/category");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Card title={"Add Category"} bordered style={{ width: "350px" }}>
        <CategoryForm onSubmit={onSubmit} />
      </Card>
    </>
  );
};

export default CategoryNew;
