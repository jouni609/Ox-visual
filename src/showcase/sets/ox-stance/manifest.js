import { lazy } from 'react'

export default {
  id: 'ox-stance',
  name: 'OX STANCE',
  tagline: 'Five stances of one animal',
  accent: '#1F5A3C',
  credit: 'Designed by Claude Fable 5.2',
  designs: [
    {
      id: 'cud',
      num: '01',
      name: 'Cud',
      tag: 'Wall Chart · Rumination',
      chip: '#1F5A3C',
      Component: lazy(() => import('./Cud.jsx')),
    },
    {
      id: 'fold',
      num: '02',
      name: 'Fold',
      tag: 'Highland Moor',
      chip: '#C0622A',
      Component: lazy(() => import('./Fold.jsx')),
    },
    {
      id: 'paddy',
      num: '03',
      name: 'Paddy',
      tag: 'Dawn Rice Field',
      chip: '#1F8A7A',
      Component: lazy(() => import('./Paddy.jsx')),
    },
    {
      id: 'taurus',
      num: '04',
      name: 'Taurus',
      tag: 'Star Atlas',
      chip: '#12305A',
      Component: lazy(() => import('./Taurus.jsx')),
    },
    {
      id: 'eight',
      num: '05',
      name: 'Eight Seconds',
      tag: 'Rodeo Broadside',
      chip: '#F4C430',
      Component: lazy(() => import('./Eight.jsx')),
    },
  ],
}
