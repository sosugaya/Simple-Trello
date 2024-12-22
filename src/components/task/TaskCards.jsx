import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, startIndex, endIndex) => {
  // タスクを並び替える taskList（1,2,3のカードのこと）にsplice関数を使いindexを追加したり削除できるメソッド
  // splice関数はresult.source.indexからスタートし、1個消す 削除した要素はremoveという関数に入れる
  const remove = taskCardsList.splice(startIndex, 1); //[2,3]
  // splice関数はresult.destination.indexからスタートし、0個消す、removeの0番目を追加
  taskCardsList.splice(endIndex, 0, remove[0]); //[2,1,3]
};

const TaskCards = () => {
  // 今回はtaskCardsListを増やすので、これを1つ1つmap関数で展開してその分だけTaskCard を表示させる実装を行う
  // タスクカードのリストを管理するために useState を使用し
  // TaskCardDeleteButtonに渡すのはtaskCardsListが必要
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      droppableId: "item0"

    },
  ]);
  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);

    setTaskCardsList(taskCardsList);

  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* DroppableはIDが必要
      水平にドラックドロップしたいのでdirection='horizontal'をつけた */}
      <Droppable droppableId='droppable' direction='horizontal'>
        {/* Droppableの中は関数が必要なので {()}でくくる providedという変数を宣言 
        この中がドラッグできるエリアになる*/}

        {(provided) => (
          // providedはdivタグの中で指定
          <div className='taskCardsArea'
            // provided.draggablePropsの後を全部とってこい
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {/* taskCardsListにある分だけMap関数1つ1つ取り出されるので表示される 
     taskCardsList の各要素を基に TaskCard コンポーネントを生成　key 属性：Reactがリストの要素を効率的に識別するための一意の値です。*/}
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                // indexをTaskCardに渡す
                index={index}
                taskCardsList={taskCardsList}
                // setTaskCardsListは削除するための状態関数として必要
                setTaskCardsList={setTaskCardsList}
                // TaskCardにIDが入っているので必要
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}

            {/*AddTaskCardButtonで taskCardsListを増やしていくためtaskCardsListとsetTaskCardsListを引数として渡す TaskCards.jsxが親でAddTaskCardButton.jsxが子
      TaskCards は以下の2つを props として AddTaskCardButton に提供　taskCardsList（追加されたタスクカードを表示するために管理される状態）setTaskCardsList（子コンポーネントで taskCardsList に新しいタスクを追加したり、削除したりする際に使用）
      コード内では、AddTaskCardButton コンポーネントに props（taskCardsList は現在のタスクカードリスト＆setTaskCardsList はタスクカードリストを更新する関数） を渡しています*/}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList} />


          </div>

        )}

      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards
