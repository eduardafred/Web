const frm = document.querySelector("form");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

    let vetor = [10,20,30,40,50];

    let i = 0;

    let result = 0;

    for(i = 0; i < vetor.length; i++){
        result += vetor[i];
    }

    let media = result / 5;

    h3.innerText = `A média dos alunos é de ${media.toFixed(2)}`;

    if(media >= 70){
        h2.innerText = `Aprovados`;
        h2.style.color = "blue";
    }else if(media <= 70){
        h2.innerText = `Reprovados`;
        h2.style.color = "red";
    }