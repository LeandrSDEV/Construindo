function atualizarDataHora() {
    const dataHoraAtual = new Date();
    const elementoDataHora = document.getElementById('data-hora-atual');

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    elementoDataHora.textContent = dataHoraAtual.toLocaleString('pt-BR', options);
}

atualizarDataHora(); // Atualiza a data e hora imediatamente

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

/*###################################################################################*/

const telas = [
    document.getElementById('tela1'),
    document.getElementById('tela2')
]
const botaoTrocar = document.getElementById("lobbyx");
const botaoVoltar = document.getElementById("lobbyx");

// Adiciona um ouvinte de evento para o botão de trocar tela
botaoTrocar.addEventListener("click", () => {
    telas[0].style.display = "none"; // Oculta a tela 1
    telas[1].style.display = "block"; // Exibe a tela 2
});

// Adiciona um ouvinte de evento para o botão de voltar
botaoVoltar.addEventListener("click", () => {
    telas[0].style.display = "block"; // Exibe a tela 1
    telas[1].style.display = "none"; // Oculta a tela 2
});

/*###################################################################################*/

/*function somar() {
    const somar1 = [
        document.getElementById('vs1'),
        document.getElementById('vs2')
    ]
    let final = somar1[0] + somar1 [1]

    let res = document.getElementById('res')
    if (somar1.values.length == 0) {
        res.style.color = 'Red'
        res.innerHTML = '[Error] Impossivel somar!'
    } else {
       res.innerHTML=(`A soma entre ${somar1[0]} e ${somar[1]} é = ${final}`)
    }
}*/

//#Lobby, pagina inical contendo todas as formas primarias de calculo
//#Ao clicar em 1 das formas mudaria de tela para uma expecifica
//#Dentro da tela teria a opção tabuada e insira valores
//#No canto teria uma opção de volta para o lobby

function somar() {
    
   
    const vs1 = parseFloat(document.getElementById('vs1').value);
    const vs2 = parseFloat(document.getElementById('vs2').value);
    const res = document.getElementById('res');
    
    if (isNaN(vs1) || isNaN(vs2)) {
        res.style.color = 'red';
        res.textContent = '[Erro] Impossível somar!';
    } else {
            const resultado = Number.parseFloat(vs1 + vs2);
            res.style.color = 'blue'; // Volta à cor padrão
            res.textContent =`${resultado}`;
        }
    }



function tabuada() {
    let valor = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (valor.value.length == 0) {  //só irá aparecer quando não tiver nenhum conteúdo
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(valor.value)
        let c = 0
        tab.innerHTML = ''
        while (c <= 20) {
            let item = document.createElement('option')
            item.innerHTML = `Iniciando...`
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

/*###################################################################################*/
