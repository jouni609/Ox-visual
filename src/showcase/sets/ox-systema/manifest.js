import { lazy } from 'react'

export default {
  id: 'ox-systema',
  name: 'OX SYSTEMA',
  tagline: 'One family, five branches of the bovine tree',
  accent: '#3E2A18',
  credit: 'Designed by GLM 5.3',
  designs: [
    {
      id: 'primigenius',
      num: '01',
      name: 'Primigenius',
      tag: 'Cave Wall',
      chip: '#A0522D',
      Component: lazy(() => import('./Primigenius.jsx')),
    },
    {
      id: 'taurus',
      num: '02',
      name: 'Taurus',
      tag: 'Engraver’s Plate',
      chip: '#4A6B4E',
      Component: lazy(() => import('./TaurusPlate.jsx')),
    },
    {
      id: 'indicus',
      num: '03',
      name: 'Indicus',
      tag: 'Market Poster',
      chip: '#D64000',
      Component: lazy(() => import('./Indicus.jsx')),
    },
    {
      id: 'bubalus',
      num: '04',
      name: 'Bubalus',
      tag: 'Monsoon River',
      chip: '#0E5E63',
      Component: lazy(() => import('./Bubalus.jsx')),
    },
    {
      id: 'bison',
      num: '05',
      name: 'Bison',
      tag: 'Prairie Broadside',
      chip: '#7A4A21',
      Component: lazy(() => import('./Bison.jsx')),
    },
  ],
}
