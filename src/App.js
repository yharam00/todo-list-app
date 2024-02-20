import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const ToDoItemInputField = (props) => {
  const [input, setInput] = useState("");

  return (<div>
    <TextField
      id="todo-item-input"
      label="Todo Item"
      variant="outlined"
      onChange={(e) => setInput(e.target.value)} value={input}
    />
  </div>);
}

function App() {
  return (
    <div className="App">
      <ToDoItemInputField />
    </div>
  );
}

export default App;
