const pegaListagem = () => {
  var listagem;
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  //.then(json => {  json})
  //console.log(listagem)
  return listagem;
};

let teste
const $root = document.querySelector("#root");

teste = pegaListagem();
console.log(teste)
const $wrap = document.createElement("div");
$wrap.innerHTML = "<h2> teste</h2>";
$root.insertBefore($wrap, null);

console.log("teste222");
