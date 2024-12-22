import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び替える taskList（1,2,3のカードのこと）にsplice関数を使いindexを追加したり削除できるメソッド
  // splice関数はresult.source.indexからスタートし、1個消す 削除した要素はremoveという関数に入れる
  const remove = taskList.splice(startIndex, 1); //[2,3]
  // splice関数はresult.destination.indexからスタートし、0個消す、removeの0番目を追加
  taskList.splice(endIndex, 0, remove[0]); //[2,1,3]


};
// taskListを受け取る setTaskListも受け取る
const Tasks = ({ taskList, setTaskList }) => {

  // onDragEndは引数をもっているのでそれを受け取る
  const handleDragEnd = (result) => {

    //  リファクタリング
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      {/*ドラッグした後の動作をするためにはプロパティが必要。onDragEndはドラッグが終わった後に呼び出されるプロパティ　
      handleDragEndの関数を使い並び替え番号変わらず発生するようにする  */}
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* DroppableタグにはdroppableIDが必要　Droppableタグの中は関数でなければならない　 */}
        <Droppable droppableId='droppable' >
          {/* innerRefはドラッグしている以外のカード要素の制御をしている　制御しないと正常なドラッグドロップができない */}
          {(provided) => (<div {...provided.droppableProps} ref={provided.innerRef}>
            {/* taskListの入っているものを１つ１つ取り出すためにmap関数を使用　
       <div>{task.text}</div>だとmap関数の中にtaskという引数を仮において、それを１つ１つ取り出してtaskの中のtextを表示している */}
            {taskList.map((task, index) => (
              // map関数で1つ1つ取り出した要素に対してKeyをわりあてる
              <div key={task.id}>
                {/* taskListから取り出したtaskという内容をPropsの引数でTaskに渡す　task情報をtaskコンポーネントに送る */}
                {/* Taskにpropsで渡すとはどういう意味？　親のTasksからTaskへProps（Stateを含めた状態）を渡す  */}
                <Task
                  // index（taskListの配列の番号を取ってきている）をTaskにpropsで渡す
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList} />
              </div>
            ))}
            {/* provided.placeholderをしないと警告がでる　Droppableを縮小や拡張したり柔軟性を持たせる役割のplaceholder */}
            {provided.placeholder}

          </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
// exportは下記にあるのでconst Tasksの前に追加しなくて問題ない
export default Tasks