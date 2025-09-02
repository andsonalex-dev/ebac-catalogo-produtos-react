
import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import { addProduto } from "../utils/storage";

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
`;

const Button = styled.button`
  background-color: #0d6efd;
  color: #fff;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: #0b5ed7;
  }
`;

export default function AdicionarProduto() {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = { ...formData, id: `${formData.nome}-${Date.now()}` };
    addProduto(novoProduto);
    alert('Produto adicionado!');
    setFormData({ nome: "", preco: "", descricao: "" });
  };

  return (
    <>
      <Banner title="Adicionar Produto" />
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="preco"
            placeholder="Preço"
            value={formData.preco}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="descricao"
            placeholder="Descrição"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
          <Button type="submit">Adicionar</Button>
        </form>
      </FormWrapper>
    </>
  );
}
