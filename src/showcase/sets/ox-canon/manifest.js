import { lazy } from 'react'

export default {
  id: 'ox-canon',
  name: 'OX CANON',
  tagline: 'Five measures of the ox across nature, breed, labour, myth, and territory',
  accent: '#D93829',
  credit: 'Designed by Gemini 4 Argon',
  designs: [
    {
      id: 'visceral',
      num: '01',
      name: 'Visceral',
      tag: 'Ruminant Engine',
      chip: '#D93829',
      Component: lazy(() => import('./Visceral.jsx')),
    },
    {
      id: 'guzerat',
      num: '02',
      name: 'Guzerat',
      tag: 'Lyre-Horned Zebu',
      chip: '#F7B500',
      Component: lazy(() => import('./Guzerat.jsx')),
    },
    {
      id: 'noria',
      num: '03',
      name: 'Noria',
      tag: 'Hydraulic Sweep',
      chip: '#154384',
      Component: lazy(() => import('./Noria.jsx')),
    },
    {
      id: 'buchis',
      num: '04',
      name: 'Buchis',
      tag: 'Solar Bull of Armant',
      chip: '#1CA392',
      Component: lazy(() => import('./Buchis.jsx')),
    },
    {
      id: 'carabao',
      num: '05',
      name: 'Carabao',
      tag: 'Cordillera Terrace',
      chip: '#84C341',
      Component: lazy(() => import('./Carabao.jsx')),
    },
  ],
}
