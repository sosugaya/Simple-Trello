import React, { useState } from 'react';
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'
import { Draggable } from 'react-beautiful-dnd';
// こちらでTaskCards からaskCardsList, setTaskCardsList,taskCardを Propsで受け取る
const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index }) => {
  // useSta teで定義 
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    // Draggableもidを指定させる必要がある
    <Draggable draggableId={taskCard.id} index={index}>
      {/* Draggableの中身を関数である必要がある 
      providedという変数を自分で宣言する　<div>の中身を全部もってくる＝この要素がドラッグできる要素になる*/}
      {(provided) => (
        // {...provided.dragHandleProps}がこの<div>要素にかかるとエラーが起きる
        <div className="taskCard" ref={provided.innerRef}
          // ref={provided.innerRef}や  {...provided.draggableProps}をつけないと実際にドラッグドロップできない
          {...provided.draggableProps}
        // 実際につかんでドラッグする事ができることを指定
        >
          <div
            className='taskCardTitlAndTaskCardDeleteButtonArea'
            //    <TaskCardTitle />とTaskCardDeleteButtonの箱の中に {...provided.dragHandleProps}をつける＝タスクだけが変更できる状態になる
            {...provided.dragHandleProps}>
            <TaskCardTitle />
            {/*こちらの関数コンポーネントにPropsとしてIDを渡す 
        TaskCardsList, setTaskCardsList,taskCardをTaskCardDeleteButtonにPropsで受け渡す  */}
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}

            />

          </div>
          {/*   <TaskAddInput /><Tasks />にpropsを渡したい Q:propsで渡すとはどういうことか？*/}
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          {/* Tasksに表示したいのでTasksのpropsに変数inputTextやtaskListをいれていく */}
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList} />
        </div>

      )}

    </Draggable>
  );
}

export default TaskCard
