import ApiClient from "../../util/ApiClient"

export interface ProductItem{
    id: number;
    name: string;
    categoryId:  number;
    parentCategoryId: number;
    price: number,
    stock: number,
    status: string,
    createdAt: string,
}

export interface ProductListView{
    totalCount: number;
    totalPage: number;
    products: ProductItem[];
}

export const getProducts = async (page:number): Promise<ProductListView> => {
    const response = await ApiClient.get<ProductListView>(`/api/products?page=${page}`);
    return response.data.data;
}

export const getProduct = async (id: number): Promise<ProductItem> => {
    const response = await ApiClient.get<ProductItem>(`/api/product/${id}`);
    return response.data.data;
}

export interface UpdateProductRequest {
  name: string
  categoryId: number | null
  price: number
  stock: number
  status: string
}

export const updateProduct = async (
  id: number,
  data: UpdateProductRequest
) => {
  const response = await ApiClient.patch(`/api/product/${id}`, data)
  return response.data
}


export interface CreateProductRequest {
    name: string
    categoryId: number|null
    price: number
    stock: number
    status: string
}

export const createProduct = async (
    data: CreateProductRequest
) => {
    const response = await ApiClient.post(`/api/product`, data)
    return response.data
}


export interface CategoryItem {
    id: number,
    name: string,
    type: string
} 

export const getCategories = async ( parentId : number | null): Promise<CategoryItem[]> => {
    const response = await ApiClient.get<CategoryItem>(`/api/categories?parentId=${parentId == null ? '': parentId}`)
    return response.data.data;
}