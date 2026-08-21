import { lazy } from 'react'

export default {
  id: 'ox-folio',
  name: 'OX FOLIO',
  tagline: 'Five documents, one animal',
  accent: '#0E3B43',
  credit: 'Designed by GLM 5.2',
  designs: [
    {
      id: 'myology',
      num: '01',
      name: 'Myology',
      tag: 'Anatomy',
      chip: '#C0392B',
      Component: lazy(() => import('./Myology.jsx')),
    },
    {
      id: 'pitch',
      num: '02',
      name: 'Pitch',
      tag: 'Voice',
      chip: '#E8A33D',
      Component: lazy(() => import('./Pitch.jsx')),
    },
    {
      id: 'labyrinth',
      num: '03',
      name: 'Labyrinth',
      tag: 'Myth',
      chip: '#1F3D7A',
      Component: lazy(() => import('./Labyrinth.jsx')),
    },
    {
      id: 'brandbook',
      num: '04',
      name: 'Brand Book',
      tag: 'Identity',
      chip: '#9C5A2C',
      Component: lazy(() => import('./BrandBook.jsx')),
    },
    {
      id: 'volvelle',
      num: '05',
      name: 'Volvelle',
      tag: 'Sky',
      chip: '#2E6BA8',
      Component: lazy(() => import('./Volvelle.jsx')),
    },
  ],
}
