const p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("yay");
  reject("NOoooOoo");
});

p.catch(err => {
  console.log("Primeiro catch");
  return "Error";
})
// .catch(e => {
//   console.log("2o catch");
// });

p.catch(e => {
  console.log("3o catch");
});

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
  .catch(saida => {
    console.log("ultimo");
  });
