export interface Category {
  id: number;
  name: string;
  is_active: boolean;
}

export interface GetCategoryResponse {
  data: Category[];
  current_page: number;
  total_item: number;
  total_page: number;
}
