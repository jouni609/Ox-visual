import { lazy } from 'react'

export default {
  id: 'ox-attention',
  name: 'OX ATTENTION',
  tagline: 'Five senses in a bovine world',
  accent: '#e5b642',
  credit: 'Designed by GPT Luna 6',
  designs: [
    { id: 'windward', num: '01', name: 'Windward', tag: 'Scent · Yak', chip: '#e5b642', Component: lazy(() => import('./Windward.jsx')) },
    { id: 'resonance', num: '02', name: 'Resonance', tag: 'Sound · Zebu', chip: '#f05a3e', Component: lazy(() => import('./Resonance.jsx')) },
    { id: 'range', num: '03', name: 'Range', tag: 'Sight · Bison', chip: '#48c9c1', Component: lazy(() => import('./Range.jsx')) },
    { id: 'bristle', num: '04', name: 'Bristle', tag: 'Touch · Highland cow', chip: '#b2d64c', Component: lazy(() => import('./Bristle.jsx')) },
    { id: 'browse', num: '05', name: 'Browse', tag: 'Taste · Water buffalo', chip: '#f3a447', Component: lazy(() => import('./Browse.jsx')) },
  ],
}
