// UseStateを使用す宣言を行います。
import { useState } from "react";
import './App.css';
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";


function App() {
  // UseState変数を定義します。
  // 初期値はからの配列を指定します
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;

