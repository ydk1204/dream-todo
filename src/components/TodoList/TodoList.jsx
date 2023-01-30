import React, { useState, useEffect } from "react";

let num = 124;
const TodoList = ({ list }) => {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  useEffect(() => {
    if (list.length !== 0) {
      num++;
      const newList = { id: `${num}`, text: list, status: "active" };
      setTodos([...todos, newList]);
    }
  }, [list]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
