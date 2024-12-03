import React, { useState } from 'react';
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'

const TaskCard = () => {
  // useStateで定義 
const [inputText,setInputText]=useState("");
const [taskList, setTaskList]=useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
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
        setTaskList={setTaskList}/>
    </div>
  );
}

export default TaskCard
