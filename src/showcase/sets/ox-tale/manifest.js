import { lazy } from 'react'

export default {
  id: 'ox-tale',
  name: 'OX TALE',
  tagline: 'five stories that keep the ox alive',
  accent: '#C89B3C',
  credit: 'Designed by MIMO',
  designs: [
    {
      id: 'cowherd',
      num: '01',
      name: 'Cowherd',
      tag: 'Celestial Folktale',
      chip: '#3D4EBF',
      Component: lazy(() => import('./Cowherd.jsx')),
    },
    {
      id: 'europa',
      num: '02',
      name: 'Europa',
      tag: 'Minoan Fresco',
      chip: '#C75B3E',
      Component: lazy(() => import('./Europa.jsx')),
    },
    {
      id: 'stable',
      num: '03',
      name: 'Stable',
      tag: 'Midnight Woodcut',
      chip: '#D9A441',
      Component: lazy(() => import('./Stable.jsx')),
    },
    {
      id: 'frog',
      num: '04',
      name: 'Frog',
      tag: 'Riso Fable',
      chip: '#FF5B5E',
      Component: lazy(() => import('./Frog.jsx')),
    },
    {
      id: 'marathon',
      num: '05',
      name: 'Marathon',
      tag: 'Black-Figure Vessel',
      chip: '#C4622D',
      Component: lazy(() => import('./Marathon.jsx')),
    },
  ],
}
