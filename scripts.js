//variáveis
let rankedBalance =  results(78, 7)
let heroRanking

//funcão
function  results(victory, defeat ) {
    let balanceVictoryDefeat = victory - defeat
    return  balanceVictoryDefeat
    
}

//estrutura switch case 
switch(true){
    case rankedBalance <= 10:
        heroRanking = "Ferro"
        break
    case rankedBalance >= 11 && rankedBalance <= 20:
        heroRanking = "Bronze"
        break
    case rankedBalance >= 21 && rankedBalance <=50:
        heroRanking = "Prata"
        break
    case rankedBalance >= 51 && rankedBalance <= 80:
        heroRanking = "Ouro"
        break
    case rankedBalance >= 81 && rankedBalance <= 90:
        heroRanking = "Diamante"
        break
    case rankedBalance >= 91 && rankedBalance <= 100:
        heroRanking = "Lendário"
        break
    case rankedBalance >= 101:
        heroRanking = "Imortal"
}

//Saída
console.log(`O Herói tem saldo ${rankedBalance} e está no nível ${heroRanking}`)
