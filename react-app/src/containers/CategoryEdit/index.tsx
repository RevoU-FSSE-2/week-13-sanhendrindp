import { useParams } from "react-router-dom";

const CategoryEdit = () => {
  const params = useParams();

  return (
    <>
      <div>Ini pages buat edit category: {params?.id}</div>
    </>
  );
};

export default CategoryEdit;
