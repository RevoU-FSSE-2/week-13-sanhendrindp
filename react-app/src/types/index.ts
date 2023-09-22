export interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

export interface GetCategoryResponse {
  data: Category[];
  current_page: number;
  total_item: number;
  total_page: number;
}

export type CategoryForm = Omit<Category, "id">;
