import { CategoryForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { CategoryForm as CategoryFormProps } from "../../types";

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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1YzIwMjM3LTkyN2QtNGNjZi1iZDUyLWQ1NGE2Y2Y5ZWE3MCIsImlhdCI6MTY5NTM3NDMyMywiZXhwIjoxNjk1Mzk1OTIzfQ.wxmY-3yYHMf2pxhelTKkbqxviVspTbcL6qDvMVFJdDA",
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
      <CategoryForm onSubmit={onSubmit} />
    </>
  );
};

export default CategoryNew;
