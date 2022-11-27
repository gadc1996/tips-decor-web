import type { AxiosResponse } from 'axios';

interface Category {
  id: number,
  name: string,
  image: string,
}

export const useCategories = async() => {
  const response: void|AxiosResponse = await useAxiosGet('categories')
  return response?.data?.data
}

