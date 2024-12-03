    
    function limpa_formulário() {
            //Limpa valores do formulário
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
            document.getElementById('cep').value=("");
    }

    function meu_callbackCEP(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário();
            alert("CEP não encontrado.");
        }
    }

    function meu_callbackCidade(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
            document.getElementById('cep').value=(conteudo.cep);
        } //end if.
        else {
            //Cidade não Encontrado.
            limpa_formulário();
            alert("Cidade não encontrada.");
        }
    }

    function pesquisaCidade(conteudo){
        if(cidade.lenght > 3){
            if(cidade.test(string)){
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";
                document.getElementById('cep').value="...";

                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cidade + '/json/?callback=meu_callbackCidade';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);
            }
        }else{
            limpa_formulário();
            alert("Insira uma cidade válida.")
        }

    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callbackCEP';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário();
        }
    };