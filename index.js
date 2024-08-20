let vida = 5 // jogador vai começar com 5 pontos
let inventario = [] // armazena habilidades e virtudes
let nomePersonagem = "Hadi Tiranvalipour"
let fase = 1
 
 
iniciarJogo()
 
 
function iniciarJogo(){
        vida = 5 // quando o jogador perder e a função iniciarJogo for chamada, os pontos iniciais voltam a ser 5
        inventario = [] // inventário zera quando a função iniciarJogo for chamada
        let inicio = prompt("Bem vindo ao jogo 'Crônicas do Imaginário'! Seu nome é '" + nomePersonagem + "' e mora no Irã. Você começará o jogo com 5 pontos e deve chegar no mínimo até os 100 pontos! \nDigite 'Menu' para abrir o menu do jogo.").toLowerCase()
 
        if (inicio == "menu") {
            menu()
 
        }else{
            console.log ("Recomece o jogo!")
            iniciarJogo()
        }
 
 
        while(vida > 0){
            switch(fase) {
                case 1:
                    fase1()
                    break
                case 2:
                    fase2()
                    break
                case 3:
                    fase3()
                    break
                case 4:
                    fase4()
                    break
                case 5:
                    fase5()
                    break
                case 6:
                    fase6()
                    break
                case 7:
                    fase7()
                    break
                case 8:
                    fase8()
                    break
                case 9:
                    fase9()
                    break
                case 10:
                    fase10()
                    break
                case 11:
                    fase11()
                    break
                case 12:
                    fase12()
                    break
                case 13:
                    fase13()
                    break
            }
       
            // if (vida < 0){
            // iniciarJogo()
            // }
 
        }
        console.log("Você zerou os pontos e perdeu o jogo! Reiniciando...")
        fase = 1
        iniciarJogo()
}
 
function menu() {
    let opcao = prompt("Menu: \n1. Informações sobre você \n2. Informações sobre Taekwondo \n3. Informações sobre a sua família \n4. Ver inventário \n5. Ver pontuação")
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
 
        default:
            console.log("Informação não identificada")
            break
 
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
    console.log("Como uma maneira de apoiar a população do país, seus pais têm participado de algumas manifestações para lutar pelos seus direitos")
    console.log("Você não concorda muito com a ideia de participar dessas manifestações porque pode ser perigoso. Os militares sempre estão na volta.")
}
 
function infoTaekwondo(){
    console.log("Desde pequeno você sempre gostou de lutar Taekwondo, participava de um grupo de crianças que praticavam.")
    console.log("No fim de sua adolescência começou a competir nacionalmente pelo Irã.")
    console.log("Você tem o sonho de continuar lutando e virar um lutador famoso.")
 
}
 
function verInventario() {
    console.log("Seu inventário possui: " + inventario)
}
 
function verPontuacao() {
    console.log("Sua pontuação é: " + vida)
}
 
function fase1() { // interação 1
    let fala = prompt("Seu vizinho o convidou para participar de uma manifestação, mas você sabe que pode ser perigoso. \nAceita participar?").toLowerCase()
    switch (fala) {
        case "sim":
        console.log("Vizinho diz: 'Muito obrigado! Quanta coragem.")
        console.log("Você ganhou a virtude 'Coragem'!")
        console.log("Você ganhou 10 pontos!")
        vida += 10
        inventario.push("Coragem")
        verInventario()
        verPontuacao()
        break
 
        case "não":
        console.log("Seu vizinho ficou triste, mas o entendeu. Você ganhou o virtude de proteção.")
        console.log("Você ganhou 3 pontos!")
        vida += 3
        inventario.push("Proteção")
        verInventario()
        verPontuacao()
        break
   
        default:
            console.log("Informação não identificada.")
            break
    }
 
    fase = 2
}
 
