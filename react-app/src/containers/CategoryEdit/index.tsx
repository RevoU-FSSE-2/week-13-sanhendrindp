import { CategoryForm } from "../../components";
import { Card } from "antd";
// import { useParams } from "react-router-dom";

const CategoryEdit = () => {
  // const params = useParams();

  return (
    <>
      <Card title={"Edit Category"} bordered style={{ width: "350px" }}>
        <CategoryForm />
      </Card>
    </>
  );
};

export default CategoryEdit;
