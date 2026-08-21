import { lazy } from 'react'

export default {
  id: 'ox-lithica',
  name: 'OX LITHICA',
  tagline: 'Five stones, five carvings',
  accent: '#5A5A5A',
  credit: 'Designed by Kimi 2.6',
  designs: [
    {
      id: 'menhir',
      num: '01',
      name: 'Menhir',
      tag: 'Megalithic Petroglyph',
      chip: '#7B5E8B',
      Component: lazy(() => import('./Menhir.jsx')),
    },
    {
      id: 'stele',
      num: '02',
      name: 'Stele',
      tag: 'Assyrian Boundary',
      chip: '#1E3A5F',
      Component: lazy(() => import('./Stele.jsx')),
    },
    {
      id: 'sunken',
      num: '03',
      name: 'Sunken',
      tag: 'Egyptian Relief',
      chip: '#B85450',
      Component: lazy(() => import('./Sunken.jsx')),
    },
    {
      id: 'cameo',
      num: '04',
      name: 'Cameo',
      tag: 'Roman Sardonyx',
      chip: '#C44D34',
      Component: lazy(() => import('./Cameo.jsx')),
    },
    {
      id: 'grotesque',
      num: '05',
      name: 'Grotesque',
      tag: 'Gothic Gargoyle',
      chip: '#5A6B4E',
      Component: lazy(() => import('./Grotesque.jsx')),
    },
  ],
}
