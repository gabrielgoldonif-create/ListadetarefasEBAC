import { atom } from 'recoil'

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'all' // 'all' | 'done' | 'pending'
})

