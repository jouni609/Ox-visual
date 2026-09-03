import { lazy } from 'react'

export default {
  id: 'ox-mythos',
  name: 'OX MYTHOS',
  tagline: 'Five primeval mythologies, five cosmic cattle',
  accent: '#D4AF37',
  credit: 'Designed by Gemini 3.8 Flash',
  designs: [
    {
      id: 'apis',
      num: '01',
      name: 'Apis',
      tag: 'Sacred Bull of Memphis',
      chip: '#D4AF37',
      Component: lazy(() => import('./Apis.jsx')),
    },
    {
      id: 'audhumbla',
      num: '02',
      name: 'Auðumbla',
      tag: 'The Rime-Cow of Ginnungagap',
      chip: '#4FD1C5',
      Component: lazy(() => import('./Audhumbla.jsx')),
    },
    {
      id: 'gugalanna',
      num: '03',
      name: 'Gugalanna',
      tag: 'The Bull of Heaven',
      chip: '#DD6B20',
      Component: lazy(() => import('./Gugalanna.jsx')),
    },
    {
      id: 'kamadhenu',
      num: '04',
      name: 'Kamadhenu',
      tag: 'Cow of Infinite Abundance',
      chip: '#C53030',
      Component: lazy(() => import('./Kamadhenu.jsx')),
    },
    {
      id: 'gavaevodata',
      num: '05',
      name: 'Gavaevodata',
      tag: 'The Sole-Created Bovine',
      chip: '#63B3ED',
      Component: lazy(() => import('./Gavaevodata.jsx')),
    },
  ],
}
