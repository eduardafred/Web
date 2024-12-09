const cidadesPR = [
    "Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná",
    "Alto Paraíso", "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã",
    "Ampére", "Anahy", "Andirá", "Antonina", "Antônio Olinto",
    "Apucarana", "Arapongas", "Arapoti", "Arapuã", "Araruna",
    "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", "Atalaia",
    "Balsa Nova", "Bandeirantes", "Barbosa Ferraz", "Barra do Jacaré", "Barracão",
    "Bela Vista da Caroba", "Bela Vista do Paraíso", "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu",
    "Boa Ventura de São Roque", "Boa Vista da Aparecida", "Bocaiúva do Sul", "Bom Jesus do Sul", "Bom Sucesso",
    "Bom Sucesso do Sul", "Borrazópolis", "Braganey", "Brasilândia do Sul", "Cafelândia",
    "Caiuá", "Cambarà", "Cambé", "Cambará", "Campina da Lagoa",
    "Campina do Sul", "Campo Bonito", "Campo Largo", "Campo Magro", "Campo Mourão",
    "Candido Motta", "Cândido Motta", "Cantagalo", "Capanema", "Capitão Leônidas Marques",
    "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas",
    "Centenário do Sul", "Cerro Azul", "Chopinzinho", "Cianorte", "Clevelândia",
    "Colombo", "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda",
    "Corbélia", "Cornélio Procópio", "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul",
    "Curitiba", "Curiúva", "Diamante do Sul", "Dois Vizinhos", "Doutor Camargo",
    "Doutor Ulysses", "Engenheiro Beltrão", "Entre Rios do Oeste", "Esperança Nova", "Espigão Alto do Iguaçu",
    "Farol", "Faxinal", "Fazenda Rio Grande", "Figueira", "Flor da Serra do Sul",
    "Flórida", "Florestópolis", "Formosa do Oeste", "Foz do Iguaçu", "Francisco Beltrão",
    "General Carneiro", "Godoy Moreira", "Goioerê", "Grandes Rios", "Guaira",
    "Guaraci", "Guaraniaçu", "Guarapuava", "Guaratuba", "Icaraíma",
    "Ibaté", "Ibiporã", "Iguatu", "Imbaú", "Imbituva", "Inácio Martins",
    "Inácio Martins", "Ipiranga", "Irati", "Iretama", "Itaguajé", "Itaipulândia",
    "Itambaracá", "Itapejara d'Oeste", "Itaperuçu", "Itaúba", "Ivaí", "Ivaiporã",
    "Jaboti", "Jacarezinho", "Jaguapitã", "Jaguariaíva", "Jandaia do Sul", "Janiópolis",
    "Jardim Alegre", "Jardim Olinda", "Jataizinho", "Jesuítas", "Joaquim Távora",
    "Jundiaí do Sul", "Juranda", "Jussara", "Kaloré", "Lapa", "Laranjal", "Laranjeiras do Sul",
    "Lajeado", "Laranjeiras do Sul", "Londrina", "Lucas do Rio Verde", "Mallet", "Maringá", "Matelândia",
    "Mato Rico", "Medianeira", "Membro", "Missal", "Morretes", "Nova Aliança do Ivaí", "Nova América da Colina", 
    "Nova Aurora", "Nova Cantu", "Nova Esperança", "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia",
    "Nova Prata do Iguaçu", "Novo Itacolomi", "Novo São José", "Ourizona", "Palmeira", "Palotina", "Paraíso do Norte",
    "Paranaguá", "Paranavaí", "Pato Branco", "Paula Freitas", "Paulo Frontin", "Peabiru", "Perobal", "Pinhais",
    "Pinhalão", "Ponta Grossa", "Pontal do Paraná", "Porecatu", "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", 
    "Prudentópolis", "Quatro Barras", "Quatro Pontes", "Reserva", "Restinga Seca", "Rio Azul", "Rio Negro", "Rolândia",
    "Sabáudia", "Salto do Itararé", "Santa Amélia", "Santa Felicidade", "Santa Maria do Oeste", "Santa Tereza do Oeste",
    "Santo Antônio do Sudoeste", "São João do Ivaí", "São João do Triunfo", "São José dos Pinhais", "São Pedro do Iguaçu",
    "São Sebastião da Amoreira", "Sarandi", "Sengés", "Tamarana", "Tapira", "Teixeira Soares", "Terra Rica", "Terra Boa",
    "Toledo", "Tomazina", "Tunas do Paraná", "União da Vitória", "Umuarama", "Vera Cruz do Oeste", "Verê", "Virmond"
];

