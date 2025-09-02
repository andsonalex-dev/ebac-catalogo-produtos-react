
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import { getCarrinho, clearCarrinho } from "../utils/storage";

const CarrinhoWrapper = styled.div`
  padding: 2rem;
`;

const ButtonCleanCart = styled.button`
  background-color: #f06000ff;
  color: #fff;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: #d72a0bff;
  }
`;

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    setCarrinho(getCarrinho());
  }, []);

  const handleLimpar = () => {
    clearCarrinho();
    setCarrinho([]);
  };

  return (
    <CarrinhoWrapper>
      <Banner title="Carrinho de Compras" />
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="list-group list-group-numbered mb-4">
            {carrinho.map((item, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.nome}</div>
                   R$ {item.preco} <br />
                  <span style={{ color: '#6c757d' }}>{item.descricao}</span>
                </div>
              </li>
            ))}
          </ul>
          <ButtonCleanCart onClick={handleLimpar}>Limpar carrinho</ButtonCleanCart>
        </>
      )}
    </CarrinhoWrapper>
  );
}

    