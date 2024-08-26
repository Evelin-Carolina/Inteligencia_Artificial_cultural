const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que as orcas têm maiores qualidades de vida dentro ou fora do cativeiro?",
        alternativas: [
            {
                texto: "Sim, com cuidados humanos elas têm maiores qualidades de vida.",
                afirmacao: "As orcas criadas em cativeiro tem média de vida de 15 a 25 anos. "
            },
            {
                texto: "Não, na natureza elas possuem maior qualidade de vida.",
                afirmacao: "Orcas que vivem na natureza tem estimativa de vida de 100 anos."
            }
        ]
    },
    {
        enunciado: "Você considera importante a vida social de uma orca?",
        alternativas: [
            {
                texto: "Sim, as orcas necessitam conviver socialmente com outras orcas.",
                afirmacao: "Orcas criadas em cativeiro encontram-se em situações estressantes pelo abandono familiar."
            },
            {
                texto: "Não, elas necessitam viver sozinhas.",
                afirmacao: "As orcas necessitam estar em grupos formados por suas gerações passadas, já que são considerados os animais mais sociáveis da Terra."
            }
        ]
    },
    {
        enunciado: "Você considera as orcas como agressivas?",
        alternativas: [
            {
                texto: "Sim, pois são consideradas "baleias assassinas".",
                afirmacao: "as orcas apesar do apelido, são seres inofensivos e só caçam para a alimentação ou quando se sentem ameaçadas"
            },
            {
                texto: "Não, pois elas apenas se alimentam como outros animais.",
                afirmacao: "O apelido de "baleia assassina" veio devido a sua agilidade na hora da caça e por se alimentar de animais de sangue quente, porém matam apenas para se alimentar e mentar a sua sobrevivência."
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