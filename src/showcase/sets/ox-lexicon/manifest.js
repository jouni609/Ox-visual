import { lazy } from 'react'

export default {
  id: 'ox-lexicon',
  name: 'OX LEXICON',
  tagline: 'Five words the ox gave us',
  accent: '#A32638',
  credit: 'DEEPSEEK FLASH',
  designs: [
    {
      id: 'vacca',
      num: '01',
      name: 'Vacca',
      tag: 'Public-Health Notice',
      chip: '#A32638',
      Component: lazy(() => import('./Vacca.jsx')),
    },
    {
      id: 'pecus',
      num: '02',
      name: 'Pecus',
      tag: 'Roman Mint',
      chip: '#C9A227',
      Component: lazy(() => import('./Pecus.jsx')),
    },
    {
      id: 'bucolic',
      num: '03',
      name: 'Bucolic',
      tag: 'Riso Pastoral',
      chip: '#6C9A4F',
      Component: lazy(() => import('./Bucolic.jsx')),
    },
    {
      id: 'taurus',
      num: '04',
      name: 'Taurus',
      tag: 'Star Atlas',
      chip: '#7FD0FF',
      Component: lazy(() => import('./Taurus.jsx')),
    },
    {
      id: 'grex',
      num: '05',
      name: 'Grex',
      tag: 'Woodcut Herd',
      chip: '#8D3B22',
      Component: lazy(() => import('./Grex.jsx')),
    },
  ],
}
