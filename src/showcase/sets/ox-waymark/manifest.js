import { lazy } from 'react'

export default {
  id: 'ox-waymark',
  name: 'OX WAYMARK',
  tagline: 'Five places people left a picture of the ox',
  accent: '#B5462A',
  credit: 'Designed by Claude Opus 5.5',
  designs: [
    {
      id: 'lascaux',
      num: '01',
      name: 'Lascaux',
      tag: 'Cave Torchlight',
      chip: '#A9461F',
      Component: lazy(() => import('./Lascaux.jsx')),
    },
    {
      id: 'knossos',
      num: '02',
      name: 'Knossos',
      tag: 'Fresco Fragment',
      chip: '#2F5F8F',
      Component: lazy(() => import('./Knossos.jsx')),
    },
    {
      id: 'sarchi',
      num: '03',
      name: 'Sarchí',
      tag: 'Painted Oxcart',
      chip: '#E2452B',
      Component: lazy(() => import('./Sarchi.jsx')),
    },
    {
      id: 'changtang',
      num: '04',
      name: 'Changtang',
      tag: 'Prayer-Flag Altitude',
      chip: '#2459A6',
      Component: lazy(() => import('./Changtang.jsx')),
    },
    {
      id: 'headcount',
      num: '05',
      name: 'Head Count',
      tag: 'Isotype Census',
      chip: '#D63B2F',
      Component: lazy(() => import('./HeadCount.jsx')),
    },
  ],
}
