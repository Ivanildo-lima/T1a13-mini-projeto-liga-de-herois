
// personagem 
// heroi
// missão
// liga 
// import, export ...
// import { personagem } from './personagem.js'

// let batman = new personagem("Batman", "Filantropia noturna e planejamento enxajerado") // classe (model) => objeto
// ====

import { Heroi } from './heroi.js'
import { Missao } from './missao.js'

//let batman = new heroi(
//    "Batman",
//    "Filantropia noturna e planejamento enxajerado",
//    [100, 54, 23, 33, 55, 180]

//)

//let flash = new heroi("flash", "Entrega antes do prazo", [60, 80, 90, 95, 100])

//console.log(batman)
//console.log(batman.getInfo()) 
//console.log(batman.calcularMediaPontos())
//console.log(batman.classificar())

//console.log(flash.calcularMediaPontos())
//console.log(flash.classificar), 
const herois = [
    { nome: "Batman", poder: "Filantropia noturna", pontos: [80, 95, 83, 100, 60] },
    { nome: "Homem de ferro", poder: "Riqueza Infinita", pontos: [90, 92, 85, 70, 100] },
    { nome: "Hulk", poder: "Raiva produtiva", pontos: [60, 80, 90, 95, 100] },
    { nome: "Flash", poder: "Entrega antes do prazo", pontos: [100, 98, 95, 97, 99] },
    { nome: "Homem-Aranha", poder: "Procratinação com estilo", pontos: [70, 75, 85, 60, 80] },

];


let missao = new Missao("Projeto liga de herois")

herois.forEach(function (heroi) {
    let heroiObjeto = new Heroi(heroi.nome, heroi.poder, heroi.pontos)

    missao.adicionarHerois(heroiObjeto)
})

missao.getResumo();