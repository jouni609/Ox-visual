import { lazy } from 'react'

export default {
  id: 'ox-epoch',
  name: 'OX EPOCH',
  tagline: 'Five ways we have looked at the ox',
  accent: '#8C3A22',
  credit: 'Omen Alpha',
  designs: [
    {
      id: 'aurochs',
      num: '01',
      name: 'Aurochs',
      tag: 'Cave Ochre',
      chip: '#A34A1C',
      Component: lazy(() => import('./Aurochs.jsx')),
    },
    {
      id: 'osteology',
      num: '02',
      name: 'Osteology',
      tag: 'Specimen Plate',
      chip: '#E9E2CF',
      Component: lazy(() => import('./Osteology.jsx')),
    },
    {
      id: 'ankole',
      num: '03',
      name: 'Ankole',
      tag: 'Deco Portrait',
      chip: '#C99B3F',
      Component: lazy(() => import('./Ankole.jsx')),
    },
    {
      id: 'primals',
      num: '04',
      name: 'Primals',
      tag: 'Butcher Chart',
      chip: '#7E241C',
      Component: lazy(() => import('./Primals.jsx')),
    },
    {
      id: 'apis',
      num: '05',
      name: 'Apis',
      tag: 'Lapis Temple',
      chip: '#1E418F',
      Component: lazy(() => import('./Apis.jsx')),
    },
  ],
}
