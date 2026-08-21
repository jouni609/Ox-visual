import { lazy } from 'react'

export default {
  id: 'ox-atlas',
  name: 'OX ATLAS',
  tagline: 'The ox around the world',
  accent: '#163A5C',
  credit: 'Designed by ox-alpha',
  designs: [
    {
      id: 'talvi',
      num: '01',
      name: 'Talvi',
      tag: 'Nordic Print',
      chip: '#B5442A',
      Component: lazy(() => import('./Talvi.jsx')),
    },
    {
      id: 'ushi',
      num: '02',
      name: 'Ushi no Kawa',
      tag: 'Woodblock Waves',
      chip: '#163A5C',
      Component: lazy(() => import('./Ushi.jsx')),
    },
    {
      id: 'raja',
      num: '03',
      name: 'Raja',
      tag: 'Festival Zebu',
      chip: '#D6336C',
      Component: lazy(() => import('./Raja.jsx')),
    },
    {
      id: 'jianzhi',
      num: '04',
      name: 'Jianzhi',
      tag: 'Paper-Cut Lattice',
      chip: '#C8102E',
      Component: lazy(() => import('./Jianzhi.jsx')),
    },
    {
      id: 'toros',
      num: '05',
      name: 'Tarde de Toros',
      tag: 'Silk-Screen Poster',
      chip: '#FF6B4A',
      Component: lazy(() => import('./Toros.jsx')),
    },
  ],
}
