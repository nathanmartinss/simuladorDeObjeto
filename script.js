class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularTotal() {
    return this.preco * this.quantidade;
  }
}

let meuProduto = new Produto("Camiseta", 29.9, 5);
exibirProduto(meuProduto);

function exibirProduto(produto) {
  let areaSimulador = document.getElementById("area-simulador");
  let novoElemento = document.createElement("p");
  novoElemento.textContent = `Produto: ${produto.nome}, Preço: R$${produto.preco}, Quantidade: ${produto.quantidade}`;
  areaSimulador.appendChild(novoElemento);
}

function criarProduto() {
  let nome = prompt("Digite o nome do produto:");
  let preco = parseFloat(prompt("Digite o preço do produto:"));
  let quantidade = parseInt(prompt("Digite a quantidade do produto:"));

  if (nome && !isNaN(preco) && !isNaN(quantidade)) {
    let novoProduto = new Produto(nome, preco, quantidade);
    exibirProduto(novoProduto);
  } else {
    alert(
      "Dados inválidos. Certifique-se de inserir um nome válido, um preço numérico e uma quantidade numérica."
    );
  }
}

document
  .getElementById("btnCriarProduto")
  .addEventListener("click", criarProduto);
