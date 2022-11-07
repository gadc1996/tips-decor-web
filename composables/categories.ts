interface Category {
  id: number,
  name: string,
  image: string,
}

export const useCategories = (): Category[] => {
  return [
    {
      id: 1,
      name: 'Sillas',
      image: 'img/chair.webp',
    },
    {
      id: 2,
      name: 'Camas',
      image: 'img/bed.webp',
    },
    {
      id: 3,
      name: 'Buros',
      image: 'img/bureau.webp',
    },
    {
      id: 4,
      name: 'Escritorios',
      image: 'img/desk.webp',
    },
  ]
}

