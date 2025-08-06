import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import { produtosMock } from '../data/produtos';

const Catalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos(produtosMock);
      setCarregando(false);
    }, 1500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = { ...formData, id: `${formData.nome}-${Date.now()}` };
    setProdutos((prev) => [...prev, novoProduto]);
    setFormData({ nome: '', preco: '', descricao: ''});
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw' }}>
      <div className="container mt-4 align-self-center">
        <h1 className="mb-4">Catálogo de Produtos</h1>

        <form onSubmit={handleSubmit} className="mb-5">
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                name="nome"
                className="form-control"
                placeholder="Nome do Produto"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                name="preco"
                className="form-control"
                placeholder="Preço"
                value={formData.preco}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="descricao"
                className="form-control"
                placeholder="Descrição"
                value={formData.descricao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 d-grid d-md-block">
              <button type="submit" className="btn btn-primary mt-2">Adicionar Produto</button>
            </div>
          </div>
        {carregando ? (
          <div className="text-center">
            <output className="spinner-border text-primary"></output>
            <p className="mt-2">Carregando produtos...</p>
          </div>
        ) : (
          <div className="row">
            {produtos.map((produto) => (
              <div className="col-md-4 mb-4" key={produto.id}>
                <ProdutoCard {...produto} />
              </div>
            ))}
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default Catalogo;
