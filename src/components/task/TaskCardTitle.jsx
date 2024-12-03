import React, { useState } from 'react';


export const TaskCardTitle = () => {
  // useStateでisClick(クリックしたかどうかを知る状態変数)がtrueかfalse(引数)かを管理するためのフックになります。引数には初期値はfalseを渡している
  //setIsClickはisClickを変更するための状態関数
const [isClick,setIsClick] = useState(false);
//状態変数を定義: inputCardTitle(打ち込んだ状態変数) それを変更するためのsetInputCardTitle　useStateを準備して最初の中身はToday
// 状態変数　inputCardTitleを変更することでTaskCardのタイトルが変わる
const[inputCardTitle, setInputCardTitle]= useState("Today");
//handle関数　divタグをクリックしたらinputタグに変更＝isClickをtrueに
  const handleClick = ()=> {
    setIsClick(true);
    console.log(isClick);
  };
// 文字が入力されるたびに呼ぼだす 引数にeを受け取る
  const handleChange =(e)=> {
    console.log(inputCardTitle);
  setInputCardTitle(e.target.value);
};

const handleSubmit = (e)=> {
  // formがenterを押したら更新されるものを防ぐ　Defaultの操作を制御する＝ページが更新されないので状態を保てる
  e.preventDefault ();
  setIsClick(false);
};

const handleBlur = () => {
  setIsClick(false);
}
  return (
      <div onClick={handleClick} className='taskCardTitleInputArea'>
        {/* 「参考演算子」isClickが？であれば？以降を実行する(チェックをする場所)　isClickがfalseの場合は：の後を実行（h3タグTodayを表示させる）  */}
        {/*onChangeはinputの要素（入力のフォームに文字の要素を打ち込むために実行されるプロパティ）onChangeがあることでhandleChange関数が 文字が入力されるたびに実行される */}
        {/* inputタグにonChange 文字が入力されるたびにhandle関数何度も呼ばれる　呼ばれるたびにsetInputCardTitleの状態関数によってinputCardTitleの中身を更新している */}
        {isClick ? (
          // onSubmitはenterを押したら呼ばれる＝handleSubmitプロパティが実行される
          <form onSubmit={handleSubmit}>
            {/* onBlurはinputタグから外れてマウスをクリックした時に呼び出されるプロパティ */}
            <input
            className='taskCardTitleInput'
            // autoFocasでDiv要素をクリックすると勝手にフォーカスされすぐ変更できる
            autoFocus 
              type="text" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={inputCardTitle}
              // inputの中へ入れられる文字数10文字
              maxLength="10"
              />
          </form>
        ): (
        <h3>{inputCardTitle}</h3>
        )}
     
      </div>
  );
};

export default TaskCardTitle
