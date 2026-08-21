import { lazy } from 'react'

export default {
  id: 'ox-masque',
  name: 'OX MASQUE',
  tagline: 'The ox worn in ritual',
  accent: '#FF5A1F',
  credit: 'Designed by Hy3',
  designs: [
    {
      id: 'surva',
      num: '01',
      name: 'Surva',
      tag: 'Kukeri Ember Mask',
      chip: '#FF5A1F',
      Component: lazy(() => import('./Surva.jsx')),
    },
    {
      id: 'oaken',
      num: '02',
      name: 'Oaken',
      tag: 'Horn-Dance Oak Mask',
      chip: '#2F4A2E',
      Component: lazy(() => import('./Oaken.jsx')),
    },
    {
      id: 'jin',
      num: '03',
      name: 'Jin',
      tag: 'New-Year Ox-Head',
      chip: '#E8B54B',
      Component: lazy(() => import('./Jin.jsx')),
    },
    {
      id: 'gelede',
      num: '04',
      name: 'Gelede',
      tag: 'Yoruba Headdress',
      chip: '#1B2A4A',
      Component: lazy(() => import('./Gelede.jsx')),
    },
    {
      id: 'percht',
      num: '05',
      name: 'Percht',
      tag: 'Alpine Perchten Bull',
      chip: '#DCE7EC',
      Component: lazy(() => import('./Percht.jsx')),
    },
  ],
}
