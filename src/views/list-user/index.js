import React , { Component } from 'react';
import api from '../../services/api.js';

import { BrowserRouter, Link } from 'react-router-dom';
import './style.css';

export default class ListUser extends Component {

  state = {
    users: [],
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get("/users");
    console.log(response);
    this.setState({users: response.data['users']});
  }

  render() {

    const { users } = this.state;

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

        <h2>Lista de personagens</h2>
        <p>Quantidade de personagens {users.length}</p>
        <div className="users-list">
        {users.map(user => (
          <article key={user.id} id="user-article">
            <p>
              Código {user.id} <br />
              <strong>Nome {user.name}</strong> <br />
              Habilidade {user.hability} <br />
              Altura {user.height} <br />
              Idade {user.age}
            </p>
            <Link to={`/detail-user/${user.id}`}>Detalhes do personagem</Link>
          </article>
        ))}
        </div>
      </div>
    );
  }
}
