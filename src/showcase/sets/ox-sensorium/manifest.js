import { lazy } from 'react'

export default {
  id: 'ox-sensorium',
  name: 'OX SENSORIUM',
  tagline: 'Five senses of the bovine',
  accent: '#5B2A86',
  credit: 'Grok 4.6',
  designs: [
    {
      id: 'meridian',
      num: '01',
      name: 'Meridian',
      tag: 'Dichromatic Sight',
      chip: '#1FB5C7',
      Component: lazy(() => import('./Meridian.jsx')),
    },
    {
      id: 'flehmen',
      num: '02',
      name: 'Flehmen',
      tag: 'Vomeronasal Air',
      chip: '#9B2D8A',
      Component: lazy(() => import('./Flehmen.jsx')),
    },
    {
      id: 'pinna',
      num: '03',
      name: 'Pinna',
      tag: 'Twin Radars',
      chip: '#D4A017',
      Component: lazy(() => import('./Pinna.jsx')),
    },
    {
      id: 'pelage',
      num: '04',
      name: 'Pelage',
      tag: 'Weathered Hide',
      chip: '#C45C26',
      Component: lazy(() => import('./Pelage.jsx')),
    },
    {
      id: 'halite',
      num: '05',
      name: 'Halite',
      tag: 'Mineral Tongue',
      chip: '#E08BA0',
      Component: lazy(() => import('./Halite.jsx')),
    },
  ],
}