function fase2() { // interação 2
    let fala = prompt("Você está andando em sua vizinhança e vê um homem tentando agredir uma mulher. \nUsar suas habilidades de taekwondo para ajudá-la?").toLowerCase()
    switch (fala) {
        case "sim":
        console.log("Você percebeu que o homem com quem você lutou possui habilidades de taekwondo também. Não foi tão fãcil o derrotar. ")
        console.log("Mulher diz: Obrigada por me salvar, foi muita bondade de sua parte!")
        inventario.push("Bondade")
        vida += 10
        console.log("Você ganhou a virtude 'Bondade'!")
        console.log("Você ganhou 10 pontos!")
        verInventario()
        verPontuacao()
        break
   
        case "não":
        console.log("Você saiu correndo e não ajudou a mulher. Agora está se sentindo culpado.")
        console.log("Você perdeu 5 pontos.")
        vida -= 5
        verPontuacao()
        break
 
        default:
            console.log("Informação não identificada.")
            break
    }
 
    fase = 3
}
 
function fase3() { // interação 3
    alert("A guerra em seu país começa a se intensificar. Seus pais vão sair de casa por uns dias e querem que você cuide da casa.")
    let fala = prompt("Você acha irresponsabilidade da parte deles deixar a casa e você sozinho para cuidá-la, mas também entende que não sabe dos seus motivos e que talvez irão fazer algo que possa ajudar. \nIrá dizer que sim ou que não?").toLowerCase()
    switch (fala){
        case "sim":
        console.log("Eles te agradecem e não explicam porque vão ficar fora. Ficam felizes por confiare neles.")
        inventario.push("Confiança")
        vida += 5
        console.log("Você ganhou a virtude 'Confiança'!")
        console.log("Você ganhou 5 pontos!")
        verInventario()
        verPontuacao()
        break
   
        case "não":
        console.log("Eles vão ficar fora mesmo assim, mas ficam preocupados com sua resposta. Pedem novamente para que você cuide da casa.")
        vida -= 5
        console.log("Você perdeu 5 pontos!")
        verPontuacao()
        break
 
        default:
            console.log("Informação não identificada.")
            break
    }
 
    fase = 4
}
 
function fase4(){ // interação 4
    alert("Você está sozinho em casa e escuta barulhos vindo da rua. Parecem as forças armadas do Irã quando estão vigiando as ruas. Você sabe que eles suspeitam de muitas famílias que podem fazer parte das manifestações.")
    let fala = prompt("Você tem duas opções: \n1 - Se esconder em casa e esperar eles irem embora \n2 - Ir até a rua e insultá-los")
        switch (fala){
            case "1":
                console.log("Você foi esperto, ficou dentro de casa e logo eles foram embora. Parabéns pela sua inteligência!")
                vida += 10
                inventario.push("Inteligência")
                console.log("Você ganhou a habilidade 'Inteligência'!")
                console.log("Você ganhou 10 pontos!")
                verInventario()
                verPontuacao()
                break
 
            case "2":
                console.log("Você foi para a rua insultá-los e acabou levando uma surra. Eles mandaram você voltar para dentro de casa e falaram que não iriam poupá-lo da próxima vez.")
                vida -= 10
                console.log("Você perdeu 10 pontos!")
                verPontuacao()
                break
 
            default:
                console.log("Informação não identificada.")
                break
 
        }
 
    fase = 5
 
}
 
function fase5(){ // história em texto
    alert("Seus pais voltaram após alguns dias fora. Eles lhe contam que estavam com um grupo de ativistas fazendo manifestações contra o Governo. Eles têm más notícias.")
    alert("Enquanto estavam fora, militares avançaram contra manifestações onde os dois estavam. Seus pais conseguiram fugir, mas estão atrás deles. Agora são procurados. Vocês devem ficar dentro de casa para se manterem seguros.")
 
    fase = 6
}
 
