import { lazy } from 'react'

export default {
  id: 'ox-materia',
  name: 'OX MATERIA',
  tagline: 'Five substances of the bovine body',
  accent: '#6B3F1D',
  credit: 'Grok 4.5',
  designs: [
    {
      id: 'corium',
      num: '01',
      name: 'Corium',
      tag: 'Hide',
      chip: '#1F6B6B',
      Component: lazy(() => import('./Corium.jsx')),
    },
    {
      id: 'cornu',
      num: '02',
      name: 'Cornu',
      tag: 'Horn',
      chip: '#C4893A',
      Component: lazy(() => import('./Cornu.jsx')),
    },
    {
      id: 'ossein',
      num: '03',
      name: 'Ossein',
      tag: 'Bone',
      chip: '#7A8FA6',
      Component: lazy(() => import('./Ossein.jsx')),
    },
    {
      id: 'lactis',
      num: '04',
      name: 'Lactis',
      tag: 'Milk',
      chip: '#E62828',
      Component: lazy(() => import('./Lactis.jsx')),
    },
    {
      id: 'stercus',
      num: '05',
      name: 'Stercus',
      tag: 'Dung',
      chip: '#3D5C4A',
      Component: lazy(() => import('./Stercus.jsx')),
    },
  ],
}
