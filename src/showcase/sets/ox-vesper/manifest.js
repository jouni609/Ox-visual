import { lazy } from 'react'

export default {
  id: 'ox-vesper',
  name: 'OX VESPER',
  tagline: 'Five atmospheres, one animal',
  accent: '#5B4A8A',
  credit: 'Designed by Claude Opus',
  designs: [
    {
      id: 'vigil',
      num: '01',
      name: 'Vigil',
      tag: 'Guardian Ox',
      chip: '#2D3A5C',
      Component: lazy(() => import('./Vigil.jsx')),
    },
    {
      id: 'torrent',
      num: '02',
      name: 'Torrent',
      tag: 'Monsoon Buffalo',
      chip: '#0D3B3E',
      Component: lazy(() => import('./Torrent.jsx')),
    },
    {
      id: 'cinder',
      num: '03',
      name: 'Cinder',
      tag: 'Charging Bull',
      chip: '#A0522D',
      Component: lazy(() => import('./Cinder.jsx')),
    },
    {
      id: 'verdure',
      num: '04',
      name: 'Verdure',
      tag: 'Grazing Zebu',
      chip: '#4A7C59',
      Component: lazy(() => import('./Verdure.jsx')),
    },
    {
      id: 'numen',
      num: '05',
      name: 'Numen',
      tag: 'Sacred Nandi',
      chip: '#B8860B',
      Component: lazy(() => import('./Numen.jsx')),
    },
  ],
}
