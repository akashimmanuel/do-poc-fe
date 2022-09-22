import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card";

export const Todo: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [newtodos, setNewTodos] = useState({ name: "", status: "INPROGRESS" });

  const getTodoList = () => {
    axios
      .get(`${import.meta.env.VITE_HOST}/todo/get`)
      .then((res) => setTodos(res.data));
  };

  const addTodo = () => {
    const data = newtodos;
    axios.post(`${import.meta.env.VITE_HOST}/todo/add`, data).then((res) => {
      const newData = [...todos, res.data];

      setTodos(newData as any);
      setNewTodos({ ...newtodos, name: "" });
    });
  };

  const deleteHandler = (id: any) => {
    const data = { id };

    axios.post(`${import.meta.env.VITE_HOST}/todo/delete`, data).then((res) => {
      const filterTodo = todos?.filter((todo) => (todo as any).id !== id);
      setTodos(filterTodo);
    });
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div>
      <>Hey Its the stage...!</>
      <div className="container">
        <div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="todos"
              value={newtodos.name}
              onChange={(e) =>
                setNewTodos({ ...newtodos, name: e.target.value })
              }
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
              onClick={addTodo}
            >
              add
            </button>
          </div>
        </div>
      </div>

      {todos.length === 0 && <h1>No Data </h1>}
      {todos &&
        todos?.map((todo) => (
          <div key={(todo as any).id} className="m-3">
            <Card data={todo} handler={deleteHandler} />
          </div>
        ))}
    </div>
  );
};
