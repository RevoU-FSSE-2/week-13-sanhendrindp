import { ColumnsType } from "antd/es/table";
import { CategoryList as CategoryListComponent } from "../../components";
import { Category, GetCategoryResponse } from "../../types";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  // Token authorization manual inject
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1YzIwMjM3LTkyN2QtNGNjZi1iZDUyLWQ1NGE2Y2Y5ZWE3MCIsImlhdCI6MTY5NTM0NzgzOCwiZXhwIjoxNjk1MzY5NDM4fQ.gevF4I3ADJD9I3kb9dm0XIpXFdAJEZBopdwo0xyekwE",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      // render: (value: boolean) => String(value),
      render: (is_active: boolean) => (is_active ? "Active" : "Deactive"),
    },
    {
      title: "Action",
      key: "edit",
      render: (_, record) => (
        <Button
          type={"primary"}
          onClick={() => navigate(`/category/${record.id}`)}
        >
          Edit
        </Button>
      ),
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
