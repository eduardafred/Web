//criar referências aos elementos que quero manipular

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=> {
    e.preventDefault(); // evita o envio do formulário
    /*Pega 4 valores, faz a soma e a média
    const n1 = Number(frm.valor1.value);
    const n2 = Number(frm.valor2.value);
    const n3 = Number(frm.valor3.value);
    const n4 = Number(frm.valor4.value);

    let soma = n1 + n2 + n3 + n4;
    let media = soma / 4;*/

    /* entrada = nome do filme, tempo em minutos, saída = o *nome do filme* tem x horas e x minutos

    const nomeFilme = frm.nomeFilme.value;
    const minutosTotais = Number(frm.minutos.value);
    const min = minutosTotais % 60;
    const hor = (minutosTotais - min) / 60;


    resp.innerText = `O filme ${nomeFilme}, tem duração de: ${hor} horas e ${min} minutos`;*/
});