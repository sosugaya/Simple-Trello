import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

// import { Draggable } from 'react-beautiful-dnd';

// 　propsをTaskCard.jsで渡したのでTaskAddInputで受け取る必要がある
const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  // e イベントハンドラー 野球で例えるとグローブ＝打たれたボールをキャッチする役割
  // タスクを入力してエンターキーを押した時にUUIDを生成
  const handleSubmit = (e) => {
    const taskId = uuid();
    // リロードをなくす関数
    e.preventDefault();
    // キャッチしたものがどういうのかコンソールで確認
    console.log(e);
    // Tasksの中身が空白だったら追加しない
    if (inputText === "") {
      return;
    }
    //カードを追加する。　handleSubmitが呼ばれた時＝enterを押した時
    // enterを押すと、taslListの中にどんどんinputTextを格納したい　なので状態関数のsetTaskListで記述
    setTaskList([
      // スプレッド構文を使用　元の配列の中身を全て表している
      ...taskList,
      {
        // ゴミ箱アイコンを押した時に削除されるようにid をふる idでタスクが識別できるようになった
        // 今までのテキストIDだけでなくdraggableIdも追加していくIDはストリング型である必要があるため``Back quoteで囲う
        // 中は`task-${}`＄で書くと変数が入れられる
        // length（長さ）でidを指定するとかぶるためエラーが起きるので、ユニークなID（何もかぶらないID）が必要
        id: taskId,
        // 中は`task-${}`＄で書くと変数が入れられる taskList.lengthと書いてタスクリストの長さをIDに割り当てる　文字列のIDが完成
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    //以前の中身が全て入っているのでログに出力されない（defaultが空なので出力されない）
    // カードを追加した後にsetInputText("");で空にして、空にした内容を下記のvalue={inputText}で読み取る
    setInputText("");
  };

  // handleChangeを定義
  const handleChange = (e) => {
    // e.target.valueがformで入力した文字　その文字の情報をhandleChange　入力されるたびにsetInputTextに格納されている
    //setInputText useStateでinputTextの中身を更新するための状態関数　　 setInputText(e.target.value)で文字が入力されるたびにinputTextで文字が更新される
    setInputText(e.target.value);
    //文字が入力されるたびに更新される結果
    console.log(inputText);

  };

  return (
    <div>
      {/* onSubmitでhandleSubmitという関数を作る */}
      {/* enterを押してタスクが追加される＝onSubmitのhandleSubmitが呼ばれた時 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='add a task'
          className='taskAddInput'
          // onChangeはformに文字が入力されるたびに呼び出されるプロパティ
          onChange={handleChange}
          // カードを追加した後にsetInputText("");で空にして、空にした内容を下記のvalue={inputText}で読み取る
          value={inputText}
        />
      </form>

    </div>
  )
}

export default TaskAddInput
