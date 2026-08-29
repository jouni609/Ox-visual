import { lazy } from 'react'

export default {
  id: 'ox-polis',
  name: 'OX POLIS',
  tagline: 'The ox the city kept',
  accent: '#2C4A63',
  credit: 'Designed by Qwen 3.8 Flash',
  designs: [
    {
      id: 'common',
      num: '01',
      name: 'Common',
      tag: 'Colonial Map',
      chip: '#63804F',
      Component: lazy(() => import('./Common.jsx')),
    },
    {
      id: 'new-road',
      num: '02',
      name: 'New Road',
      tag: 'Turnpike Strip',
      chip: '#D24B2A',
      Component: lazy(() => import('./NewRoad.jsx')),
    },
    {
      id: 'cathedral',
      num: '03',
      name: 'Cathedral',
      tag: 'Gaslight Iron',
      chip: '#E8A94A',
      Component: lazy(() => import('./Cathedral.jsx')),
    },
    {
      id: 'the-line',
      num: '04',
      name: 'The Line',
      tag: 'Yard Blueprint',
      chip: '#7FB4D8',
      Component: lazy(() => import('./TheLine.jsx')),
    },
    {
      id: 'bronze',
      num: '05',
      name: 'Bronze',
      tag: 'Monument Night',
      chip: '#C99A54',
      Component: lazy(() => import('./Bronze.jsx')),
    },
  ],
}
