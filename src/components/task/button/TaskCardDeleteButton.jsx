import React from 'react'
// propsでtaskCardsList,settaskCardsList,taskCard,を受け取る
const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  // taskCardDeleteButtonのidで受け取る
  const taskCardDeleteButton = (id) => {

    // タスクカードを削除する
    // filter関数もMap関数のようにtaskCardsListのIDを1つ1つ取り出している　取り出したものをeの変数で定義し、e.id　eの中のidで見ている　リストを全て比較し、2という値が2であれば削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
    // 消すタスクカードがわかるようにIDを持ってくる
  };
  return (
    <div>
      {/* ボタンを押して消したいのでonClick=のプロパティを用意 */}
      <button
        className='taskCardDeleteButton'
        // taskCardのidをtaskCardDeleteButtonの引数に挿入　そうすることでボタンを押したIDをtaskに持ってくる事ができる＝xを押す事でToday1の×ボタンを指定する
        // 
        onClick={() => taskCardDeleteButton(taskCard.id)}>

        < i className="fa-solid fa-xmark"></i></button>

    </div>
  )
}

export default TaskCardDeleteButton
