import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../selectors/filteredTodoList'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState)

  if (todos.length === 0) {
    return <p style={{ color: '#666', marginTop: 12 }}>Nenhuma tarefa para exibir.</p>
  }

  return (
    <ul style={{ display: 'grid', gap: 8, marginTop: 8, paddingLeft: 0, listStyle: 'none' }}>
      {todos.map(t => <TodoItem key={t.id} item={t} />)}
    </ul>
  )
}

