import { nanoid } from 'nanoid';

export const CLOUDINARY_UPLOAD_PRESET = 'itbarz4k';
export const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dszu80imh/image/upload';
export const columns = [
  {
    title: 'Дата:',
    dataIndex: 'date',
    key: nanoid(),
  },
  {
    title: 'Время:',
    dataIndex: 'time',
    key: nanoid(),
  },
  // {
  //   title: 'Уровень:',
  //   dataIndex: 'level',
  //   key: nanoid(),
  // },
  {
    title: 'Изучено слов:',
    dataIndex: 'total',
    key: nanoid(),
  },
  {
    title: 'процент правильных ответов:',
    dataIndex: 'correctPrecent',
    key: nanoid(),
  },
  {
    title: 'Лучшая серия:',
    dataIndex: 'bestLine',
    key: nanoid(),
  },
];
