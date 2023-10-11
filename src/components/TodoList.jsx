import Todo from './Todo'

const TodoList = ({ items, deleteTodoItem }) => {
  return (
    <>
      {items.map((item) => {
        return <Todo key={item.id} {...item} deleteTodoItem={deleteTodoItem} />
      })}
    </>
  )
}
export default TodoList
