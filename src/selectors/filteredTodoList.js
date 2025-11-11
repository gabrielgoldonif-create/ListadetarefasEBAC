import { selector } from 'recoil'
import { todoListState } from '../atoms/todoAtom'
import { todoFilterState } from '../atoms/filterAtom'

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(todoListState)
    const filter = get(todoFilterState)
    if (filter === 'done') return list.filter(t => t.completed)
    if (filter === 'pending') return list.filter(t => !t.completed)
    return list
  }
})

