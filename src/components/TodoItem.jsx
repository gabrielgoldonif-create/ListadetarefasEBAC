import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoItem({ item }) {
  const [list, setList] = useRecoilState(todoListState)

  function toggleComplete() {
    setList(list.map(t => t.id === item.id ? { ...t, completed: !t.completed } : t))
  }

  function remove() {
    setList(list.filter(t => t.id !== item.id))
  }

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 10px',
        border: '1px solid #eee',
        borderRadius: 8,
      }}
    >
      <input type="checkbox" checked={item.completed} onChange={toggleComplete} />
      <span style={{ flex: 1, textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button onClick={remove} style={{ padding: '4px 8px', borderRadius: 6 }}>
        Remover
      </button>
    </li>
  )
}

