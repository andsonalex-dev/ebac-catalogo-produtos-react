const PRODUTOS_KEY = 'produtos';
const CARRINHO_KEY = 'carrinho';

export function getProdutos(defaults = []) {
  const data = localStorage.getItem(PRODUTOS_KEY);
  if (data) return JSON.parse(data);
  localStorage.setItem(PRODUTOS_KEY, JSON.stringify(defaults));
  return defaults;
}

export function addProduto(produto) {
  const produtos = getProdutos();
  produtos.push(produto);
  localStorage.setItem(PRODUTOS_KEY, JSON.stringify(produtos));
}

export function setProdutos(produtos) {
  localStorage.setItem(PRODUTOS_KEY, JSON.stringify(produtos));
}

export function getCarrinho() {
  const data = localStorage.getItem(CARRINHO_KEY);
  return data ? JSON.parse(data) : [];
}

export function addCarrinho(produto) {
  const carrinho = getCarrinho();
  carrinho.push(produto);
  localStorage.setItem(CARRINHO_KEY, JSON.stringify(carrinho));
}

export function clearCarrinho() {
  localStorage.removeItem(CARRINHO_KEY);
}
