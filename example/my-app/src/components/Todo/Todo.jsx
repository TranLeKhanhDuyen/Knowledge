const { useState } = require("react");

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "1", value: "abc" },
    { id: "2", value: "eeeeee" },
  ]);

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handelAddTodo = () => {
    setListTodo([
      ...listTodo,
      { id: Math.floor(Math.random() * 1000 + 1), value: newTodo },
    ]);
  };

  const handleDeleteTodo = (todoId) => {
    let newFilter = listTodo.filter((item) => item.id !== todoId);
    setListTodo(newFilter);
  };

  return (
    <>
      <div>To do List</div>
      {listTodo.map((todo, index) => {
        return (
          <div>
            {index + 1}
            {todo.value}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
      <div>my to do = {newTodo}</div>
      <input type={"text"} onChange={handleChangeInput} />
      <button onClick={handelAddTodo}>Add to do</button>
    </>
  );
};

export default Todo;
