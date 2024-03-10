import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/storeSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log("Submitted: ", todo)
    if(todo.length > 0) dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 font-tight text-[#333] rounded-l-lg px-3 outline-none duration-150 bg-white/10 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 font-semibold py-1 bg-[#61A676] text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
