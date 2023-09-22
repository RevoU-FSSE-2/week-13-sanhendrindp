import { CategoryForm } from "../../components";
import { Card } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoryForm as CategoryFormProps, Category } from "../../types";

const CategoryEdit = () => {
  const navigate = useNavigate();
  const [category, setCategories] = useState<Category>();

  const { id } = useParams();

  const getCategory = useCallback(async () => {
    const fetching = await fetch(
      `https://mock-api.arikmpt.com/api/category/${id}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1YzIwMjM3LTkyN2QtNGNjZi1iZDUyLWQ1NGE2Y2Y5ZWE3MCIsImlhdCI6MTY5NTM5NjAwMSwiZXhwIjoxNjk1NDE3NjAxfQ.e3apOMqivgQExZAiwgyVKlciGpYmJnBvAzLtEpfwbq0",
        },
      }
    );
    const response: Category = await fetching.json();

    setCategories(response);
    console.log(response);
  }, [id]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const onSubmit = async (values: CategoryFormProps) => {
    try {
      const fetching = await fetch(
        `https://mock-api.arikmpt.com/api/category/update`,
        {
          method: "PUT",
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

  if (category) {
    return (
      <>
        <Card title={"Edit Category"} bordered style={{ width: "350px" }}>
          <CategoryForm onSubmit={onSubmit} category={category} />
        </Card>
      </>
    );
  }
  return null;
};

export default CategoryEdit;
