import { useRecoilState } from 'recoil'
import { todoFilterState } from '../atoms/filterAtom'

const btn = (active) => ({
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
  background: active ? '#e8f0fe' : 'white',
})

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterState)

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <button style={btn(filter === 'all')} onClick={() => setFilter('all')}>Todas</button>
      <button style={btn(filter === 'done')} onClick={() => setFilter('done')}>Concluídas</button>
      <button style={btn(filter === 'pending')} onClick={() => setFilter('pending')}>Pendentes</button>
    </div>
  )
}

