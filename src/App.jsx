import { useState } from 'react'
import InputBox from './components/InputBox'
import TodoList from './components/TodoList'

const defaultItems = [
  { id: 1, title: 'walk the dog', isDone: false },
  { id: 2, title: 'wash dishes', isDone: false },
  { id: 3, title: 'drink coffee', isDone: true },
  { id: 4, title: 'take a nap', isDone: false },
]

function App() {
  const [items, setItems] = useState(defaultItems)

  const addTodoItem = (item) => {
    const newItem = {
      title: item,
      id: new Date().getTime().toString(),
      isDone: false,
    }
    setItems([...items, newItem])
    console.log(items)
  }

  const deleteTodoItem = (id) => {
    const newTodoItems = items.filter((item) => item.id !== id)
    setItems(newTodoItems)
    console.log(newTodoItems)
  }

  return (
    <>
      <div className='title'>
        <h2>To Do App</h2>
      </div>
      <InputBox addTodoItem={addTodoItem} />
      <TodoList items={items} deleteTodoItem={deleteTodoItem} />
    </>
  )
}

export default App
