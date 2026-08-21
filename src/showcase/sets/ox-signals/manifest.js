import { lazy } from 'react'

export default {
  id: 'ox-signals',
  name: 'OX SIGNALS',
  tagline: 'Five systems that keep an ox alive',
  accent: '#3155D6',
  credit: 'Designed by GTP 5.6 Luna',
  designs: [
    {
      id: 'stride',
      num: '01',
      name: 'Stride',
      tag: 'The Body in Motion',
      chip: '#F4AE28',
      Component: lazy(() => import('./Stride.jsx')),
    },
    {
      id: 'hush',
      num: '02',
      name: 'Hush',
      tag: 'The Herd in Low Voice',
      chip: '#8672C9',
      Component: lazy(() => import('./Hush.jsx')),
    },
    {
      id: 'ferment',
      num: '03',
      name: 'Ferment',
      tag: 'The Four-Chamber Engine',
      chip: '#B7E64B',
      Component: lazy(() => import('./Ferment.jsx')),
    },
    {
      id: 'rings',
      num: '04',
      name: 'Rings',
      tag: 'A Horn Keeps Time',
      chip: '#EC6A51',
      Component: lazy(() => import('./Rings.jsx')),
    },
    {
      id: 'return',
      num: '05',
      name: 'Return',
      tag: 'A Wild Shape Remembered',
      chip: '#56B99B',
      Component: lazy(() => import('./Return.jsx')),
    },
  ],
}
