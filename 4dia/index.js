const fome = prompt('Você está com fome?')
const dinheiro = prompt('Você está com dinheiro?')
const restaurante = prompt('Há restaurantes abertos agora?')

if(fome === 'Não' || dinheiro === 'Não'){
   console.log("Hoje a janta será em casa")
}else if (fome === 'Sim' && dinheiro === 'Sim' && restaurante === 'Não'){
    console.log("Peça um delivery!")
}else if (fome === 'Sim' && dinheiro === 'Sim' && restaurante === 'Sim')
    console.log("Hoje o jantar será no seu restaurante preferido!")