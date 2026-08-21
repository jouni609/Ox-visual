import { lazy } from 'react'

export default {
  id: 'ox-faces',
  name: 'Faces of the Ox',
  tagline: 'Five traits of the animal',
  accent: '#ff4d00',
  credit: 'Set I',
  designs: [
    {
      id: 'monolith',
      num: '01',
      name: 'Monolith',
      tag: 'Raw Power',
      chip: '#ff4d00',
      Component: lazy(() => import('./Monolith.jsx')),
    },
    {
      id: 'heritage',
      num: '02',
      name: 'Heritage',
      tag: 'Endurance',
      chip: '#7a1f1f',
      Component: lazy(() => import('./Heritage.jsx')),
    },
    {
      id: 'beast',
      num: '03',
      name: 'Circuit Beast',
      tag: 'Relentless Drive',
      chip: '#00f0ff',
      Component: lazy(() => import('./CircuitBeast.jsx')),
    },
    {
      id: 'stillness',
      num: '04',
      name: 'Stillness',
      tag: 'Patience',
      chip: '#6b7f5c',
      Component: lazy(() => import('./Stillness.jsx')),
    },
    {
      id: 'pop',
      num: '05',
      name: 'Barnyard Pop',
      tag: 'Friendly Diligence',
      chip: '#ffd93d',
      Component: lazy(() => import('./BarnyardPop.jsx')),
    },
  ],
}
