import { lazy } from 'react'

export default {
  id: 'ox-aurora',
  name: 'OX AURORA',
  tagline: 'Five atmospheres of the ox',
  accent: '#D46A00',
  credit: 'Designed by Inkling',
  designs: [
    {
      id: 'dusk',
      num: '01',
      name: 'Dusk',
      tag: 'Working Ox',
      chip: '#D46A00',
      Component: lazy(() => import('./Dusk.jsx')),
    },
    {
      id: 'glacier',
      num: '02',
      name: 'Glacier',
      tag: 'Frozen Yak',
      chip: '#A0D2E8',
      Component: lazy(() => import('./Glacier.jsx')),
    },
    {
      id: 'temple',
      num: '03',
      name: 'Temple',
      tag: 'Sacred Nandi',
      chip: '#C9A227',
      Component: lazy(() => import('./Temple.jsx')),
    },
    {
      id: 'meadow',
      num: '04',
      name: 'Meadow',
      tag: 'Grazing Zebu',
      chip: '#6B7B5A',
      Component: lazy(() => import('./Meadow.jsx')),
    },
    {
      id: 'storm',
      num: '05',
      name: 'Storm',
      tag: 'Thunder Bison',
      chip: '#F5E85A',
      Component: lazy(() => import('./Storm.jsx')),
    },
  ],
}
