import { useState } from 'react'

const InputBox = ({ addTodoItem }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo) {
      addTodoItem(todo)
      setTodo('')
    }
  }
  return (
    <>
      <div className='input-box'>
        <div className='input-box-center'>
          <form onSubmit={handleSubmit} className='form'>
            <input
              type='text'
              name='text'
              id='text'
              placeholder='Type here...'
              className='input-control'
              required
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className='btn btn-add'>Add</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default InputBox
