import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProdutoCard from "../components/ProdutoCard";
import Banner from "../components/Banner";

import { produtosMock } from "../data/produtos";
import { getProdutos, setProdutos } from "../utils/storage";

const CatalogoWrapper = styled.div`
  padding: 2rem;
`;

const ProdutoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`;

const LoadingWrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Busca produtos do localStorage, se não houver, usa o mock e salva
      let produtos = getProdutos(produtosMock);
      if (!localStorage.getItem('produtos')) {
        setProdutos(produtosMock);
      }
      setProdutos(produtos);
      setCarregando(false);
    }, 1500);
  }, []);

  return (
    <CatalogoWrapper>
      <Banner title="Catálogo de Produtos" />

      {carregando ? (
        <LoadingWrapper>
          <div className="spinner-border text-primary"></div>
          <p>Carregando produtos...</p>
        </LoadingWrapper>
      ) : (
        <ProdutoGrid>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} {...produto} />
          ))}
        </ProdutoGrid>
      )}
    </CatalogoWrapper>
  );
}
