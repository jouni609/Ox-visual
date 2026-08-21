import { lazy } from 'react'

export default {
  id: 'ox-biomes',
  name: 'OX BIOMES',
  tagline: 'Where the ox lives — five climates, five breeds',
  accent: '#2B8C8E',
  credit: 'Designed by Minimax M3',
  designs: [
    {
      id: 'mist',
      num: '01',
      name: 'Mist',
      tag: 'Tibetan Highland',
      chip: '#1F6E5C',
      Component: lazy(() => import('./Mist.jsx')),
    },
    {
      id: 'monsoon',
      num: '02',
      name: 'Monsoon',
      tag: 'Luzon Rice Paddy',
      chip: '#C2412A',
      Component: lazy(() => import('./Monsoon.jsx')),
    },
    {
      id: 'prairie',
      num: '03',
      name: 'Prairie',
      tag: 'Bison Range',
      chip: '#C99849',
      Component: lazy(() => import('./Prairie.jsx')),
    },
    {
      id: 'tundra',
      num: '04',
      name: 'Tundra',
      tag: 'Arctic Muskox',
      chip: '#5E3B8A',
      Component: lazy(() => import('./Tundra.jsx')),
    },
    {
      id: 'savanna',
      num: '05',
      name: 'Savanna',
      tag: 'Horn of Africa',
      chip: '#D9933A',
      Component: lazy(() => import('./Savanna.jsx')),
    },
  ],
}
