import axios from "axios";

export const useAxiosGet = async (request: string) => {
  const config = useRuntimeConfig()
  const token = await useAuth()
  const url = config.app.baseUrl + request

  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).catch(e => {
  })
}