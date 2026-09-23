import { lazy } from 'react'

export default {
  id: 'ox-apparatus',
  name: 'OX APPARATUS',
  tagline: 'Five working systems of the ox',
  accent: '#7157FF',
  credit: 'Space Bunny',
  designs: [
    {
      id: 'rumen',
      num: '01',
      name: 'Rumen',
      tag: 'Anatomy Bench',
      chip: '#EF553F',
      Component: lazy(() => import('./rumen/Design.jsx')),
    },
    {
      id: 'whorl',
      num: '02',
      name: 'Whorl',
      tag: 'Coat Chromatics',
      chip: '#7157FF',
      Component: lazy(() => import('./whorl/Design.jsx')),
    },
    {
      id: 'beam',
      num: '03',
      name: 'Beam',
      tag: 'Pull Test',
      chip: '#F3B61F',
      Component: lazy(() => import('./beam/Design.jsx')),
    },
    {
      id: 'bell',
      num: '04',
      name: 'Bell',
      tag: 'Herd Hearing',
      chip: '#D98A58',
      Component: lazy(() => import('./bell/Design.jsx')),
    },
    {
      id: 'hoof',
      num: '05',
      name: 'Hoof',
      tag: 'Highland Load',
      chip: '#8CCFC0',
      Component: lazy(() => import('./hoof/Design.jsx')),
    },
  ],
}
