let vetor = [1,1,1,1,1,1,1,1,1,1];

let i = 0;

let result = 0;

for(i = 0; i < vetor.length; i++){
    result += vetor[i];
}

document.write("A soma dos elementos do vetor é de: " + result);