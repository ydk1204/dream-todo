import './App.css';
import TodoList from './components/TodoList/TodoList';
import TextInput from './components/TextInput';
import { useState } from 'react';

function App() {
  const [list, setList] = useState('')
  return (
    <div>
      <TodoList list={list} />
      <TextInput setList={setList} />
    </div>
  );
}

export default App;
