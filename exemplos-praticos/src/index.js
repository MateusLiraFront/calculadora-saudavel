"use strict";
// ============================================
// (1) ARRAYS E OBJETOS
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
// Array com alguns produtos
const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 3500,
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 100,
    },
];
// Pegando somente os nomes dos produtos
const nomesDosProdutos = produtos.map((produto) => produto.nome);
console.log("Produtos:", produtos);
console.log("Nomes dos produtos:", nomesDosProdutos);
// ============================================
// (2) SIMULANDO UMA PROMISE
// ============================================
// Essa função simula uma busca de produto.
// O setTimeout serve para simular um tempo de espera.
function simularBuscaProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Procura um produto pelo ID
            const produtoEncontrado = produtos.find((produto) => produto.id === id);
            // Se encontrar o produto, retorna ele.
            // Se não encontrar, retorna null.
            resolve(produtoEncontrado ?? null);
        }, 1000);
    });
}
// ============================================
// (3) FUNÇÃO ASSÍNCRONA
// ============================================
// A função async permite usar o await.
// O await espera a Promise terminar.
async function buscarProduto(id) {
    const produtoEncontrado = await simularBuscaProduto(id);
    return produtoEncontrado;
}
// ============================================
// (4) FUNÇÃO PRINCIPAL
// ============================================
async function main() {
    console.log("Iniciando busca...");
    // Aqui esperamos o resultado da busca
    const produto = await buscarProduto(1);
    // Verifica se encontrou o produto
    if (produto) {
        console.log("Produto encontrado:");
        console.log("ID:", produto.id);
        console.log("Nome:", produto.nome);
        console.log("Preço: R$", produto.preco);
    }
    else {
        console.log("Produto não encontrado.");
    }
    console.log("Busca finalizada!");
}
// ============================================
// (5) EXECUTANDO O PROGRAMA
// ============================================
// Chamando a função principal
main().catch((erro) => {
    console.log("Ocorreu um erro:", erro);
});
//# sourceMappingURL=index.js.map