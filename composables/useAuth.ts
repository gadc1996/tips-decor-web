import axios from "axios";

export const useAuth = async (): Promise<string> => {
  if (process.client) {

    if (localStorage.getItem('TIPS_DECOR_TOKEN') === null) {
      const config = useRuntimeConfig()
      const url = config.app.baseUrl + 'auth/login'
      const credentials = {
        email: config.app.authEmail,
        password: config.app.authPassword,
      }

      await axios.post(url, credentials
      ).then(function (response) {
        localStorage.setItem('TIPS_DECOR_TOKEN', response.data)
      })
    } 
    return localStorage.getItem('TIPS_DECOR_TOKEN')

  }
}
