import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoItemsList: initialTodosList}

  onDeleteTodo = id => {
    const {todoItemsList} = this.state
    const filterList = todoItemsList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoItemsList: filterList})
  }

  render() {
    const {todoItemsList} = this.state

    return (
      <div className="app-container">
        <div className="details-card-container">
          <h1 className="todo-heading">Simple Todos</h1>
          <ul className="list-container">
            {todoItemsList.map(eachTodo => (
              <TodoItem
                initialTodos={eachTodo}
                key={eachTodo.id}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
