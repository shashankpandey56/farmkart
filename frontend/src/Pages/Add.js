import React,{ useState } from 'react'

function Add() {
  
    const [query, setQuery] = useState("");
    const [task, setTask] = useState([]);
  
    const filterList = (index) => {
      return setTask(() => {
        return task.filter((el, id) => {
          return id !== index;
        });
      });
    };
  
    return (
      <div className="App">
        <h1>Todo List</h1>
        <input
          value={query}
          placeholder="Task Name..."
          onChange={(e) => {
            return setQuery(() => {
              return e.target.value;
            });
          }}
        />
  
        <button
          type="submit"
          onClick={() => {
            {
              query !== "" && setTask([...task, query]);
            }
            setQuery("");
          }}
        >
          Add Task
        </button>
        <hr />
        {task.map((task, index) => {
          return (
            <div key={index}>
              <span>{index + 1}</span>
              {". "}
              <span>{task}</span>
              {"    "}{" "}
              <button
                onClick={() => {
                  filterList(index);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  
}

export default Add
