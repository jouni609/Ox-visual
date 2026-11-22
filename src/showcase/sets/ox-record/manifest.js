import { lazy } from 'react'

export default {
  id: 'ox-record',
  name: 'The Bovine Record',
  tagline: 'Five ways to read a bovine',
  accent: '#344cda',
  credit: 'GPT 6.2 SOL',
  designs: [
    {
      id: 'working-body',
      num: '01',
      name: 'The Working Body',
      tag: 'Anatomy plate',
      chip: '#344cda',
      Component: lazy(() => import('./WorkingBody.jsx')),
    },
    {
      id: 'furrow-print',
      num: '02',
      name: 'In the Furrow',
      tag: 'Paddy print',
      chip: '#a03d2e',
      Component: lazy(() => import('./FurrowPrint.jsx')),
    },
    {
      id: 'tree-line',
      num: '03',
      name: 'Above the Tree Line',
      tag: 'Yak country',
      chip: '#53746f',
      Component: lazy(() => import('./TreeLine.jsx')),
    },
    {
      id: 'wallow',
      num: '04',
      name: 'Make a Wallow',
      tag: 'Prairie field guide',
      chip: '#9fbe44',
      Component: lazy(() => import('./Wallow.jsx')),
    },
    {
      id: 'taurus-sky',
      num: '05',
      name: 'The Bull in the Sky',
      tag: 'Planetarium',
      chip: '#cf9c52',
      Component: lazy(() => import('./TaurusSky.jsx')),
    },
  ],
}
