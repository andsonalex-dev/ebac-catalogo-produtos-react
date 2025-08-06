import PropTypes from 'prop-types';

const ProdutoCard = ({ nome, preco, descricao }) => {
  return (
    <div className="card h-100 mt-4">
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">{descricao}</p>
      </div>
      <div className="card-footer">
        <strong className="text-primary">R$ {preco}</strong>
      </div>
    </div>
  );
};

ProdutoCard.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  descricao: PropTypes.string.isRequired,
};

export default ProdutoCard;