function fase6(){ // interação 6
    alert("Se passaram alguns dias desde que seus pais voltaram. O clima está tenso após os dois estarem sendo procurados. Até que então, alguém bate na porta de sua casa...")
    let fala = prompt("Você atendeu a porta e quem estava batendo eram as forças armadas, que já estavam procurando por eles. O militar pergunta quem são seus pais. Você tem duas opções: \n1 - Mentir sobre quem são seus pais \n2 - Falar a verdade e arriscar, porque você não pode fazer nada a respeito")
    switch(fala){
        case "1":
            console.log("Não adiantou mentir, da mesma forma as forças armadas entraram em sua casa para conferir. Você não sabe o que vai acontecer daqui para frente.")
            vida -= 10
            console.log("Você perdeu 10 pontos.")
            verPontuacao()
            break
 
        case "2":
            console.log("Você foi honesto e falou a verdade, eles entraram em sua casa à procura de seus pais. Você não sabe o que vai acontecer daqui para frente.")
            vida += 10
            inventario.push("Honestidade")
            console.log("Você ganhou a virtude 'Honestidade'!")
            console.log("Você ganhou 10 pontos!")
            verInventario()
            verPontuacao()
            break
 
        default:
            console.log("Informação não identificada.")
            break
    }
 
    fase = 7
}
 
function fase7(){ // interação 7
    alert("As forças armadas prenderam seu pai, mas você e sua mãe conseguiram fugir. Ela o incentiva a fugir do país e tentar começar uma vida que você mereça, mas sem ela.")
    let fala = prompt("- Decisão definitiva para o jogo - \nVocê tem duas opções: \n1 - Fugir para outro país e ter a chance de mudar de vida \n2 - Ficar no Irã")
    switch(fala){
        case "1":
            console.log("Você seguiu seu coração e fez a escolha certa. Foi uma decisão difícil e sábia.")
            vida += 20
            inventario.push("Sabedoria")
            console.log("Você ganhou a virtude 'Sabedoria'!")
            console.log("Você ganhou 20 pontos!")
            verInventario()
            verPontuacao()
            fase = 8
            break
 
        case "2":
            console.log("Você fez a escolha errada. Em poucas horas encontraram você e sua mãe e foram presos.")
            console.log("Você perdeu o jogo! Reiniciando...")
            fase = 1
            iniciarJogo()
 
    }
 
}
 
function fase8(){ // interação 8
    alert("Você decidiu fugir do Irã. Está em um navio clandestino de refugiados e ouviu dizer que está indo para a Itália.")
    let fala = prompt("- Decisão definitiva do jogo - \nVocê ouviu dois homens conversando sobre tentar mudar de vida com suas habilidades nos esportes quando chegassem na Itália. \nVocê tenta falar com eles?").toLowerCase()
    switch(fala){
        case "sim":
            console.log("Eles gostaram de você e todos continuaram conversando. Você fez novas amizades!")
            vida += 20
            inventario.push("Amizade")
            console.log("Você ganhou a virtude 'Amizade'!")
            console.log("Você ganhou 20 pontos!")
            verInventario()
            verPontuacao()
            fase = 9
            break
 
        case "não":
            console.log("Você fez a escolha errada. Você não foi falar com eles, então continuaram conversando e você ficou sozinho.")
            console.log("Você perdeu o jogo! Reiniciando...")
            fase = 1
            iniciarJogo()
           
    }
 
    // fase = 9
}
 
function fase9(){ // interação 9
    alert("Após um mês de viagem no navio, você e seus amigos finalmente chegaram na Itália. Quando chegaram lá, perceberam que não tinham absolutamente nada e teriam que recomeçar suas vidas do zero.")
    let fala = prompt("Você passou dias dormindo na rua como um mendigo. Está exausto. Até que você e seus amigos conseguiram um emprego, lavando pratos em um restaurante. \nAceitar o emprego?").toLowerCase()
    switch(fala){
        case "sim":
            console.log("Ótimo! Agora que você tem um emprego está mais perto de construir uma nova vida!")
            vida += 10
            console.log("Você ganhou 10 pontos!")
            verPontuacao()
            break
 
        case "não":
            console.log("Você não tem a opção de rejeitar o emprego, nunca iria reconstuir sua vida!")
            vida -= 10
            console.log("Você perdeu 10 pontos!")
            verPontuacao()
            break
 
        default:
            console.log("Informação não identificada.")
            break
    }
 
    fase = 10
}
 
