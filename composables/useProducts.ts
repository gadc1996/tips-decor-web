import type { AxiosResponse } from 'axios';

interface Product {
  id: number,
  name: string,
  image: string
}

export const useProducts = async(categoryId) => {
  const response: AxiosResponse = await useAxiosGet(`categories/${categoryId}`)
  return response?.data?.products
}