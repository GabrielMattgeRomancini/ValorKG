let valorkg = document.querySelector('#valorkg')
let valorreal = document.querySelector('#valorreal')
let botao = document.querySelector('#botao')
let valor = document.querySelector('#valor')
function soma(){
    let a = Number(valorkg.value);
    let b = Number(valorreal.value);
    valor.innerHTML = a * b;
}

botao.onclick = function(){
    soma();
}