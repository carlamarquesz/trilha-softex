// Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem 
//conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

// Observações:
// - buscar saldo deve retornar o valor atual do saldo;
// - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
// - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// - o número da conta deve retornar o número da conta.

class Banco{
    constructor(conta, titular, saldo, tipoConta, agencia) {
        this.conta = conta;
        this.titular = titular;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }
    buscarSaldo() {
        return `O titular ${this.titular} tem R$ ${this.saldo} disponível na conta!`
    }
    depositar(valor) {
        this.saldo += valor
        return `Deposito de R$ ${valor}`
    }
    sacar(valor) {
        this.saldo -= valor 
        return `Saque de R$ ${valor}`
    }
    numeroConta() {
        return `Número da conta: ${this.conta}`
    }
}
 
const banco = new Banco(123456, 'Carla', 1500, 'Conta Corrente', 5126); 
//Operações da conta
console.log(banco.buscarSaldo())
console.log(banco.depositar(200))
console.log(banco.buscarSaldo()) 
console.log(banco.sacar(100))
console.log(banco.buscarSaldo())  