// Configuração do Google Sheets
const SHEET_ID = '2pg690zy0cbyc';
const SHEET_NAME = 'Presentes';

// Lista de presentes (você pode adicionar mais itens aqui)
const presentes = [
    {
        id: 1,
        nome: 'Jogo de Panelas',
        descricao: 'Conjunto de panelas antiaderentes',
        imagem: 'imagens/panelas.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 2,
        nome: 'Mixer',
        descricao: 'Mixer 2 em 1 com processador',
        imagem: 'imagens/mixer.jpg',
        reservado: false,
        reservadoPor: ''
    }
];

let presenteSelecionado = null;

// Função para carregar os presentes do Google Sheets
async function carregarPresentesDoGoogleSheets() {
    try {
        const response = await fetch(`https://sheetdb.io/api/v1/${SHEET_ID}`);
        if (!response.ok) {
            throw new Error('Erro ao carregar dados');
        }
        
        const data = await response.json();
        console.log('Dados carregados:', data);
        
        // Atualiza o estado local dos presentes
        data.forEach(item => {
            const presente = presentes.find(p => p.id.toString() === item.ID);
            if (presente) {
                presente.reservado = true;
                presente.reservadoPor = item.ReservadoPor;
            }
        });
        
        // Atualiza a interface
        carregarPresentes();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// Função para carregar os presentes
function carregarPresentes() {
    const container = document.getElementById('presentesContainer');
    container.innerHTML = '';

    presentes.forEach(presente => {
        const card = document.createElement('div');
        card.className = `presente-card ${presente.reservado ? 'reservado' : ''}`;
        
        card.innerHTML = `
            <img src="${presente.imagem}" alt="${presente.nome}">
            <h3>${presente.nome}</h3>
            <p>${presente.descricao}</p>
            ${presente.reservado 
                ? `<p class="reservado-por">Reservado por: ${presente.reservadoPor}</p>`
                : `<button onclick="selecionarPresente(${presente.id})" ${presente.reservado ? 'disabled' : ''}>Reservar</button>`
            }
        `;
        
        // Se o presente estiver reservado, adiciona um overlay
        if (presente.reservado) {
            const overlay = document.createElement('div');
            overlay.className = 'reservado-overlay';
            overlay.innerHTML = '<span>RESERVADO</span>';
            card.appendChild(overlay);
        }
        
        container.appendChild(card);
    });
}

// Função para selecionar um presente
function selecionarPresente(id) {
    const presente = presentes.find(p => p.id === id);
    if (presente && presente.reservado) {
        alert('Este presente já foi reservado!');
        return;
    }
    
    presenteSelecionado = presente;
    document.getElementById('presenteSelecionado').textContent = 
        `Você está reservando: ${presenteSelecionado.nome}`;
    document.getElementById('modal').style.display = 'block';
}

// Função para salvar no Google Sheets
async function salvarNoGoogleSheets(presente) {
    try {
        // Verifica novamente se o presente já está reservado
        const response = await fetch(`https://sheetdb.io/api/v1/${SHEET_ID}`);
        const data = await response.json();
        const presenteJaReservado = data.some(item => 
            item.ID === presente.id.toString() && item.ReservadoPor
        );

        if (presenteJaReservado) {
            alert('Este presente já foi reservado por outra pessoa!');
            await carregarPresentesDoGoogleSheets();
            return;
        }

        const dados = {
            data: [{
                ID: presente.id,
                Presente: presente.nome,
                ReservadoPor: presente.reservadoPor,
                Data: new Date().toLocaleDateString('pt-BR')
            }]
        };

        const saveResponse = await fetch(`https://sheetdb.io/api/v1/${SHEET_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!saveResponse.ok) {
            throw new Error('Erro ao salvar no Google Sheets');
        }

        // Atualiza o estado local
        presente.reservado = true;
        presente.reservadoPor = dados.data[0].ReservadoPor;
        
        // Atualiza a interface
        carregarPresentes();
        
        alert('Presente reservado com sucesso!');
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao salvar. Por favor, tente novamente.');
    }
}

// Fechar o modal quando clicar no X
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Função para reservar o presente
window.reservarPresente = function() {
    const nome = document.getElementById('nomePessoa').value.trim();
    
    if (!nome) {
        alert('Por favor, digite seu nome!');
        return;
    }

    if (presenteSelecionado) {
        presenteSelecionado.reservadoPor = nome;
        salvarNoGoogleSheets(presenteSelecionado);
        
        // Fecha o modal e limpa o campo
        document.getElementById('modal').style.display = 'none';
        document.getElementById('nomePessoa').value = '';
    }
}

// Atualiza os presentes a cada 1 minuto
setInterval(carregarPresentesDoGoogleSheets, 60000);

// Carrega os presentes quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarPresentes();
    carregarPresentesDoGoogleSheets();
}); 
