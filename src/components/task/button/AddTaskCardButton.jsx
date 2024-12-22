import React from 'react'
import { v4 as uuid } from "uuid";
// 子コンポーネントでtaskCardsList（これから増やす配列）,setTaskCardsList（それを増やしたり削除して操作するための状態関数）のpropsを受け取る

const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  // addTaskCardの中身 カードを追加する関数を記述
  const addTaskCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する スプレッド構文（...）を使いtaskCardsList全て展開する意味
    setTaskCardsList([...taskCardsList, {
      // ユニークなdraggableIDの設定
      id: taskCardId,
      draggableId: `item1${taskCardId}`,
    },
    ]);

  };
  return (
    <div className='addTaskCardButtonArea'>
      {/* ボタンを押したらの操作はonClickのプロパティをつける */}
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>

    </div>
  )
}

export default AddTaskCardButton
