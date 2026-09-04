import { lazy } from 'react'

export default {
  id: 'ox-yoke',
  name: 'OX YOKE',
  tagline: 'The ox at work',
  accent: '#A32E1F',
  credit: 'Omen Alpha',
  designs: [
    {
      id: 'furrow',
      num: '01',
      name: 'Furrow',
      tag: 'Illuminated Manuscript',
      chip: '#A32E1F',
      Component: lazy(() => import('./Furrow.jsx')),
    },
    {
      id: 'thresh',
      num: '02',
      name: 'Thresh',
      tag: 'Linocut Poster',
      chip: '#D9A441',
      Component: lazy(() => import('./Thresh.jsx')),
    },
    {
      id: 'sakia',
      num: '03',
      name: 'Sakia',
      tag: 'Egyptian Night Plate',
      chip: '#2E4A8F',
      Component: lazy(() => import('./Sakia.jsx')),
    },
    {
      id: 'caravan',
      num: '04',
      name: 'Caravan',
      tag: 'Mist & Pass Study',
      chip: '#46586A',
      Component: lazy(() => import('./Caravan.jsx')),
    },
    {
      id: 'sarsen',
      num: '05',
      name: 'Sarsen',
      tag: 'Monumental Haul',
      chip: '#6B7A55',
      Component: lazy(() => import('./Sarsen.jsx')),
    },
  ],
}
