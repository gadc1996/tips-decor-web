interface SocialLink {
  logo: string,
  logo_white: string,
  url: string,
}

export const useSocialLinks = () => useState<SocialLink[]>('socialLinks', () => [
  {
    logo: '/svg/instagram.svg',
    logo_white: '/svg/instagram-white.svg',
    url: 'https://www.instagram.com/tipsdecor_chih/'
  },
  {
    logo: '/svg/fb.svg',
    logo_white: '/svg/fb-white.svg',
    url: 'https://www.facebook.com/tipsdecor'
  }
])
