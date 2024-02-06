import {useState, useEffect} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }

    setTodos((currentArray) => [toDo, ...currentArray]);
    // input value 비우기
    setTodo("");
  } 

  const onClick = (removeIdx) => {
    setTodos(toDos.filter((_, index) => index !== removeIdx));
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo }
          type="text" 
          placeholder="write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li 
            key={index}
          >
            {item}
            <button onClick={() => onClick(index)}>X</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App;
