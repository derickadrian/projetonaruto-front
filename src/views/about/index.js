import React , { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./style.css";

export default class About extends Component {

  render() {
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

        <h2>Sobre</h2>
        <p>Esse é o site mais seguro para cadastrar seus personagens de Naruto, ninguém pode colocar personagens que não existem ou alterar suas habilidas, alturas, etc... (Nem você pode alterar, a não ser que seja o Cury, daí teu poder é ilimitado.)</p>
      </div>
    );
  }
}
