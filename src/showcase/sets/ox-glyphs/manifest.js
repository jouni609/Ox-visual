import { lazy } from 'react'

export default {
  id: 'ox-glyphs',
  name: 'OX GLYPHS',
  tagline: 'The ox, written first, in five alphabets',
  accent: '#a8792e',
  credit: 'Designed by DeepSeek V4',
  designs: [
    {
      id: 'alef',
      num: '01',
      name: 'Alef',
      tag: 'The Letter Is an Ox',
      chip: '#b08545',
      Component: lazy(() => import('./Alef.jsx')),
    },
    {
      id: 'boustro',
      num: '02',
      name: 'Boustrophedon',
      tag: 'The Script That Ploughs',
      chip: '#c1572f',
      Component: lazy(() => import('./Boustro.jsx')),
    },
    {
      id: 'uruz',
      num: '03',
      name: 'Uruz',
      tag: 'The Rune of the Aurochs',
      chip: '#6f8b9b',
      Component: lazy(() => import('./Uruz.jsx')),
    },
    {
      id: 'niu',
      num: '04',
      name: 'Niu',
      tag: 'One Ox, 3,200 Years',
      chip: '#b13227',
      Component: lazy(() => import('./Niu.jsx')),
    },
    {
      id: 'oxen',
      num: '05',
      name: 'Oxen',
      tag: 'The Last -en Plural',
      chip: '#8a3323',
      Component: lazy(() => import('./Oxen.jsx')),
    },
  ],
}
