import { ColumnsType } from "antd/es/table";
import { CategoryList as CategoryListComponent } from "../../components";
import { Category, GetCategoryResponse } from "../../types";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1YzIwMjM3LTkyN2QtNGNjZi1iZDUyLWQ1NGE2Y2Y5ZWE3MCIsImlhdCI6MTY5NTI4NDkyMywiZXhwIjoxNjk1MzA2NTIzfQ.MWLAK68UnuRZNahd4vVVkzzXBKagb-1NapaOTrTk34U",
    },
  };

  const getCategoryList = async () => {
    const fetching = await fetch(
      "https://mock-api.arikmpt.com/api/category",
      requestOptions
    );
    const response: GetCategoryResponse = await fetching.json();
    setCategories(response.data ?? []);
  };

  useEffect(() => {
    getCategoryList();
  });

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
      <h1>List of Category</h1>
      <CategoryListComponent columns={columns} data={categories} />
    </>
  );
};

export default CategoryList;
