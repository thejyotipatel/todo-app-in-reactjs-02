import { useState } from 'react'
import InputBox from './components/InputBox'
import TodoList from './components/TodoList'

const defaultItems = [
  { id: 1, title: 'walk the dog', isDone: false },
  { id: 2, title: 'wash dishes', isDone: true },
  { id: 3, title: 'drink coffee', isDone: false },
  { id: 4, title: 'take a nap', isDone: false },
]

function App() {
  const [items, setItems] = useState(defaultItems)

  const addTodoItem = (item) => {
    const newItem = {
      id: new Date().getTime().toString(),
      title: item,
      isDone: false,
    }
    setItems([...items, newItem])
  }

  // set compleated todos
  const compleateTodoItem = (id) => {
    const newTodoItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }
      }
      return item
    })
    setItems(newTodoItems)
    console.log(items)
  }

  //  delete item of todo
  const deleteTodoItem = (id) => {
    const newTodoItems = items.filter((item) => item.id !== id)
    setItems(newTodoItems)
  }

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>To Do App</h1>
        </div>
        <InputBox addTodoItem={addTodoItem} />
        <TodoList
          items={items}
          deleteTodoItem={deleteTodoItem}
          compleateTodoItem={compleateTodoItem}
        />
      </div>
    </>
  )
}

export default App
