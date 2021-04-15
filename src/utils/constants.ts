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

export const ligaData = [
  {
    liga: 'I',
    coords: '-10px -14px'
  },
  {
    liga: 'I',
    coords: '-10px -14px'
  },
  {
    liga: 'II',
    coords: '-142px -14px'
  },
  {
    liga: 'II',
    coords: '-142px -14px'
  },
  {
    liga: 'III',
    coords: '-274px -14px'
  },
  {
    liga: 'III',
    coords: '-274px -14px'
  },
  {
    liga: 'IV',
    coords: '-10px -124px'
  },
  {
    liga: 'IV',
    coords: '-10px -124px'
  },
  {
    liga: 'V',
    coords: '-142px -124px'
  },
  {
    liga: 'VI',
    coords: '-274px -124px'
  }
];
