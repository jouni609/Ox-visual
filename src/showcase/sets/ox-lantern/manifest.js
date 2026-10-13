import { lazy } from 'react'

export default {
  id: 'ox-lantern',
  name: 'OX LANTERN',
  tagline: 'five lights cast on one ox',
  accent: '#D9A441',
  credit: 'Designed by CatJam',
  designs: [
    {
      id: 'osteon',
      num: '01',
      name: 'Osteon',
      tag: 'Anatomy Plate',
      chip: '#8A3B3B',
      Component: lazy(() => import('./Osteon.jsx')),
    },
    {
      id: 'zebu',
      num: '02',
      name: 'Zebu',
      tag: 'Show-Ring Breed',
      chip: '#5B2C6F',
      Component: lazy(() => import('./Zebu.jsx')),
    },
    {
      id: 'yokepair',
      num: '03',
      name: 'Yokepair',
      tag: 'Plough Team',
      chip: '#B84A1B',
      Component: lazy(() => import('./Yokepair.jsx')),
    },
    {
      id: 'apis',
      num: '04',
      name: 'Apis',
      tag: 'Sacred Bull',
      chip: '#1F3B73',
      Component: lazy(() => import('./Apis.jsx')),
    },
    {
      id: 'barak',
      num: '05',
      name: 'Barak',
      tag: 'Monsoon Buffalo',
      chip: '#1F5E5A',
      Component: lazy(() => import('./Barak.jsx')),
    },
  ],
}