let Fruta = "";

Fruta = prompt('Qual fruta você deseja')

switch(Fruta.toLowerCase()) {
    case "maçã":
        alert("Não vendemos esta fruta aqui")
        break;
    
    case "kiwi":
        alert("Estamos com escassez de kiwis")
        break;

    case "melancia":
        alert("Aqui está, são 3 reais o quilo")
        break;
    
    default:
        alert("fruta não encontrada!")
        break;
}