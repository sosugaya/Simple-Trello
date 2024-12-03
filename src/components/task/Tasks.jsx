import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// taskListを受け取る setTaskListも受け取る
const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      <DragDropContext>
        {/* DroppableタグにはdroppableIDが必要　Droppableタグの中は関数でなければならない　 */}
        <Droppable droppableId='droppable' >
          {/* innerRefはドラッグしている以外のカード要素の制御をしている　制御しないと正常なドラッグドロップができない */}
          {(provided) => (<div {...provided.droppableProps} ref={provided.innerRef}>
            {/* taskListの入っているものを１つ１つ取り出すためにmap関数を使用　
       <div>{task.text}</div>だとmap関数の中にtaskという引数を仮において、それを１つ１つ取り出してtaskの中のtextを表示している */}
            {taskList.map((task) => (
              // map関数で1つ1つ取り出した要素に対してKeyをわりあてる
              <div key={task.id}>
                {/* taskListから取り出したtaskという内容をPropsの引数でTaskに渡す　task情報をtaskコンポーネントに送る */}
                {/* Taskにpropsで渡すとはどういう意味？　親のTasksからTaskへProps（Stateを含めた状態）を渡す  */}
                <Task
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