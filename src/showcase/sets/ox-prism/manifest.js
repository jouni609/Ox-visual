import { lazy } from 'react'

export default {
  id: 'ox-prism',
  name: 'OX PRISM',
  tagline: 'One animal, split five ways',
  accent: '#3F6FD8',
  credit: 'Designed by Antigravity',
  designs: [
    {
      id: 'radiograph',
      num: '01',
      name: 'Radiograph',
      tag: 'Anatomy Lightbox',
      chip: '#5FD3E6',
      Component: lazy(() => import('./Radiograph.jsx')),
    },
    {
      id: 'rosette',
      num: '02',
      name: 'Rosette',
      tag: 'Zebu Show Ring',
      chip: '#5B2A86',
      Component: lazy(() => import('./Rosette.jsx')),
    },
    {
      id: 'furrow',
      num: '03',
      name: 'Furrow',
      tag: 'Riso Plough Team',
      chip: '#C8552B',
      Component: lazy(() => import('./Furrow.jsx')),
    },
    {
      id: 'nandi',
      num: '04',
      name: 'Nandi',
      tag: 'Temple Vahana',
      chip: '#F2A516',
      Component: lazy(() => import('./Nandi.jsx')),
    },
    {
      id: 'prairie',
      num: '05',
      name: 'Prairie',
      tag: 'Plains Survey',
      chip: '#8A5FA8',
      Component: lazy(() => import('./Prairie.jsx')),
    },
  ],
}
