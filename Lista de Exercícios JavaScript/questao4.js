let vetor = [1,2,3,4,5,6,7,8,9,0]

let i = 0, j = 2;

for(i = 0; i < vetor.length; i++){
    let num = vetor[i];
    if(num > 0){
        if(num === 1 || num === 2){
            document.write(num + " ");
        }else{
            let primo = true;
            for (j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    primo = false;
                }
            }
    
            if (primo) {
                document.write(num + " ");
            }
        }
    }
}
