//getElementedByIdを使う
// const title1 = document.getElementById("title");
// console.log("title1");
// //<h1 id="title">Hello World!!</h1>の取得

// //querySelectorを使う
// const title2 = document.querySelector("#title");
// console.log("title2");
//<h1 id="title">Hello World!!</h1>の取得

//Class名でElementを取得
//getElementsByClassNameを使う
// const containers = document.getElementsByClassName("container");
// console.log(containers);

//querySelectorによるElementの取得
//querySelectorを使う

//追加ボタンを押した時に実行される関数
const onClickAdd = () => {
  //テキストボックスのElementの取得
  const textEl = document.getElementById("add-text");

  //テキストボックスの値を取得
  const text = textEl.value;

  //テキストボックスを初期化
  textEl.value = "";

  //liタグの生成
  const li = document.createElement("li");

  //divタグの取得
  const div = document.createElement("div");

  //pタグを生成（テキストボックスの文字を設定）
  const p = document.createElement("p");
  p.textContent = text;

  //buttonタグを生成（ラベルは「解除」）
  const button = document.createElement("button");
  button.textContent = "削除";

  //ボタンを押したときに行を削除する処理
  button.addEventListener =
    ("click",
    () => {
      //削除対象の行(li)を取得
      //closestは親要素に一致する文字列を探すメソッド
      const deleteTarget = button.closest("li");

      //ulタグ配下から上記で特定した行を削除
      document.getElementById("memo-list").removeChild(deleteTarget);
    });

  //divタグ配下にpタグとbuttonタグを設定
  div.appendChild(p);
  div.appendChild(button);

  //liタグ配下に上記のdivタグを設定
  li.appendChild(div);

  //メモ一覧リストに上記のliタグを設定
  document.getElementById("memo-list").appendChild(li);
};

//[追加]ボタンを押したときに、onClickAdd関数が実行されるように設定
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