function fase10(){ // interação 10
    let fala = prompt("- Decisão definitiva para o jogo - \nJá faz muito tempo que você não treina Taekwondo. Isso te ajuda a desestressar. \nVocê escolhe treinar sozinho ao lado de fora do restaurante na hora do intervalo?").toLowerCase()
    switch(fala){
        case "sim":
            console.log("Um homem que estava passando viu você treinando e foi falar com você. Ele é um empresário que contrata atletas para jogar profissionalmente!")
            vida += 20
            inventario.push("Reconhecimento")
            console.log("Você ganhou a virtude 'Reconhecimento'!")
            console.log("Você ganhou 20 pontos!")
            verInventario()
            verPontuacao()
            fase = 11
            break
 
        case "não":
            console.log("Você fez a escolha errada. Perdeu a oportunidade de ser reconhecido por suas habilidades no Taekwondo!")
            console.log("Você perdeu o jogo! Reiniciando...")
            fase = 1
            iniciarJogo()
    }
}
 
function fase11(){ // interação 11
    alert("O empresário entrou em contato com você e lhe fez uma proposta: jogar Taekwondo profissionalmente pelo país da Itália e você aceitou. Finalmente vai construir uma nova vida e honrar seus pais.")
    alert("Você foi até a academia de treinamento de atletas nacionais para começar a treinar, até que escuta outros homens conversando sobre as Olimpíadas de Paris de 2024 estarem cada vez mais perto. Você viu uma chance de ser reconhecido mundialmente e não pode perder essa oportunidade!")
    alert("Você decidiu falar com o empresário para concorrer nas Olimpíadas. Ele disse que não é um processo fácil e é necessário competir com todos os atletas da academia, e o vencedor é escolhido para representar o país nas Olimpíadas.")
 
    fase = 12
}
 
function fase12(){ // interação 12
    let fala = prompt("Você aceita participar da competição, que acontecerá daqui alguns dias. Você tem duas opções: \n1 - Ir atrás dos outros concorrentes e machucá-los para os impedir de lutar \n2 - Treinar todo o tempo possível, já que faz tempo que não pratica")
    switch(fala){
        case "1":
            console.log("Você machucou os outros atletas e foi expulso da academia.")
            vida -= 20
            console.log("Você perdeu 20 pontos!")
            verPontuacao()
            break
 
        case "2":
            console.log("Você praticou muito e nunca lutou tão bem quanto luta agora. Parabéns pela sua disciplina!")
            vida += 10
            inventario.push("Disciplina")
            console.log("Você ganhou a habilidade 'Disciplina'!")
            console.log("Você ganhou 10 pontos!")
            verInventario()
            verPontuacao()
            break
 
        default:
            console.log("Informação não identificada.")
            break
    }
 
    fase = 13
}
 
function fase13(){ // fase final
    alert("Você já competiu com quase todos os concorrentes da academia, falta apenas um. Você se surpreende quando vê seu adversário final. \nÉ o homem que você viu agredindo aquela mulher no Irã! \nNaquele momento se sentiu desconfiante, pois lembrou que ele possui ótimas habilidades no Taekwondo.")
    alert("Para você ganhar a luta, é necessário que tenha alguns itens específicos em seu inventário: 'Sabedoria', 'Amizade' e 'Reconhecimento'.")
    alert("Também precisa ter ao menos 100 pontos. ")
    alert("Calculando...")
    if (vida >= 100){
        alert("Parabéns! Você venceu a luta e ganhou o jogo! \nSeu inventário possui: " +inventario, " e sua pontuação é: " +vida)
        console.log("Você, " +nomePersonagem+ ", foi para as Olimpíadas de Paris de 2024! Seus pais conseguiram contato com você e irão para Itália para te encontrar!")
        fase = 1
        iniciarJogo()
    }
 
    else{
        alert("Você não venceu a luta e perdeu o jogo! \nJogue novamente.")
        console.log("Reiniciando jogo...")
        fase = 1
        iniciarJogo()
    }
}