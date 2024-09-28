/*var compras = ["Arroz","Feijão","Picanha","Salada","Coca-cola"];
compras.push("Sorvete");                //adicionar um elemento a lista
compras.splice(1,1);                    //remover elemento da lista

for(let element = 0; element<=5; element++){
    alert(compras[elemento]);

}*/
let notas = [];
let total = 0;

for (let nota = 0; nota <= 2; nota++) {
    notas[nota] = Number(prompt("Digite o Valor da Nota: "+ nota));
}

for (let nota = 0; nota < 3; nota++) {
    total += notas[nota];
}

let media = total / 3;
document.write("Receba teu Aproveitamento: " + media);

