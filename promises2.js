const p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("yay");
  reject("No");
});

p.catch(err => {
  console.log("Primeiro catch");
  return "Error";
})

// p.catch(e => {
//   console.log(e);
// });

// Estamos definindo as chamadas dos then's também diretamente em p
p.then(function acao1(res) {
  console.log(`${res} da ação 1`);
  return res;
})
  .then(function acao2(res) {
    console.log(`${res} da ação 2`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} da ação 3`);
    return res;
  })
  //se retirar esse catch dá erro
  .catch(saida => {
    console.log(saida);
  });
