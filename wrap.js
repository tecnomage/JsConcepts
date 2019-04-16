const $root = document.querySelector("#root");

const family = ["lula", "jorge", "tiao"];
const newFamily = ["maria", "marielle", "antonio", ...family];


const createList = (...itens) => {
  const $wrap = document.createElement("ul");
  const content = itens.map(item => `<li>${item}</li>`);

  $wrap.innerHTML = content.join('');
  return $wrap;
};

const listagemFamilia = createList(...newFamily);

$root.insertBefore(listagemFamilia, null);
