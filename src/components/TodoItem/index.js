import './index.css'

const TodoItem = props => {
  const {initialTodos, onDeleteTodo} = props
  const {id, title} = initialTodos

  const deleteTodo = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="item-container">
      <p className="description">{title}</p>
      <button type="button" className="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
