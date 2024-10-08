//criar referências aos elementos que quero manipular

const frm = document.querySelector("form");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

frm.addEventListener("submit", (e)=> {
    e.preventDefault(); // evita o envio do formulário
    
    const nome = frm.idNome.value;//pega o valor que está no elemento de idNome, dentro do Form do Html
    const n1 = Number(frm.n1.value);
    const n2 = Number(frm.n2.value);
    const n3 = Number(frm.n3.value);
    const n4 = Number(frm.n4.value);

    let media = (n1 + n2 + n3 + n4) / 4
    h3.innerText = `A média de ${nome}`;

    if(media >= 7.0){
        h2.innerText = `Aprovado ${media.toFixed(2)}`;
        h2.style.color = "blue";
    }else if (media <= 6.9 && media >= 4.0){
        h2.innerText = `Recuperação ${media.toFixed(2)}`;
        h2.style.color = "green";
    }else if(media <= 3.9){
        h2.innerText = `Reprovado ${media.toFixed(2)}`;
        h2.style.color = "red";
    }
}); 