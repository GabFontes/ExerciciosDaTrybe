let Peao = "pode se mover duas casas a frente na primeira jogada e posteriormente só pode se mover diagonalmente"
Peao.toLowerCase();
let Bispo = "Se move nas diagonais"
Bispo.toLowerCase();

let peça = Peao

switch (peça){
    case Peao:
    console.log(Peao);   
    break;
    case Bispo:
    console.log(Bispo);
    break;
    default:
    console.log("Erro");   
}


