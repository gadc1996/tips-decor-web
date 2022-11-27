import type { AxiosResponse } from 'axios';

interface Note {
  id: number,
  title: string,
  image: string,
  content: string
}

export const useNotes = async () => {
  const response: AxiosResponse = await useAxiosGet('notes')
  return response?.data?.data
}
