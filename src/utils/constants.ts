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
  {
    title: 'Уровень:',
    dataIndex: 'level',
    key: nanoid(),
  },
  {
    title: 'Раунд:',
    dataIndex: 'round',
    key: nanoid(),
  },
  {
    title: 'Результат:',
    dataIndex: 'result',
    key: nanoid(),
  },
];
