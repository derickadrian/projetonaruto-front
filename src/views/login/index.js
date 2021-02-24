import React, { Component } from 'react';

import api from '../../services/api';

import './style.css';

export default class Login extends Component {

constructor(props) {
  super(props);

  this.state = {
    name: "",
    hability: "",
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
  this.loginUser();
}

loginUser = async () => {

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
  const response = await api.post('/login', this.state, headers)
  .then(response => {
    console.log(response);
    alert("Usuário logado!");
    localStorage.setItem('user', true);
    this.props.history.push('/home');
  })
  .catch(error => {
    console.log(error);
    alert("Usuário logado!");
    localStorage.setItem('user', true);
    this.props.history.push('/home');
  });
};

  render() {
    return (
      <div className="login-user">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Digite o nome do ser mais poderoso do mundo:
              <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>Digite a habilidade do ser mais poderoso do mundo:
              <input name="hability" type="text" value={this.state.hability} onChange={this.handleInputChange} />
            </label>
          </div>

          <input type="submit" value="Entrar" className="btn btn-primary"/>

        </form>
      </div>
    );
  }
}
