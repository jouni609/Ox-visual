import { lazy } from 'react'

export default {
  id: 'ox-ledger',
  name: 'OX LEDGER',
  tagline: 'five records of one animal',
  accent: '#1A3D2F',
  credit: 'Designed by Composer',
  designs: [
    {
      id: 'brand',
      num: '01',
      name: 'Brand',
      tag: 'Herd Mark',
      chip: '#C41E3A',
      Component: lazy(() => import('./Brand.jsx')),
    },
    {
      id: 'draught',
      num: '02',
      name: 'Draught',
      tag: 'Pull Record',
      chip: '#C4A35A',
      Component: lazy(() => import('./Draught.jsx')),
    },
    {
      id: 'zebu',
      num: '03',
      name: 'Zebu',
      tag: 'Breed Plate',
      chip: '#E8B339',
      Component: lazy(() => import('./Zebu.jsx')),
    },
    {
      id: 'nandi',
      num: '04',
      name: 'Nandi',
      tag: 'Sacred Mount',
      chip: '#D4AF37',
      Component: lazy(() => import('./Nandi.jsx')),
    },
    {
      id: 'bison',
      num: '05',
      name: 'Bison',
      tag: 'Range Survey',
      chip: '#8B3A3A',
      Component: lazy(() => import('./Bison.jsx')),
    },
  ],
}