// Limpa os campos do formulário
function limpa_formulário() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
    document.getElementById('cep').value = "";
}

// Limpa os resultados
function limparResultados() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "";
}

// Exibe os resultados abaixo do formulário
function exibirResultado(resultado) {
    const resultadosDiv = document.getElementById('resultados');
    const resultadoDiv = document.createElement('div');
    resultadoDiv.innerHTML = `
        <p><strong>Logradouro:</strong> ${resultado.logradouro || "Não informado"}</p>
        <p><strong>Bairro:</strong> ${resultado.bairro || "Não informado"}</p>
        <p><strong>Cidade:</strong> ${resultado.localidade || "Não informado"}</p>
        <p><strong>UF:</strong> ${resultado.uf || "Não informado"}</p>
        <p><strong>CEP:</strong> ${resultado.cep || "Não informado"}</p>
        <hr>
    `;
    resultadosDiv.appendChild(resultadoDiv);
}

// Pesquisa ruas no Paraná
function pesquisaRuaPR() {
    const rua = document.getElementById('rua').value.trim();
    if (!rua) {
        alert("Por favor, insira o nome da rua.");
        return;
    }

    limparResultados();

    // Codifica o nome da rua para uso na URL
    const ruaCodificada = encodeURIComponent(rua);
    let cidadesProcessadas = 0;

    cidadesPR.forEach(cidade => {
        const script = document.createElement('script');
        script.src = `https://viacep.com.br/ws/PR/${cidade}/${ruaCodificada}/json/?callback=meu_callbackRuaPR`;
        script.onerror = () => {
            cidadesProcessadas++;
            verificarFimDeProcessamento(cidadesProcessadas);
        };
        document.body.appendChild(script);
    });
}

// Callback para a pesquisa por rua no Paraná
function meu_callbackRuaPR(conteudo) {
    if (conteudo.length > 0) {
        conteudo.forEach(resultado => {
            // Ignora resultados genéricos (sem logradouro específico)
            if (resultado.logradouro) {
                exibirResultado(resultado);
            }
        });
    }
}

// Verifica se todas as cidades foram processadas
function verificarFimDeProcessamento(cidadesProcessadas) {
    if (cidadesProcessadas === cidadesPR.length) {
        const resultadosDiv = document.getElementById('resultados');
        if (resultadosDiv.innerHTML === "") {
            resultadosDiv.innerHTML = "<p>Nenhuma rua específica encontrada no Paraná.</p>";
        }
    }
}

// Função para pesquisa de CEP
function pesquisacep(valor) {

    if(!valor){
        alert("Por favor, insira o número do CEP.");
        return;
    }else{
        const cep = valor.replace(/\D/g, '');
        if (cep) {
            const validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                limpa_formulário();
                const script = document.createElement('script');
                script.src = `https://viacep.com.br/ws/${cep}/json/?callback=meu_callbackCEP`;
                document.body.appendChild(script);
            } else {
                limpa_formulário();
                alert("Formato de CEP inválido.");
            }
        } else {
            limpa_formulário();
        }
    }
}

// Callback para a pesquisa por CEP
function meu_callbackCEP(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
        document.getElementById('ibge').value = conteudo.ibge;
    } else {
        limpa_formulário();
        alert("CEP não encontrado.");
    }
}
