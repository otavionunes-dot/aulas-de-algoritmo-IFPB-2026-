let nao1 =  prompt("digite sua data de nacimento: ") 
let ano2 =  prompt("digite sua data de hoje: ") 
let cal= ano2-ano1
let classificacao =
    idade >= 0 && idade < 3 ? " bebê" :
        idade >= 3 && idade < 18 ? " criança" :
            idade >= 18 && idade < 40 ? " adulto" :
                " velho";
console.log("Vc é "+ classificacao +" e sua idade é "+ cal)