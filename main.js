const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a sua opinião sobre a subcultura conhecida como Mandrake?",
        alternativas: [
            {
                texto: "Não, considero uma subcultura pois é utilizado comumente no mundo da criminalidade.",
                afirmacao: "Não conhece a filosofia transmitida pela subcultura mandrake"
            },
            {
                texto: "Acredito que seja uma forma de expressão distorcida pela sociedade atual.",
                afirmacao: "Têm a ideia de que seja uma subcultura julgada e criminalizada."
            }
        ]
    },
    {
        enunciado: "Você conhece o significado por traz da subcultura Mandrake?",
        alternativas: [
            {
                texto: "Sim, creio que seja somente para estilo",
                afirmacao: "A subcultura mandrake tem como símbolo a resistência à violência policial e a segregação de moradores da periferia."
            },
            {
                texto: "Não, não acho que tenha um símbolo.",
                afirmacao: "A subcultura tem um objetivo muito simbólico, que trata da resistência à violência policial dentro das periferias e expressão da comunidade das favelas."
            }
        ]
    },
    {
        enunciado: "Você conhece a origem da subcultura Mandrake?",
        alternativas: [
            {
                texto: "Sim, creio que seja somente um estilo de roupas.",
                afirmacao: "Mandrake não é só um estilo de roupas, mas sim uma manifestação sociocultural contra sistema capitalista."
            },
            {
                texto: "Não, mas creio que seja um símbolo criminoso.",
                afirmacao: "O movimento mandrake surgiu por volta dos anos 70, dentro do contexto periférico. Os Mandrakes são pessoas vítimas do sistema capitalista e reféns da desigualdade social."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();