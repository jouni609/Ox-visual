import { lazy } from 'react'

export default {
  id: 'ox-works',
  name: 'OX WORKS',
  tagline: 'Five labours that built the world',
  accent: '#C45A1A',
  credit: 'Designed by muse-spark',
  designs: [
    {
      id: 'furrow',
      num: '01',
      name: 'Furrow',
      tag: 'The Field',
      chip: '#5A9E0F',
      Component: lazy(() => import('./Furrow.jsx')),
    },
    {
      id: 'haul',
      num: '02',
      name: 'Haul',
      tag: 'The Road',
      chip: '#FFD600',
      Component: lazy(() => import('./Haul.jsx')),
    },
    {
      id: 'forge',
      num: '03',
      name: 'Forge',
      tag: 'The Furnace',
      chip: '#FF6B00',
      Component: lazy(() => import('./Forge.jsx')),
    },
    {
      id: 'altar',
      num: '04',
      name: 'Altar',
      tag: 'The Sacred',
      chip: '#C79A11',
      Component: lazy(() => import('./Altar.jsx')),
    },
    {
      id: 'exchange',
      num: '05',
      name: 'Exchange',
      tag: 'The Ledger',
      chip: '#6B0F0F',
      Component: lazy(() => import('./Exchange.jsx')),
    },
  ],
}
