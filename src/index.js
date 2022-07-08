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
// const container = document.querySelector(".container");
// console.log(container);

//DOMの作成
//divの作成
// const divEl = document.createElement("div");
// console.log(divEl);

//HTMLUnkownElementの生成
//存在しないタグ名を指定
// const nushidaEl = document.createElement("nushida");
// console.log(nushidaEl);

//DOMの追加
//div配下にpタグを追加
const divEl = document.createElement("div");
const pEl = document.createElement("p");
divEl.appendChild(pEl);
console.log(divEl);
