import { MdOutlineDeleteOutline } from 'react-icons/md'
const Todo = ({ id, isDone, title, deleteTodoItem }) => {
  // const []
  return (
    <>
      <div className='todo-center'>
        <div className='todo-title'>
          <input
            type='checkbox'
            name='checkbox'
            id='checkbox'
            // checked={isDone}
            className='input-checkbox'
          />
          <p className=''>{title}</p>
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
