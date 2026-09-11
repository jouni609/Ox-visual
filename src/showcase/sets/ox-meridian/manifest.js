import { lazy } from 'react'

export default {
  id: 'ox-meridian',
  name: 'OX MERIDIAN',
  tagline: 'Five worlds of one bovine family',
  accent: '#C1702F',
  credit: 'GLM FLASH',
  designs: [
    {
      id: 'primigenia',
      num: '01',
      name: 'Primigenia',
      tag: 'Cave Ochre',
      chip: '#C1702F',
      Component: lazy(() => import('./Primigenia.jsx')),
    },
    {
      id: 'sokha',
      num: '02',
      name: 'Sokha',
      tag: 'Agitprop Draught',
      chip: '#C33424',
      Component: lazy(() => import('./Sokha.jsx')),
    },
    {
      id: 'nandi',
      num: '03',
      name: 'Nandi',
      tag: 'Temple Shrine',
      chip: '#C9972B',
      Component: lazy(() => import('./Nandi.jsx')),
    },
    {
      id: 'trau',
      num: '04',
      name: 'Trau',
      tag: 'Monsoon Batik',
      chip: '#1E3242',
      Component: lazy(() => import('./Trau.jsx')),
    },
    {
      id: 'tatanka',
      num: '05',
      name: 'Tatanka',
      tag: 'Ledger Plains',
      chip: '#B5442A',
      Component: lazy(() => import('./Tatanka.jsx')),
    },
  ],
}
