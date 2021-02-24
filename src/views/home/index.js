import React , { Component } from 'react';

import "./style.css";
import { BrowserRouter, Link } from 'react-router-dom';

export default class Home extends Component {

  logout = async () =>{
    localStorage.removeItem('user');
    this.props.history.push('/');
  }

  render() {

    const user = localStorage.getItem('user');
    console.log(user);

    if (user === 'true'){
    return (
        <div>
        <nav id="main-nav">
          <ul>
              <li><Link className="menu" to={`/home`}>Home</Link></li>
              <li><Link className="menu" to={`/register-user`}>Cadastro</Link></li>
              <li><Link className="menu" to={`/list-user`}>Consulta</Link></li>
              <li><Link className="menu" to={`/about`}>Sobre</Link></li>
          </ul>
        </nav>
          <button onClick={this.logout}>
          Deslogar
          </button>
          <h2>Home Page</h2>
          <p>Bem-vindo ao site oficial de personagens de Naruto, aqui você pode cadastrar personagens, modificar as informações e excluí-los.</p>
        </div>
      );
    } else {
      return (
        <div>
          <nav id='main-nav'>
            <ul>
              <li><Link className="menu" to={'/login'}>Voltar para o login.</Link></li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
