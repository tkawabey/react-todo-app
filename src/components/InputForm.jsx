import React from 'react'
// UseStateを使用する宣言
import { useState } from "react";


export const InputForm = ({ taskList, setTaskList }) => {
    // タスク名を入力するテキストボックスについてUseStateの変数化
    const [inputText, setInputText] = useState("");

    const addTask = (e) => {
        // 登録ボタンプッシュされた

        // onSubmit経由でこの関数がコールされた時、再レンダリング
        // しないように、既定のアクションを通常どおりに行うべきで
        // はないことを伝えます。
        e.preventDefault();
        
        // 入力されたタスク名がない
        if (inputText === "") {
          return;
        }
        // console.log("add task");
    
        /* タスクを追加する。 */
        setTaskList([
          ...taskList,
          {
            id: taskList.length,
            text: inputText,
            completed: false,
          },
        ]);
        // console.log(taskList);
        
        //　テキストボックスをクリアします
        setInputText("");
    };

    const handleChange = (e) => {
        // テキストボックスにタスク名が入力された
        setInputText(e.target.value);
        console.log(inputText);
    };
    return (
        <div className='inputForm'>
            <form onSubmit={addTask}>
            <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={addTask}>登録</button>
            </form>
        </div>
    )
}
