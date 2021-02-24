import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default class RegisterUser extends Component {

constructor(props) {
  super(props);

  this.state = {
    name: "",
    hability: "",
    height: "",
    age: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  })
}

handleSubmit(event) {
  event.preventDefault();
  console.log("state enviado -> " + this.state);
  this.registerUser();
}

registerUser = async () => {

  let headers = new Headers();
  headers.append('Content-type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS ');
  // const response = await api.post('/users', this.state, {
  //   headers: {
  //     "Content-type":"Applications/json"
  //   }
  // })
  const response = await api.post('/users', this.state, headers)
  .then(response => {
    console.log(response);
    alert("Personagem cadastrado com sucesso!");
  })
  .catch(error => {
    console.log(error);
    alert("Erro ao cadastrar personagem");
  });
};

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

          <h2>Cadastro de personagens</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Digite o nome de um personagem:
                <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
              </label>
            </div>
            <div>
              <label>Digite o nome de uma habilidade:
                <input name="hability" type="text" value={this.state.hability} onChange={this.handleInputChange} />
              </label>
            </div>
            <div>
              <label>Digite uma altura:
                <input name="height" type="text" value={this.state.height} onChange={this.handleInputChange} />
              </label>
            </div>
            <div>
              <label>Digite uma idade:
                <input name="age" type="text" value={this.state.age} onChange={this.handleInputChange} />
              </label>
            </div>

            <input type="submit" value="Cadastrar" />
          </form>
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
