const p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve('yay')
  reject('nOOoOoOoOoOo')
})

p
.then((res) => { console.log(`${res} da ação 1`); return res; })
//diversos catchs em uma promisse
//.catch(function erro1 (err) { console.error('Primeiro catch'); return 'Error'; })
.then((res) => { console.log(`${res} da ação 2`); return res; })
.then((res) => { console.log(`${res} da ação 3`); return res; })
.catch((rerr) => { console.error(rerr)})