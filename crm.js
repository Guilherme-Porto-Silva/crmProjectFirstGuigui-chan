const botaoEnviador = document.getElementById("submitButton");

let clientes = [];

function crmAmpliar() {

clientes = clientes + [

  produto = document.getElementById("produtoInput").value,

  nome = document.getElementById("nomeInput").value,

  email = document.getElementById("emailInput").value,

  tel = document.getElementById("telInput").value,

  data = document.getElementById("dataInput").value,

  moradia = document.getElementById("moradiaInput").value,

  idade = document.getElementById("idadeInput").value,

temY = (document.getElementById("generoInput").value == 0),// Se e somente se o botão escrito "Masculino" for marcado, a igualdade, e a afirmação de que o agente da passiva tem alelo Y, serão verdadeiras.

  status = document.getElementById("statusInput").value,
    
];

}

botaoEnviador.addEventListener("click", crmAmpliar);

botaoEnviador.addEventListener("keydown", (e) => { if (e.key == "Enter") crmAmpliar });