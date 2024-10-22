const frm = document.querySelector("form");
const h2 = document.querySelector("h2");

frm.addEventListener("submit", (e)=> {
    e.preventDefault(); // evita o envio do formulário

    const numero = Number(frm.numero.value);

    let i = numero;

    for(i = numero; i >= 10; i--){
       document.write(i + " ");
    }
}); 