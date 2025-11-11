import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function NewTodoForm() {
  const [text, setText] = useState('')
  const [list, setList] = useRecoilState(todoListState)

  function addTodo(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    const newTodo = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      text: trimmed,
      completed: false,
    }
    setList([newTodo, ...list])
    setText('')
  }

  return (
    <form onSubmit={addTodo} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: 8, border: '1px solid #ccc', borderRadius: 6 }}
      />
      <button type="submit" style={{ padding: '8px 12px', borderRadius: 6 }}>
        Adicionar
      </button>
    </form>
  )
}

