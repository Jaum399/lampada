var lamp = document.getElementById('lampada');

function Ligar() {
    // Se a lâmpada estiver quebrada, não faz nada
    if (lamp.src.includes('lampadaquebrada')) {
        return;
    }
    
    // Atualiza a imagem para a lâmpada acesa
    lamp.src = '/imagens/lampadaacesa.svg';
}

function Desligar() {
    // Se a lâmpada estiver quebrada, não faz nada
    if (lamp.src.includes('lampadaquebrada')) {
        return;
    }

    // Atualiza a imagem para a lâmpada apagada
    lamp.src = '/imagens/lampadaapagada.svg';
}

function Quebrar() {
    // Atualiza a imagem para a lâmpada quebrada
    lamp.src = '/imagens/lampadaquebrada.svg';
}
