import { useState, useEffect } from 'react'
import { AddTodo, TodosBox } from './components/index'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const todos = useSelector((state) => state.todos)

  // useEffect(()=>{
  //   localStorage.setItem("todo", JSON.stringify(todos))
  // },[todos])

  return (
    <>
      <div className="bg-[#E4F1E1] min-h-screen py-8 pt-20 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-4 text-white">
          <h1 className="text-2xl text-[#3A5A40] font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-6">
            {/* Todo form goes here */}
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos && todos.map((todo) => (
              <div key={todo.id} 
                className="w-full"
              >
                <TodosBox todos={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>     
    </>
  )
}

export default App
