import { lazy } from 'react'

export default {
  id: 'ox-vita',
  name: 'OX VITA',
  tagline: 'Five ages of one ox, from first breath to ancestor',
  accent: '#c2502a',
  credit: 'MUSE SPARK',
  designs: [
    {
      id: 'first-light',
      num: '01',
      name: 'First Light',
      tag: 'Birth · the calf',
      chip: '#e86a7a',
      Component: lazy(() => import('./FirstLight.jsx')),
    },
    {
      id: 'breaking',
      num: '02',
      name: 'Breaking',
      tag: 'Training · the yearling',
      chip: '#f2c14e',
      Component: lazy(() => import('./Breaking.jsx')),
    },
    {
      id: 'prime',
      num: '03',
      name: 'Prime',
      tag: 'Labour · the draught ox',
      chip: '#ff5a1f',
      Component: lazy(() => import('./Prime.jsx')),
    },
    {
      id: 'dam',
      num: '04',
      name: 'Dam',
      tag: 'Lineage · the mother',
      chip: '#5e1f1f',
      Component: lazy(() => import('./Dam.jsx')),
    },
    {
      id: 'relic',
      num: '05',
      name: 'Relic',
      tag: 'Memory · the elder',
      chip: '#e2703a',
      Component: lazy(() => import('./Relic.jsx')),
    },
  ],
}
