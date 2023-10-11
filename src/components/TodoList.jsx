import Todo from './Todo'

const TodoList = ({ items, deleteTodoItem, compleateTodoItem }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <Todo
            key={item.id}
            {...item}
            deleteTodoItem={deleteTodoItem}
            compleateTodoItem={compleateTodoItem}
          />
        )
      })}
    </>
  )
}
export default TodoList
