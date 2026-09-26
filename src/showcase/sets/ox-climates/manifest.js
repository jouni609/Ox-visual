import { lazy } from 'react'

export default {
  id: 'ox-climates',
  name: 'OX CLIMATES',
  tagline: 'Five skies, one animal',
  accent: '#4E9BB5',
  credit: 'Designed by Nordvik',
  designs: [
    {
      id: 'hima',
      num: '01',
      name: 'Hima',
      tag: 'Night Snowfall',
      chip: '#9FD8E8',
      Component: lazy(() => import('./hima/Design.jsx')),
    },
    {
      id: 'garmi',
      num: '02',
      name: 'Garmi',
      tag: 'Noon Dust',
      chip: '#E8A33D',
      Component: lazy(() => import('./garmi/Design.jsx')),
    },
    {
      id: 'reo',
      num: '03',
      name: 'Reò',
      tag: 'First Light Frost',
      chip: '#A8C5B8',
      Component: lazy(() => import('./reo/Design.jsx')),
    },
    {
      id: 'niwl',
      num: '04',
      name: 'Niwl',
      tag: 'Moorland Drizzle',
      chip: '#9AA58F',
      Component: lazy(() => import('./niwl/Design.jsx')),
    },
    {
      id: 'vindr',
      num: '05',
      name: 'Vindr',
      tag: 'Open-Plain Storm',
      chip: '#E8D44D',
      Component: lazy(() => import('./vindr/Design.jsx')),
    },
  ],
}
