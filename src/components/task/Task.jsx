import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
// taskを受け取る
const Task = ({task,taskList, setTaskList}) => {
  // 引数にidを受け取る　idは持ってこれてどうやって削除する？setTaskList;の状態関数を呼ぶ事でTaskListの中身を変更できる
  //  setTaskList;をpropsで持ってくる
  const handleDelete = (id) => {
  // 状態関数setTaskListでtaskListの中身を変更することができる　その中のtaskListにfilter関数を使っている
  // taskListの中に刃打ち込んで表示されたものが入っている、それに対してfilter関数を使ってあげる　taskという名前を宣言して1つ1つ取り出したもののtask.idでidを見ていく　task.idは!== idこのidと一致しない　このidは削除したボタンのid task.idは打ち込んだ数のidで、!== idは削除ボタンを押したidを示す
  // task.idの例えば１番目のidと!== idが3番目の場合、not equalなので3はtrueになる　こちらの条件式がtrueになるので、trueになるものだけ残す　それがfilter関数の役目　3と3の場合は条件式がfalseになる　falseのものは残さない＝削除
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    // Draggableに必要なのがindexのプロパティ その中にtask.idとdraggableID(draggableがどの要素なのか)が必要
    // Draggableの中は関数が必要なので引数を用意
    <Draggable index={task.id} draggableId={task.draggableId}>
      {/* 下記に入れるとこのエリアがドラッグ可能なエリアを指定 */}
      {(provided) => (
            <div className='taskBox' 
            key={task.id} 
            ref={provided.innerRef} 
            // {...provided.draggableProps}を入れないとドラッグができない
            {...provided.draggableProps}
            //  {...provided.dragHandleProps}で要素を掴んで要素同士を入れ替える
            {...provided.dragHandleProps}
            >
            {/* 受け取っとtaskにtask.textが入っているので出力する */}
            <p className='taskText'>{task.text}</p>
      
          {/* handleDeleteという削除するための関数を用意　押した時だけ呼ばれたい＝引数をとって無名関数で用意 
          task.idも指定して引数に渡してあげる */}
            <button className="taskTrashButton" onClick={() => handleDelete (task.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>

      ) }
 </Draggable>
  );
};

export default Task
