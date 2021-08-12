import React from "react";
import "./style.css";

export default function App() {
  const [todo, setTodo] = React.useState({
    taskName:"",
    description: "",
    dueDate: ""
  })
  const [todoList, setList] = React.useState([])


  function onSubmitHandler(e) {
    e.preventDefault()
    const addTodo = {
      id: new Date().getTime(),
      todoName: todo.taskName,
      todoDescrip: todo.description,
      todoDuedat: todo.dueDate, 
      complete: false
    }
    setList([...todoList].concat(addTodo));
    setTodo("")
    console.log(todoList);

  }

  function deleteTodo(id) {
    let updatedlist = [...todoList].filter((todo) => todo.id !== id)
    setList(updatedlist)
  }
  function completeTodo(id) {
    let updatedlist = [...todoList].map((todo) => {
      if (todo.id == id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setList(updatedlist)
    console.log(todoList)
  }
  return (
    <div className="todo">
      <h1>To Do</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text" name="taskName" placeholder="Task Name"
          value={todo.taskName}
          onChange={(e) => setTodo({...todo, taskName:e.target.value})}
        />
         <input
          type="text" name="description" placeholder="Description"
          value={todo.description}
          onChange={(e) => setTodo({...todo, description:e.target.value})}
        />
         <input
          type="date" name="dueDate" placeholder="Due date"
          value={todo.dueDate}
          onChange={(e) => setTodo({...todo, dueDate:e.target.value})}
        />
        <button>Add</button>
      </form>
      {todoList.map((data) => (
        <div key={data.id} className="list-stlye">
          <div className="button-style">
            <div className="todo-style">
            <div className="li2">
              <h2>Name</h2>
              <div className="fontN">
              {data.todoName}
              </div>
              <h2>Description</h2>
              {data.todoDescrip}
              <h2>Due Date</h2>
              {data.todoDuedat}
            </div>
            <button onClick={() => deleteTodo(data.id)}>Delete</button>
            {data.complete === true
              ? <button className="complete1" onClick={() => completeTodo(data.id)}>Completed</button>
              : <button className="complete1" onClick={() => completeTodo(data.id)}>Complete</button>
            }
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
