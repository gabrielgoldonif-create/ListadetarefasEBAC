import NewTodoForm from './components/NewTodoForm'
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'system-ui, Arial' }}>
      <h1 style={{ marginBottom: 16 }}>Lista de Tarefas</h1>
      <NewTodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  )
}
