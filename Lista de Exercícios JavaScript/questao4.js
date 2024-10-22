let vetor = [1,2,3,4,5,6,7,8,9,0]

let i = 2;
if(vetor[i] === 1 || vetor[i] === 2){
    document.write(vetor[i]);
}

for(i = 2; i < vetor.length; i++){
    if(vetor[i] % i !== 0){
        console.log(vetor[i]);
    }
}
