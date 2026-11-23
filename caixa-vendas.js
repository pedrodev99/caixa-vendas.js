const clienteFiel = false
const nomeCliente = 'Jonas'
const produto = 'Teclado gamer rgb'
const precoProduto = 120
const qnt = 3
let totalVenda = precoProduto * qnt
if (totalVenda > 300 && clienteFiel){
    totalVenda = (totalVenda * 0.9)
}
let status = 'pago'
console.log('Cliente:', nomeCliente)
console.log('Produto:', produto)
console.log('Total:', totalVenda)
console.log('Status:', status)
