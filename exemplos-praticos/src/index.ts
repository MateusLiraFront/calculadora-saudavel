// (1) ARRAYS E OBJETOS

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

// (2) SIMULANDO UMA PROMISE

// Essa função simula uma busca de produto.
function simularBuscaProduto(id: number) {
  return new Promise<(typeof produtos)[number] | null>((resolve) => {
    setTimeout(() => {
      // Procura um produto pelo ID
      const produtoEncontrado = produtos.find((produto) => produto.id === id);

      // Se encontrar o produto, retorna ele.  Se não encontrar, retorna null.
      resolve(produtoEncontrado ?? null);
    }, 1000);
  });
}

// (3) FUNÇÃO ASSÍNCRONA

// A função async permite usar o await.
// O await espera a Promise terminar.
async function buscarProduto(id: number) {
  const produtoEncontrado = await simularBuscaProduto(id);

  return produtoEncontrado;
}

// (4) FUNÇÃO PRINCIPAL

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
  } else {
    console.log("Produto não encontrado.");
  }

  console.log("Busca finalizada!");
}

// (5) EXECUTANDO O PROGRAMA

// Chamando a função principal
main().catch((erro) => {
  console.log("Ocorreu um erro:", erro);
});


// O programa chama a função buscarProduto(), que faz uma busca pelo ID informado.
// A busca simula uma espera de 1 segundo usando uma Promise. 
// Depois disso, se o produto for encontrado, suas informações são mostradas no console. 
// Caso contrário, é informado que o produto não foi encontrado.