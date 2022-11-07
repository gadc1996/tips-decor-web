interface Note {
  id: number,
  title: string,
  image: string,
  content: string
}
export const useNotes = (): Note[] => {
  return [
    {
      id: 1,
      title: "Lorem ipsum te",
      image: '/img/notes1.jpg',
      content: "Lorem ipsum te",
    },
    {
      id: 2,
      title: "Lorem ipsum te",
      image: '/img/notes2.jpg',
      content: "Lorem ipsum te",
    },
    {
      id: 3,
      title: "Lorem ipsum te",
      image: '/img/notes3.jpg',
      content: "Lorem ipsum te",
    },
    {
      id: 4,
      title: "Lorem ipsum te",
      image: '/img/notes4.jpg',
      content: "Lorem ipsum te",
    },
    {
      id: 5,
      title: "Lorem ipsum te",
      image: '/img/notes5.jpg',
      content: "Lorem ipsum te",
    },
    {
      id: 6,
      title: "Lorem ipsum te",
      image: '/img/notes6.jpg',
      content: "Lorem ipsum te",
    },
  ]
}
