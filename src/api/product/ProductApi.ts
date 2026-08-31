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