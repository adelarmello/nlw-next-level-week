import React from 'react';
import { FiArrowLeft, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
const Sucess = () => {
    return (
    <div id="page-register">
        <div className="content">
            <header>
            <img src={logo} alt="Ecoleta" />
            </header>

            <main>
                <h1>Cadastro efetuado com sucesso!</h1>
                
                <Link to="/">
                    <span><FiArrowLeft /></span><strong>Voltar para o início</strong>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link to="/create-point">
                    <span><FiLogIn /></span><strong>Cadastrar novo ponto de coleta</strong>
                </Link>

            </main>

        </div>
    </div>
)
}
export default Sucess;