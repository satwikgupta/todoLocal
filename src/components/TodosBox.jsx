import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTodo as toggleComp,
  removeTodo,
  updateTodo,
} from "../store/storeSlice";

function TodosBox({ todos }) {
  console.log(todos);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todos.text);
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo({ id: todos.id, text: todoMsg }));
    setIsTodoEditable(false);
  };
  const toggleComplete = () => {
    dispatch(toggleComp(todos.id));
  };
  const handleRemoveTodo = () => {
    dispatch(removeTodo(todos.id));
  };

  return (
    <div
      className={`flex border border-black/5 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todos.completed ? "bg-[#3A5A40]" : "bg-[#A0CFA5]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todos.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none font-semibold w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todos.completed ? "line-through " : "text-[#333]"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-[#FBF9F1] hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todos.completed) return;

          isTodoEditable? editTodo() : setIsTodoEditable((prev) => !prev);
          // setIsTodoEditable((prev) => !prev);
        }}
        disabled={todos.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleRemoveTodo}
      >
        ☠️
      </button>
    </div>
  );
}

export default TodosBox;
