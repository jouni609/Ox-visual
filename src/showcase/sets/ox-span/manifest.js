import { lazy } from 'react'

export default {
  id: 'ox-span',
  name: 'OX SPAN',
  tagline: 'Five reaches of one animal',
  accent: '#7A2430',
  credit: 'Designed by Grok 4.7',
  designs: [
    {
      id: 'chiana',
      num: '01',
      name: 'Chiana',
      tag: 'Height Card',
      chip: '#7A2430',
      Component: lazy(() => import('./Chiana.jsx')),
    },
    {
      id: 'paunch',
      num: '02',
      name: 'Paunch',
      tag: 'Fermentation Plate',
      chip: '#E0A045',
      Component: lazy(() => import('./Paunch.jsx')),
    },
    {
      id: 'frantoio',
      num: '03',
      name: 'Frantoio',
      tag: 'Beam Press',
      chip: '#3D4A26',
      Component: lazy(() => import('./Frantoio.jsx')),
    },
    {
      id: 'hathor',
      num: '04',
      name: 'Hathor',
      tag: 'Celestial Cow',
      chip: '#E4B44A',
      Component: lazy(() => import('./Hathor.jsx')),
    },
    {
      id: 'changthang',
      num: '05',
      name: 'Changthang',
      tag: 'Plateau Yak',
      chip: '#C4372A',
      Component: lazy(() => import('./Changthang.jsx')),
    },
  ],
}
