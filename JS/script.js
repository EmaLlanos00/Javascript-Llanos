//----------Introducción: el propósito de este trabajo es realizar una simulación de un stock de una tienda de plantas.
//----------Se pretende aplicar tipos de filtrado y mostrar los resultados como alerts

class Plantas {
    constructor (id, familia, genero, especie, price, size, sold){

    this.id = parseInt(id);              
    this.familia = familia;      
    this.genero = genero;       
    this.especie = especie;
    this.price = parseFloat(price);
    this.size = size;
    this.sold = false;

    }
}

//------------Creado el constructor, procedemos a declarar y agregar contenido al array
const arrayPlantas = [];

arrayPlantas.push(new Plantas(1, 'cactaceae', 'astrophytum', 'asterias', 1150, 'N10'));
arrayPlantas.push(new Plantas(2, 'cactaceae', 'gymnocalycium', 'erinaceum', 450, 'N8'));
arrayPlantas.push(new Plantas(3, 'cactaceae', 'mammillaria', 'pectinifera', 2800, 'N8'));
arrayPlantas.push(new Plantas(4, 'cactaceae', 'notocactus', 'submammulosus', 400, 'N10'));
arrayPlantas.push(new Plantas(5, 'cactaceae', 'astrophytum', 'myriostigma', 300, 'N6'));
arrayPlantas.push(new Plantas(6, 'cactaceae', 'ferocactus', 'latispinus', 270, 'N8'));
arrayPlantas.push(new Plantas(7, 'crassulaceae', 'kalanchoe', 'pink butterfly', 400, 'N15'));
arrayPlantas.push(new Plantas(8, 'crassulaceae', 'graptopetalum', 'superbum', 700, 'N16'));
arrayPlantas.push(new Plantas(9, 'asphodelaceae', 'haworthiopsis', 'attenuata variegata', 3900, 'N22'));
arrayPlantas.push(new Plantas(10, 'aizoaceae', 'titanopsis', 'calcarea', 400, 'N8'));
arrayPlantas.push(new Plantas(11, 'asphodelaceae', 'haworthiopsis', 'marumiana', 300, 'N10'));
arrayPlantas.push(new Plantas(12, 'crassulaceae', 'echeveria', 'red wine', 500, 'N8'));

console.log(arrayPlantas.findIndex( (element) => element.id === 8));

let repeat = true;

while(repeat){
let mainChoice = prompt('Hola, elegí una opción' + '\n1. Ver todos los productos' + '\n2. Ver cactus' + '\n3. Ver suculentas' + '\n4. Filtrar por...' + '\n5. Salir');
console.log(mainChoice);

if(mainChoice == '1'){
    const allPlants = arrayPlantas.slice(0, 12);
    console.log(allPlants.length);
    const namePlants = [];
    for (const genero of allPlants){
        namePlants.push([genero.genero + ' ' + genero.especie]);
    }
    alert(namePlants.join('\n'));
    
    repeat = false;
}else if (mainChoice == '2') {
    const allPlants = arrayPlantas.slice(0, 6);
    console.log(allPlants.length);
    const namePlants = [];
    for (const genero of allPlants){
        namePlants.push([genero.genero + ' ' + genero.especie]);
    }
    alert(namePlants.join('\n'));
    
    repeat = false;

}else if (mainChoice == '3'){
    const allPlants = arrayPlantas.slice(6, 12);
    console.log(allPlants.length);
    const namePlants = [];
    for (const genero of allPlants){
        namePlants.push([genero.genero + ' ' + genero.especie]);
    }
    alert(namePlants.join('\n'));
    
    repeat = false;

}/* else if (mainChoice == '4'){
    let sortChoice = prompt('Elegí cómo filtrar...' + '\n1. Mayor precio primero' + '\n2. Menor precio primero' + '\n3. Alfabético (A-Z)' + '\n4. Alfabético (Z-A)' + '\n5. Salir');
    const sortArray = arrayPlantas.slice(0,12);
    switch (sortChoice){
        case '1': 
        console.table(this.maxPricePlants.sort(((a, b) => b.price - a.price)));
        const precios = [];
        for (const price of maxPricePlants){
            precios.push([price.genero + ' ' + price.especie + price.price]);
        } 
        precios.sort((a, b)=> b - a);

         alert ('Filtro1');
         
        break;
        case '2': 
        alert ('Filtro2');
        
        break;
        case '3': let nombreAscendente = sortArray.sort((a, b) => a.genero.localeCompare(b.genero));
        return nombreAscendente;
         alert (nombreAscendente);
        case '4': 
         alert ('Filtro4');
         
        break;
        case '5':
            
        break;
        default: 
         alert ('elegí un filtro');
         break;
    } let repeat=false
    
} */else if (mainChoice == '5'){
    alert('Gracias por visitarnos :)')
    repeat = false;
}else{
    repeat = true;
}


}

