let vida = 1
let inventario = []
let nomePersonagem = "Hadi Tiranvalipour"
let jogoAtivo = true


function menu() {
    let opcao = prompt("Menu: \n1. Informações sobre você \n2. Informações sobre Taekwondo \n3. Informações sobre a sua família \n4.Ver inventário \n5. Ver pontuação")
    switch (opcao) {
        case "1":
            info()
            break

        case "2":
            infoTaekwondo()
            break

        case "3":
            infoFam()
            break

        case "4":
            verInventario()
            break

        case "5":
            verPontuacao()

    }
}
function info() {
    console.log("Seu nome é " + nomePersonagem + " e mora no Irã. Seu país está passando por um momento complicado de uma guerra civil.")
    console.log("Você e sua família estão vivendo tensos momentos em seu país por conta de uma guerra civil. Os cidadãos estão lutando por seus direitos e fazendo manifestações.")
    console.log("Você pratica o esporte Taekwondo. Quando era criança participou de um grupo de pessoas que treinavam. Hoje compete Taekwondo nacionalmente.")
    console.log("Informação importante: Sua família faz parte de manifestações.")
}
function infoFam(){
    console.log("Você e sua família moram no Irã. Há quase um ano se iniciou uma guerra civil.")
    console.log("como uma maneira de apoiar a população do país, seus pais têm participado de algumas manifestações para lutar pelos seus direitos")
    console.log("Você não concorda muito com a ideia de participar dessas manifestações porque pode ser perigoso. Os militares sempre estão na volta.")
}
function infoTaekwondo(){
    console.log("Desde pequeno você sempre gostou de lutar Taekwondo, participava de um grupo de crianças que praticavam.")
    console.log("No fim de sua adolescência começou a competir nacionalmente pelo Irã.")
    console.log("Você tem o sonho de continuar jogando e virar um jogador famoso.")

}
function verInventario() {
    console.log("Seu inventário possui: " + inventario)
}
function verPontuacao() {
    console.log("Sua pontuação é: " + vida)
}
function npc1() { // interação 1
    let fala = prompt("Seu vizinho o convidou para participar de uma manifestação, mas você sabe que pode ser perigoso. \nAceita participar?").toLowerCase()
    switch (fala) {
        case "sim":
        console.log("Vizinho diz: 'Muito obrigado! Quanta coragem.")
        console.log("Você ganhou o sentimento 'Coragem'!")
        console.log("Você ganhou 10 pontos!")
        vida += 10
        inventario.push("Coragem")
        console.log("Seu inventário possui: " + inventario)
        console.log("Sua pontuação: " + vida)
        break

        case "não":
        console.log("Seu vizinho ficou triste, mas o entendeu. Você ganhou o sentimento de proteção.")
        console.log("Você ganhou 3 pontos!")
        vida += 3
        inventario.push("Proteção")
        console.log("Seu inventário possui: " + inventario)
        console.log("Sua pontuação: " + vida)
        break
    
        default:
        console.log("Informação não identificada")
    }


}
function npc2() { // interação 2
    let fala = prompt("Você está andando em sua vizinhança e vê um homem tentando agredir uma mulher. Usar suas habilidades de taekwondo para ajudá-la?").toLowerCase()
    switch (fala) {
        case "sim":
        console.log("Você percebeu que o homem com quem você lutou possui habilidades de taekwondo também. Não foi tão fãcil o derrotar. ")
        console.log("Mulher diz: Obrigada por me salvar, foi muita bondade de sua parte!")
        inventario.push("Bondade")
        vida += 15
        console.log("Você ganhou o sentimento 'Bondade'!")
        console.log("Você ganhou 15 pontos!")
        console.log("Seu inventário possui: " + inventario)
        console.log("Sua pontuação: " + vida)
    
        case "não": 
        console.log("Você saiu correndo e não ajudou a mulher. Agora está se sentindo culpado.")
        console.log("Você perdeu 5 pontos.")
        vida -= 5
        console.log("Sua pontuação: " + vida)

        default:
            console.log("Informação não identificada")
    }

}
function ncp3() {
    alert("A guerra em seu país começa a se intensificar. Seus pais vão sair de casa por uns dias e querem que você cuide da casa.")
    let fala = prompt("Você acha irresponsabilidade da parte deles deixar a casa e você sozinho para cuidá-la, mas também entende que não sabe dos seus motivos e que talvez irão fazer algo que possa ajudar. Irá dizer que sim ou que não?").toLowerCase()
    switch (fala){
        case "sim":
        console.log("Eles te agradecem e não explicam porque vão ficar fora. Ficam felizes por confiare neles.")
        inventario.push("Confiança")
        vida += 10
        console.log("Você ganhou o sentimento 'Confiança'!")
        console.log("Você ganhou 10 pontos!")
        console.log("Seu inventário possui: " + inventario)
        console.log("Sua pontuação: " + vida)
    
        case "não":
        console.log("Eles vão ficar fora mesmo assim, mas ficam preocupados com sua resposta. Pedem novamente para que você cuide da casa.")
        vida -= 5
        console.log("Você perdeu 5 pontos!")
        console.log("Sua pontuação: " +vida)

        default:
            console.log("Informação não identificada")
    }
}



while (vida > 0) {
    let inicio = prompt("Bem vindo ao jogo 'Crônicas do Imaginário'! Seu nome é '" + nomePersonagem + "'. Aperte '1' para abrir o menu do jogo") 
    if (inicio == "1") {
        menu()

    }
    else {
        break;
    }

    npc1()
    npc2()
    ncp3()



} // acaba laço do jogo ativo
