import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import AdicionarProduto from "./pages/AdicionarProduto";
import Carrinho from "./pages/Carrinho";

export default function App() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">        
            <Link className="navbar-brand" to="/">Minha Loja</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Catálogo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/adicionar">Adicionar Produto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/carrinho">Carrinho</Link>
                </li>
              </ul>
            </div>
        </nav>
      </header>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/adicionar" element={<AdicionarProduto />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
