import { lazy } from 'react'

export default {
  id: 'ox-vantage',
  name: 'OX VANTAGE',
  tagline: 'Five vantage points on one animal',
  accent: '#A8381E',
  credit: 'Designed by Gemini 4 Neon',
  designs: [
    {
      id: 'ankole',
      num: '01',
      name: 'Ankole',
      tag: 'Savanna Crown',
      chip: '#A8381E',
      Component: lazy(() => import('./Ankole.jsx')),
    },
    {
      id: 'timber',
      num: '02',
      name: 'Timber',
      tag: 'Skid Road Yoke',
      chip: '#112A22',
      Component: lazy(() => import('./Timber.jsx')),
    },
    {
      id: 'bison',
      num: '03',
      name: 'Bison',
      tag: 'Winter Plains',
      chip: '#C65D2E',
      Component: lazy(() => import('./Bison.jsx')),
    },
    {
      id: 'taurine',
      num: '04',
      name: 'Taurine',
      tag: 'Nuchal Blueprint',
      chip: '#1E7CC8',
      Component: lazy(() => import('./Taurine.jsx')),
    },
    {
      id: 'jugyu',
      num: '05',
      name: 'Jūgyū',
      tag: 'Zen Ox-Herding',
      chip: '#D9A74A',
      Component: lazy(() => import('./Jugyu.jsx')),
    },
  ],
}
