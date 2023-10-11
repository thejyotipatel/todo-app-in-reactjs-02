import { MdOutlineDeleteOutline } from 'react-icons/md'

const Todo = ({ id, isDone, title, deleteTodoItem, compleateTodoItem }) => {
  const setCompleateTodoItem = (id) => {
    compleateTodoItem(id)
  }
  return (
    <>
      <div className='todo-center'>
        <div className='todo-title'>
          <input
            type='checkbox'
            name='checkbox'
            id='checkbox'
            checked={isDone}
            onChange={() => setCompleateTodoItem(id)}
            className={`input-checkbox ${isDone && 'check-title'}`}
          />
          <p className={`${isDone && 'check-title'}`}>{title}</p>
        </div>

        <button
          type='button'
          className='btn btn-delete'
          onClick={() => deleteTodoItem(id)}
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </>
  )
}
export default Todo
