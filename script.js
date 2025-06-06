// Configuração do Google Sheets
const SHEET_ID = '1L6f7oF9HdANPJXDvwQq1q74hfNuW7ep6D6JTiWAAlkI'; // Você precisará substituir pelo ID do seu Google Sheet
const SHEET_NAME = 'Presentes';

// Lista de presentes (você pode adicionar mais itens aqui)
const presentes = [
    {
        id: 1,
        nome: 'Jogo de Panelas',
        descricao: 'Conjunto de panelas antiaderentes',
        imagem: 'imagens/PanelaDePressao.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 2,
        nome: 'Saleiro',
        descricao: 'Saleiro',
        imagem: 'imagens/Saleiro.jpg',
        reservado: false,
        reservadoPor: ''
    },
    // Adicione mais presentes aqui
];

let presenteSelecionado = null;

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
                : `<button onclick="selecionarPresente(${presente.id})">Reservar</button>`
            }
        `;
        
        container.appendChild(card);
    });
}

// Função para selecionar um presente
function selecionarPresente(id) {
    presenteSelecionado = presentes.find(p => p.id === id);
    document.getElementById('presenteSelecionado').textContent = 
        `Você está reservando: ${presenteSelecionado.nome}`;
    document.getElementById('modal').style.display = 'block';
}

// Função para reservar o presente
function reservarPresente() {
    const nome = document.getElementById('nomePessoa').value.trim();
    
    if (!nome) {
        alert('Por favor, digite seu nome!');
        return;
    }

    if (presenteSelecionado) {
        presenteSelecionado.reservado = true;
        presenteSelecionado.reservadoPor = nome;
        
        // Aqui você pode adicionar a lógica para salvar no Google Sheets
        salvarNoGoogleSheets(presenteSelecionado);
        
        // Fecha o modal e recarrega os presentes
        document.getElementById('modal').style.display = 'none';
        document.getElementById('nomePessoa').value = '';
        carregarPresentes();
    }
}

// Função para salvar no Google Sheets
async function salvarNoGoogleSheets(presente) {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:D:append?valueInputOption=USER_ENTERED`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer SEU_TOKEN_AQUI' // Você precisará configurar a autenticação
            },
            body: JSON.stringify({
                values: [[
                    presente.id,
                    presente.nome,
                    presente.reservadoPor,
                    new Date().toISOString()
                ]]
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar no Google Sheets');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao salvar a reserva. Por favor, tente novamente.');
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

// Carregar os presentes quando a página carregar
document.addEventListener('DOMContentLoaded', carregarPresentes); 