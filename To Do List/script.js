const atividadeInput = document.getElementById('atividade');
const prioridadeSelect = document.getElementById('prioridade');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaAtividades = document.getElementById('listaAtividades');

// Função para alterar a cor do texto do campo de atividade conforme a prioridade
function atualizarCorPrioridade() {
    const prioridade = prioridadeSelect.value;
    if (prioridade === 'alta') {
        atividadeInput.style.color = 'red';
    } else if (prioridade === 'media') {
        atividadeInput.style.color = 'yellow';
    } else if (prioridade === 'baixa') {
        atividadeInput.style.color = 'green';
    }
}

// Atualizar a cor sempre que a prioridade for alterada
prioridadeSelect.addEventListener('change', atualizarCorPrioridade);

// Função para adicionar a atividade
adicionarBtn.addEventListener('click', function() {
    const atividadeTexto = atividadeInput.value.trim();
    const prioridade = prioridadeSelect.value;

    //se campo vazio
    if (atividadeTexto === '') {
        alert('Por favor, insira uma atividade!');
        return;
    }

    const divAtividade = document.createElement('div');
    divAtividade.classList.add('atividade');

    // Definir a cor de fundo da atividade com base na prioridade
    if (prioridade === 'alta') {
        divAtividade.style.backgroundColor = '#ffcccc';
    } else if (prioridade === 'media') {
        divAtividade.style.backgroundColor = '#ffffcc';
    } else if (prioridade === 'baixa') {
        divAtividade.style.backgroundColor = '#ccffcc';
    }

    //define o conteúdo do texto de div atividade e coloca a primeira letra do status em maiúscula (letra no pos 0 para upperCase)
    divAtividade.textContent = `${atividadeTexto} - Prioridade: ${prioridade.charAt(0).toUpperCase() + prioridade.slice(1)}`; 
    
    //adiciona ao elemento pai listaAtividades o elemento filho, divAtividade
    listaAtividades.appendChild(divAtividade);

    // Limpar o campo de atividade após adicionar
    atividadeInput.value = '';
    atualizarCorPrioridade(); // Resetar a cor do texto
});

// Inicializar a cor do texto no início
atualizarCorPrioridade();

// Função para carregar as atividades do localStorage
function carregarAtividades() {
    const atividades = JSON.parse(localStorage.getItem('atividades')) || []; /*localStorage.getItem('atividades') resgata os dados que estavam no item 
    atividades, a o JSON.parse converte esses dados armazenados geralmente em Strings para um array ou objeto no formato JSON, e se não houver dados em localstorage atividades
    é definida como um array vazio (|| [])*/
    const listaAtividades = document.getElementById('listaAtividades');
    listaAtividades.innerHTML = '';  // Limpa a lista

    atividades.forEach((atividade, index) => {
        const divAtividade = document.createElement('div');
        divAtividade.classList.add('atividade');

        // Definir a cor de fundo com base na prioridade
        let corDeFundo;
        if (atividade.prioridade === 'alta') {
            corDeFundo = '#ffcccc';
        } else if (atividade.prioridade === 'media') {
            corDeFundo = '#ffffcc';
        } else {
            corDeFundo = '#ccffcc';
        }

        divAtividade.style.backgroundColor = corDeFundo;

        divAtividade.innerHTML = `
            <span style="color: ${atividade.prioridade === 'alta' ? 'red' : atividade.prioridade === 'media' ? 'orange' : 'green'};">
                ${atividade.texto} ${atividade.concluida ? '(Concluída)' : ''}
            </span>
            <div>
                <button class="btn btn-warning btn-sm" onclick="editarAtividade(${index})"><i class="fas fa-edit"></i> Editar</button>
                <button class="btn btn-danger btn-sm" onclick="cancelarAtividade(${index})"><i class="fas fa-times"></i> Cancelar</button>
                <button class="btn btn-success btn-sm" onclick="concluirAtividade(${index})"><i class="fas fa-check"></i> Concluir</button>
            </div>
        `;

        listaAtividades.appendChild(divAtividade); // adiciona ao à lista um novo elemento
    });
}

