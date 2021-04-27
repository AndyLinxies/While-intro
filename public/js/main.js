let classe =[];
let max = prompt('Choisissez le nombre max détudiants');
while (classe.length!=max) {
    classe.push(prompt('Rentrez un nom'))
}
console.log(classe);