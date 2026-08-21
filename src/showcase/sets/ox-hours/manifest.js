import { lazy } from 'react'

export default {
  id: 'ox-hours',
  name: 'OX HOURS',
  tagline: 'A book of hours for one day of an ox',
  accent: '#232A4D',
  credit: 'Designed by Qwen 3.8 Max',
  designs: [
    {
      id: 'matins',
      num: '01',
      name: 'Matins',
      tag: 'Before Dawn',
      chip: '#3A4370',
      Component: lazy(() => import('./Matins.jsx')),
    },
    {
      id: 'terce',
      num: '02',
      name: 'Terce',
      tag: 'The Yoked Hours',
      chip: '#B33A26',
      Component: lazy(() => import('./Terce.jsx')),
    },
    {
      id: 'sext',
      num: '03',
      name: 'Sext',
      tag: 'Water at Noon',
      chip: '#2E8A93',
      Component: lazy(() => import('./Sext.jsx')),
    },
    {
      id: 'vespers',
      num: '04',
      name: 'Vespers',
      tag: 'The Way Home',
      chip: '#D97E3F',
      Component: lazy(() => import('./Vespers.jsx')),
    },
    {
      id: 'compline',
      num: '05',
      name: 'Compline',
      tag: 'Night Office',
      chip: '#0D1220',
      Component: lazy(() => import('./Compline.jsx')),
    },
  ],
}
