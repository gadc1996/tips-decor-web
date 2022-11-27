import type { AxiosResponse } from 'axios';

interface Testimonial{
  // id: number,
  // name: string,
  // image: string,
}

export const useTestimonials = async() => {
  const response: AxiosResponse = await useAxiosGet('testimonials')
  return response?.data?.data
}

