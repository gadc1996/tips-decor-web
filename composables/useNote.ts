import type { AxiosResponse } from 'axios';

export const useNote = async (noteId: number) => {
  const response: AxiosResponse = await useAxiosGet(`notes/${noteId}`)
  return response?.data
}
