const numero = +prompt('Digite um número')
if(numero % 2 == 0) {
    console.log('É divisivel por 2')
}
if(numero % 3 == 0){
    console.log('É divisivel por 3')
} 

if(numero % 2 == 0 || numero % 3 == 0){
    console.log('É divisivel')
}