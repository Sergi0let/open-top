import { MenuItem } from '../../../interfaces/menu.interfaces';

export const data: MenuItem[] = [
  {
    _id: {
      secondCategory: 'Аналитика',
    },
    pages: [
      {
        alias: 'financial-analytics',
        title: 'Курси по финансовой аналитике',
        _id: '1',
        category: 'Финансовая аналитика',
      },
      {
        alias: 'big-data',
        title: 'Курси по Big Data',
        _id: '2',
        category: 'Big Data',
      },

      {
        alias: 'machine-learning',
        title: 'Курси по машинному обучению',
        _id: '3',
        category: 'Машинное обучение',
      },
    ],
  },
  {
    _id: {
      secondCategory: 'Бизнес',
    },
    pages: [
      {
        alias: 'financial-analytics',
        title: 'Курси по финансовой аналитике',
        _id: '4',
        category: 'Финансовая аналитика',
      },
      {
        alias: 'big-data',
        title: 'Курси по Big Data',
        _id: '5',
        category: 'Big Data',
      },

      {
        alias: 'machine-learning',
        title: 'Курси по машинному обучению',
        _id: '6',
        category: 'Машинное обучение',
      },
    ],
  },
  {
    _id: {
      secondCategory: 'Дизайн',
    },
    pages: [
      {
        alias: 'graphic-design',
        title: 'Курси графического дизайна',
        _id: '7',
        category: 'Графичеський дизайн',
      },
      {
        alias: 'design-interior',
        title: 'Курси дизайна интерьера',
        _id: '8',
        category: 'Дизайн интерьера',
      },
      {
        alias: 'web-design',
        title: 'Курси веб-дизайна',
        _id: '9',
        category: 'Веб дизайн',
      },
    ],
  },
];
