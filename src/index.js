/* Acá va tu código */
const btnMjse  = document.getElementById("guardar_msje");
const container = document.getElementById('root');
//const ulContainer = document.getElementById('ul_root');

function show(){
  let mensaje = document.getElementById("mensaje").value;
  let result = '';
  //console.log(mensaje);
  for(var i = 0; i < mensaje.length; i++){
    console.log(mensaje[i]);
    result += mensaje[i];
    //ulContainer.innerHTML += `<li> ${mensaje[i]} </li>`
    const ulText = document.createElement('ul');
    const contentText = document.createElement('li');
    let text = document.createTextNode(mensaje[i]);
    contentText.appendChild(text);
    ulText.appendChild(contentText);
    container.appendChild(ulText);
  }
  console.log(result);
  //container.innerHTML += `<p> ${result} </p>`;
  const pText = document.createElement('p');
  let contentText = document.createTextNode(result);
  container.appendChild(pText);
  pText.appendChild(contentText);
}


/*btnMjse.addEventListener('click', () => {
  let mensaje = document.getElementById("mensaje").value;
  //console.log(mensaje);
  let result = '';
  for(var i = 0; i < mensaje.length; i++){
    console.log(mensaje[i]);
    result += mensaje[i];
    //ulContainer.innerHTML += `<li> ${mensaje[i]} </li>`
    const ulText = document.createElement('ul');
    const contentText = document.createElement('li');
    let text = document.createTextNode(mensaje[i]);
    container.appendChild(ulText);
    contentText.appendChild(text);
    ulText.appendChild(contentText);
  }
  console.log(result);
  //container.innerHTML += `<p> ${result} </p>`
  const pText = document.createElement('p');
  let contentText = document.createTextNode(result);
  container.appendChild(pText);
  pText.appendChild(contentText);
})*/