// Função para adicionar uma atividade
function adicionarAtividade() {
    const atividadeInput = document.getElementById('atividadeInput');
    const prioridadeSelect = document.getElementById('prioridadeSelect');
    const atividadeTexto = atividadeInput.value.trim();
    const prioridade = prioridadeSelect.value;

    if (atividadeTexto === '') {
        alert('Por favor, insira uma atividade!');
        return;
    }

    const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    atividades.push({ texto: atividadeTexto, prioridade: prioridade, concluida: false });
    localStorage.setItem('atividades', JSON.stringify(atividades));

    atividadeInput.value = '';  // Limpar campo após adicionar
    carregarAtividades();  // Atualizar a lista
}

// Função para editar uma atividade
function editarAtividade(index) {
    const atividades = JSON.parse(localStorage.getItem('atividades'));
    const novoTexto = prompt('Editar atividade:', atividades[index].texto);
    if (novoTexto) {
        atividades[index].texto = novoTexto;
        localStorage.setItem('atividades', JSON.stringify(atividades));
        carregarAtividades();  // Atualizar a lista
    }
}

// Função para concluir uma atividade
function concluirAtividade(index) {
    const atividades = JSON.parse(localStorage.getItem('atividades'));
    atividades[index].concluida = true;
    localStorage.setItem('atividades', JSON.stringify(atividades));
    carregarAtividades();  // Atualizar a lista
}

// Função para cancelar (excluir) uma atividade
function cancelarAtividade(index) {
    const atividades = JSON.parse(localStorage.getItem('atividades'));
    atividades.splice(index, 1);  // Remove a atividade do array
    localStorage.setItem('atividades', JSON.stringify(atividades));
    carregarAtividades();  // Atualizar a lista
}

function pesquisarAtividades() {
    const termoPesquisa = document.getElementById('pesquisaInput').value.trim().toLowerCase();// o trim remove qualquer espaços extras no começo ou final do texto
    const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    const listaAtividades = document.getElementById('listaAtividades');
    listaAtividades.innerHTML = ''; // Limpa a lista

    // Filtrar as atividades que correspondem ao termo de pesquisa
    const atividadesFiltradas = atividades.filter(atividade =>
        atividade.texto.toLowerCase().includes(termoPesquisa) //includes == inclui. Se o termoPesquisa está incluso no texto de alguma atividade, o retorno será true
    );

    // Verificar se há atividades correspondentes
    if (atividadesFiltradas.length === 0) {
        listaAtividades.innerHTML = '<p>Nenhuma atividade encontrada.</p>';
        return;
    }

    // Renderizar apenas as atividades filtradas
    atividadesFiltradas.forEach((atividade, index) => {
        const divAtividade = document.createElement('div');
        divAtividade.classList.add('atividade');

        // Definir a cor de fundo com base na prioridade
        let corDeFundo;
        if (atividade.prioridade === 'alta') {
            corDeFundo = '#ffcccc';
        } else if (atividade.prioridade === 'media') {
            corDeFundo = '#ffffcc';
        } else {
            corDeFundo = '#ccffcc';
        }
        divAtividade.style.backgroundColor = corDeFundo;

        // Determinar o status da atividade
        const status = atividade.concluida ? 'Concluída' : 'Pendente'; //condicional, caso atividade concluida == true, recebe o status de Concluída

        // Renderizar a atividade com o status
        divAtividade.innerHTML = `
            <span>
                <strong>${atividade.texto}</strong> 
                - Prioridade: <em>${atividade.prioridade}</em> 
                - Status: <em>${status}</em>
            </span>
        `;
        listaAtividades.appendChild(divAtividade);
    });
}


document.getElementById('pesquisaInput').addEventListener('input', pesquisarAtividades);


// Carregar atividades ao iniciar a página
window.onload = carregarAtividades;