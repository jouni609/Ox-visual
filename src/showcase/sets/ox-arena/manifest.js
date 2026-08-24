import { lazy } from 'react'

export default {
  id: 'ox-arena',
  name: 'OX ARENA',
  tagline: 'Five games of the ox',
  accent: '#A93226',
  credit: 'Designed by DeepSeek V4 Pro',
  designs: [
    {
      id: 'leap',
      num: '01',
      name: 'Leap',
      tag: 'Minoan Fresco',
      chip: '#1F4E79',
      Component: lazy(() => import('./Leap.jsx')),
    },
    {
      id: 'rodeo',
      num: '02',
      name: 'Eight Seconds',
      tag: 'Letterpress Rodeo',
      chip: '#A93226',
      Component: lazy(() => import('./Rodeo.jsx')),
    },
    {
      id: 'encierro',
      num: '03',
      name: 'Encierro',
      tag: 'Front-Page Broadsheet',
      chip: '#201D1A',
      Component: lazy(() => import('./Encierro.jsx')),
    },
    {
      id: 'jallikattu',
      num: '04',
      name: 'Jallikattu',
      tag: 'Festival Banner',
      chip: '#E8951D',
      Component: lazy(() => import('./Jallikattu.jsx')),
    },
    {
      id: 'kambala',
      num: '05',
      name: 'Kambala',
      tag: 'Race-Day Board',
      chip: '#174A3B',
      Component: lazy(() => import('./Kambala.jsx')),
    },
  ],
}
