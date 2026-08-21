import { lazy } from 'react'

export default {
  id: 'ox-numismatica',
  name: 'OX NUMISMATICA',
  tagline: 'five millennia of value measured in the horn, the hide, and the hoof',
  accent: '#d97736',
  credit: 'Antigravity',
  designs: [
    {
      id: 'pecunia',
      num: '01',
      name: 'Pecunia',
      tag: 'The Archaic Bronze Ingot',
      chip: '#d97736',
      Component: lazy(() => import('./Pecunia.jsx'))
    },
    {
      id: 'euboea',
      num: '02',
      name: 'Euboea',
      tag: 'The Archaic Silver Stater',
      chip: '#5eead4',
      Component: lazy(() => import('./Euboea.jsx'))
    },
    {
      id: 'pasupati',
      num: '03',
      name: 'Pasupati',
      tag: 'The Indus Steatite Seal',
      chip: '#c85632',
      Component: lazy(() => import('./Pasupati.jsx'))
    },
    {
      id: 'nomisma',
      num: '04',
      name: 'Nomisma',
      tag: 'The Imperial Gold Solidus',
      chip: '#f59e0b',
      Component: lazy(() => import('./Nomisma.jsx'))
    },
    {
      id: 'specie-scrip',
      num: '05',
      name: 'Specie Scrip',
      tag: 'The Gilded Age Bullion Bond',
      chip: '#4ade80',
      Component: lazy(() => import('./SpecieScrip.jsx'))
    }
  ]
}
