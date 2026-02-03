import { useRef } from "react";

function AddTodo({ onAddTodo }) {
  const todoNameRef = useRef();
  const dueDateRef = useRef();

  const handleAdd = () => {
    const name = todoNameRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (!name || !dueDate) return;

    onAddTodo(name, dueDate);

    todoNameRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameRef}
            placeholder="Enter Todo Here"
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            ref={dueDateRef}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
