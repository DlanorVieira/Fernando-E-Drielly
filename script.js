// Configuração do Google Sheets
const SHEET_ID = '2pg690zy0cbyc';
const SHEET_NAME = 'Presentes';

// Lista de presentes (você pode adicionar mais itens aqui)
const presentes = [

    {
        id: 1,
        nome: 'Jogo de Panelas',
        descricao: 'Conjunto com 5 peças',
        imagem: 'Imagens/JogoDePanelas.jpg',
        reservado: false,
        reservadoPor: ''

    },
    {
        id: 2,
        nome: 'Air Fryer',
        descricao: 'Air Fryer',
        imagem: 'Imagens/AirFryer.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 3,
        nome: 'Copos de vidro',
        descricao: 'Copos de vidro',
        imagem: 'Imagens/CoposDeVidro.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 4,
        nome: 'Panela Elétrica',
        descricao: 'Panela Elétrica Arroz',
        imagem: 'Imagens/PanelaEletricaDeArroz.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 5,
        nome: 'Cafeteira',
        descricao: 'Cafeteira Elétrica',
        imagem: 'Imagens/Cafeteira.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 6,
        nome: 'Liquidificador',
        descricao: 'Liquidificador Mondial',
        imagem: 'Imagens/Liquidificador.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 7,
        nome: 'Toalha de Prato',
        descricao: 'Toalha de Prato',
        imagem: 'Imagens/ToalhaDePrato.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 8,
        nome: 'Jogo de Talheres',
        descricao: 'Conjunto com 24 peças',
        imagem: 'Imagens/Talher.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 9,
        nome: 'Bandeja de Inox',
        descricao: 'Conjunto com 6 peças',
        imagem: 'Imagens/BandejaDeAluminio.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 10,
        nome: 'Jogo de Taças',
        descricao: 'Conjunto com 6 peças',
        imagem: 'Imagens/Taças.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 11,
        nome: 'Misteira',
        descricao: 'Misteira',
        imagem: 'Imagens/Misteira.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 12,
        nome: 'Escorredor de Louça',
        descricao: 'Escorredor de Louça Plástico',
        imagem: 'Imagens/EscorredorDeLouca.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 13,
        nome: 'Escorredor de Arroz',
        descricao: 'Escorredor de Arroz em Inox',
        imagem: 'Imagens/EscorredorDeArrozInox.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 14,
        nome: 'Utensílios de Cozinha',
        descricao: 'Kit com 5 peças',
        imagem: 'Imagens/Utensilios.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 15,
        nome: 'Fatiador de Legumes',
        descricao: 'Fatiador Manual',
        imagem: 'Imagens/Fatiador.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 16,
        nome: 'Ralador',
        descricao: 'Ralador 4 em 1',
        imagem: 'Imagens/Ralador.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 17,
        nome: 'Batedeira de Bolo',
        descricao: 'Batedeira',
        imagem: 'Imagens/BatedorDeBolo.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 18,
        nome: 'Tesoura de Cozinha',
        descricao: 'Tesoura Inox',
        imagem: 'Imagens/Tesoura.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 19,
        nome: 'Tábua de Cortar',
        descricao: 'Tábua de Plástico',
        imagem: 'Imagens/TabuaDeCortar.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 20,
        nome: 'Rolo de Massa',
        descricao: 'Rolo de Massa em Madeira',
        imagem: 'Imagens/RoloDeMassa.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 21,
        nome: 'Batedor de Ovos',
        descricao: 'Batedor de Ovos',
        imagem: 'Imagens/BatedorDeClara.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 22,
        nome: 'Canecão',
        descricao: 'Canecão',
        imagem: 'Imagens/Canecao.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 23,
        nome: 'Chaleira',
        descricao: 'Chaleira',
        imagem: 'Imagens/Chaleira.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 24,
        nome: 'Marinex',
        descricao: 'Marinex',
        imagem: 'Imagens/Marinex.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 25,
        nome: 'Peneira',
        descricao: 'Peneira',
        imagem: 'Imagens/Coador.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 26,
        nome: 'Colher de Pau',
        descricao: 'Colher de Pau',
        imagem: 'Imagens/ColherDePau.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 27,
        nome: 'Concha de Feijão',
        descricao: 'Concha de Feijão',
        imagem: 'Imagens/ConchaDeFeijao.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 28,
        nome: 'Cortador de Pizza',
        descricao: 'Cortador de Pizza',
        imagem: 'Imagens/Cortador.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 29,
        nome: 'Espátula de Bolo',
        descricao: 'Espátula de Bolo',
        imagem: 'Imagens/EspatulaDeBolo.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 30,
        nome: 'Espremedor de Laranja',
        descricao: 'Espremedor de Laranja',
        imagem: 'Imagens/EspremedorDeLaranja.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 31,
        nome: 'Ferro de Passar Roupas',
        descricao: 'Ferro de Passar Roupas',
        imagem: 'Imagens/FerroDePassar.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 32,
        nome: 'Forma de Bolo',
        descricao: 'Forma de Bolo',
        imagem: 'Imagens/FormaDeBolo.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 33,
        nome: 'Forma de Gelo',
        descricao: 'Forma de Gelo',
        imagem: 'Imagens/FormaDeGelo.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 34,
        nome: 'Frigideira Antiaderente',
        descricao: 'Frigideira Antiaderente',
        imagem: 'Imagens/Frigideira.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 35,
        nome: 'Garrafa de Café',
        descricao: 'Garrafa de Café',
        imagem: 'Imagens/GarrafaDeCafe.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 36,
        nome: 'Puxa Saco',
        descricao: 'Puxa Saco',
        imagem: 'Imagens/GuardaSaco.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 37,
        nome: 'Jarra de Suco',
        descricao: 'Jarra de Suco',
        imagem: 'Imagens/JarraDeSuco.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 38,
        nome: 'Lixeira de Plástico',
        descricao: 'Lixeira de Plástico',
        imagem: 'Imagens/Lixeira.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 39,
        nome: 'Panela de Pressão',
        descricao: 'Panela de Pressão',
        imagem: 'Imagens/PanelaDePressao.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 40,
        nome: 'Pegador de Macarrão',
        descricao: 'Pegador de Macarrão',
        imagem: 'Imagens/PegadorDeMacarrao.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 41,
        nome: 'Triturador de Alimentos',
        descricao: 'Triturador de Alimentos',
        imagem: 'Imagens/PequenoFatiadorDeLegumes.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 42,
        nome: 'Porta mussarela e presunto',
        descricao: 'Porta mussarela e presunto',
        imagem: 'Imagens/PortaQjMussa.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 43,
        nome: 'Porta Tempeiro',
        descricao: 'Porta Tempeiro',
        imagem: 'Imagens/PortaTempeiro.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 44,
        nome: 'Potes de Plástico',
        descricao: 'Potes de plástico',
        imagem: 'Imagens/potes.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 45,
        nome: 'Pote de Hermétrico',
        descricao: 'Pote de Hermétrico',
        imagem: 'Imagens/potesAlimentos.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 46,
        nome: 'Potes Hermétricos Isolados',
        descricao: 'Potes Hermétricos Isolados',
        imagem: 'Imagens/potesIsolado.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 47,
        nome: 'Pratos',
        descricao: 'Pratos',
        imagem: 'Imagens/PratosDeArmario.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 48,
        nome: 'Pratos',
        descricao: 'Pratos',
        imagem: 'Imagens/PratosDeArmario2.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 49,
        nome: 'Rodo De Pia',
        descricao: 'Rodo de Pia',
        imagem: 'Imagens/RoloDePia.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 50,
        nome: 'Taças de Vidro',
        descricao: 'Taças de Vidro',
        imagem: 'Imagens/tacas.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 51,
        nome: 'Taças de Vidro',
        descricao: 'Taças de Vidro',
        imagem: 'Imagens/Taças.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 53,
        nome: 'Toalhas de banho e rosto',
        descricao: 'Toalhas de banho e rosto',
        imagem: 'Imagens/Toalha.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 54,
        nome: 'Pratos Tradicionais',
        descricao: 'Pratos Tradicionais',
        imagem: 'Imagens/PratosTradicionais.jpg',
        reservado: false,
        reservadoPor: ''
    },
    {
        id: 55,
        nome: 'Xícaras de Café',
        descricao: 'Xícaras de Café',
        imagem: 'Imagens/Xicaras.jpg',
        reservado: false,
        reservadoPor: ''
    },
    
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
