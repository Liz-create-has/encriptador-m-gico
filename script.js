const llaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    let texto = document.getElementById('input').value.toLowerCase();
    if (!texto) {
        alert('Por favor, ingresa un texto para encriptar');
        return;
    }
    let resultado = texto.replace(/[eiaou]/g, letra => llaves[letra]);
    document.getElementById('output').value = resultado;
}

function desencriptar() {
    let texto = document.getElementById('input').value.toLowerCase();
    if (!texto) {
        alert('Por favor, ingresa un texto para desencriptar');
        return;
    }
    let resultado = texto;
    for (let [key, value] of Object.entries(llaves)) {
        resultado = resultado.replace(new RegExp(value, 'g'), key);
    }
    document.getElementById('output').value = resultado;
}

function copiarResultado() {
    let output = document.getElementById('output');
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function borrarCampos() {
    document.getElementById('input').value = '';  
    document.getElementById('output').value = ''; 
}
