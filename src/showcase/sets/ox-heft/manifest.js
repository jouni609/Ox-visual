import { lazy } from 'react'

export default {
  id: 'ox-heft',
  name: 'OX HEFT',
  tagline: 'Five things one animal holds up',
  accent: '#1F3F7A',
  credit: 'Designed by GLM 5.4',
  designs: [
    {
      id: 'kuyutha',
      num: '01',
      name: 'Kuyūthā',
      tag: 'The Bull Beneath',
      chip: '#2F8C6E',
      Component: lazy(() => import('./Kuyutha.jsx')),
    },
    {
      id: 'reines',
      num: '02',
      name: 'Reines',
      tag: 'Queens of the Herd',
      chip: '#D9702B',
      Component: lazy(() => import('./Reines.jsx')),
    },
    {
      id: 'durham',
      num: '03',
      name: 'The Durham Ox',
      tag: 'The Celebrity Steer',
      chip: '#7A1F2B',
      Component: lazy(() => import('./Durham.jsx')),
    },
    {
      id: 'zubr',
      num: '04',
      name: 'Żubr',
      tag: 'Back from Twelve',
      chip: '#A4432A',
      Component: lazy(() => import('./Zubr.jsx')),
    },
    {
      id: 'phra-kho',
      num: '05',
      name: 'Phra Kho',
      tag: 'The Oxen That Read the Year',
      chip: '#E3A52B',
      Component: lazy(() => import('./PhraKho.jsx')),
    },
  ],
}
