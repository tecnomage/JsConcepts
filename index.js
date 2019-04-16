const pegaListagem = () => {
    let listagem;
    fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(res => listagem = res.json())
  .then(json => { return json})
  return listagem;
}

let listagem;
const $root = document.querySelector("#root");

listagem = pegaListagem();
console.log(listagem)
const $wrap = document.createElement("div");
//const teste = 
$wrap.innerHTML = '<p> teste <p>';
//console.log(teste);
$root.insertBefore($wrap, null);

console.log("teste222");




