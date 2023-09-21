import { ColumnsType } from "antd/es/table";
import { CategoryList as CategoryListComponent } from "../../components";
import { Category } from "../../types";
// import { useState } from "react";

const CategoryList = () => {
  //   const [categories, setCategories] = useState<Category[]>([]);

  const columns: ColumnsType<Category> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "is_active",
      key: "is_active",
    },
  ];

  return (
    <>
      <CategoryListComponent columns={columns} data={[]} />
    </>
  );
};

export default CategoryList;
