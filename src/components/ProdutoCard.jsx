
import PropTypes from 'prop-types';
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";
import { addCarrinho, getCarrinho } from "../utils/storage";
import { useState, useEffect } from 'react';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  background: #fff;
`;

const CardBody = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid #dee2e6;
`;

const CardTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
`;

const CardText = styled.p`
  margin: 0.5rem 0 0;
  color: #6c757d;
`;

const Price = styled.strong`
  color: #0d6efd; /* Azul padrão bootstrap */
`;


const AddCartButton = styled.button`
  background-color: ${props => props.adicionado ? '#6c757d' : '#198754'};
  color: white;
  border: none;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.adicionado ? '#6c757d' : '#166e45ff'};
    transform: scale(1.05);
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ProdutoCard = ({ nome, preco, descricao, id, ...rest }) => {
  const [adicionado, setAdicionado] = useState(false);

  useEffect(() => {
    const carrinho = getCarrinho();
    if (carrinho.some(item => item.id === id)) {
      setAdicionado(true);
    }
  }, [id]);

  const handleAddCarrinho = () => {
    addCarrinho({ nome, preco, descricao, id, ...rest });
    setAdicionado(true);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle>{nome}</CardTitle>
        <CardText>{descricao}</CardText>
      </CardBody>
      <CardFooter>
        <Price>R$ {preco}</Price>
        <AddCartButton
          onClick={handleAddCarrinho}
          adicionado={adicionado}
          title={adicionado ? 'Produto já adicionado' : 'Adicionar ao carrinho'}
          disabled={adicionado}
        >
          {adicionado ? 'Adicionado' : <><i className="bi bi-cart-fill"></i></>}
        </AddCartButton>
      </CardFooter>
    </Card>
  );
};

ProdutoCard.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  descricao: PropTypes.string.isRequired,
};

export default ProdutoCard;
