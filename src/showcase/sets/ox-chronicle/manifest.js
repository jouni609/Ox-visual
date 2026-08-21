import { lazy } from 'react'

export default {
  id: 'ox-chronicle',
  name: 'OX CHRONICLE',
  tagline: 'Five epochs in the story of the ox',
  accent: '#a54a32',
  credit: 'Antigravity',
  designs: [
    {
      id: 'oc-taurus',
      num: '01',
      name: 'Taurus',
      tag: 'Constellation',
      chip: '#2c3e50',
      Component: lazy(() => import('./Taurus.jsx')),
    },
    {
      id: 'oc-lascaux',
      num: '02',
      name: 'Lascaux',
      tag: 'Paleolithic',
      chip: '#8b4513',
      Component: lazy(() => import('./Lascaux.jsx')),
    },
    {
      id: 'oc-zebu',
      num: '03',
      name: 'Zebu',
      tag: 'Anatomy',
      chip: '#0d3b66',
      Component: lazy(() => import('./Zebu.jsx')),
    },
    {
      id: 'oc-bubalus',
      num: '04',
      name: 'Bubalus',
      tag: 'The River',
      chip: '#3c7a6b',
      Component: lazy(() => import('./Bubalus.jsx')),
    },
    {
      id: 'oc-minotaur',
      num: '05',
      name: 'Minotaur',
      tag: 'The Labyrinth',
      chip: '#8b0000',
      Component: lazy(() => import('./Minotaur.jsx')),
    },
  ],
}
