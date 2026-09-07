import ApiClient from "../../util/ApiClient"

export interface ProductItem{
    id: number;
    name: string;
    category:  string;
    price: number,
    stock: number,
    status: string,
    createdAt: string,
}

export const getProducts = async (): Promise<ProductItem[]> => {
    const response = await ApiClient.get<ProductItem[]>('/api/products');
    return response.data.data;
}

export const getProduct = async (id: number): Promise<ProductItem> => {
    const response = await ApiClient.get<ProductItem>(`/api/product/${id}`);
    return response.data.data;
}

export interface UpdateProductRequest {
  name: string
  category: string
  price: number
  stock: number
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
    category: string
    price: number
    stock: number
}

export const createProduct = async (
    data: CreateProductRequest
) => {
    const response = await ApiClient.post(`/api/product`, data)
    return response.data
}