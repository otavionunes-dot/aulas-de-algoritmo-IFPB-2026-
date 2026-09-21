let idade = 40;
let classificacao =
    idade >= 0 && idade < 3 ? " bebê" :
        idade >= 3 && idade < 18 ? " criança" :
            idade >= 18 && idade < 40 ? " adulto" :
                " velho";
let sexo = "f";
let resposta_sexo = sexo === "m" ? " menino" : " menina";
let beleza = "f";
let resposta_beleza = beleza === "b" ? " bonito" : " feio";

console.log("vc é " + classificacao + resposta_sexo + resposta_beleza)