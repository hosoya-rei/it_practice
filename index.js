const quiz = [
  {
    question: "ゲーム史上最も売れたゲーム機はどれでしょう？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    corect: "ニンテンドーDS"
  },
  {
    question: "ファイナルファンタジーIVの主人公の名前は？",
    answers: [
      "フリオニール",
      "クラウド",
      "ティーダ",
      "セシル",
    ],
    corect: ""
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ３",
      "スーパードンキーコング",
      "星のカービー",
    ],
    corect: "MOTHER2"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;



//クイズの問題文、選択肢を定義
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const sutupQuestion = () => {
  document.getElementById("js-puestion").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
sutupQuestion();

//クリックしたら、正解か不正解のアラートを出す
const clickHandler = (e) => {
  if(quiz[quizIndex].corect === e.target.textContent){
    window.alert("正解！");
  } else{
    window.alert("不正解！");
  }
//アラートが出たら、quizIndexの数値を１上げる
  quizIndex++;
  
  if(quizIndex < quizLength) {
    //問題数があればこちらを実行
    sutupQuestion();
  }else {
    //問題数がなければこちらを実行
    window.alert("終了！！");
  }
};


//何個めかのボタンをクリックしたら、clickHandlerを動かす
//を繰り返す
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e)
  });
  handlerIndex++;
}
