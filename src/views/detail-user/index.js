import React, { Component } from 'react';
import api from '../../services/api.js';

// import { Link } from 'react-router-dom'

import './style.css';

export default class DetailUser extends Component {

  state = {
    id: "",
    name: "",
    hability: "",
    height: "",
    age: "",
  };

  constructor(props) {
    super(props);

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
    this.updateUser();
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/users/${id}`);
    console.log(`id: ${id}`);
    this.setState(
      {
        id: id, name: response.data.name,
        hability: response.data.hability,
        height: response.data.height,
        age: response.data.age
      }
    );
  }

  deleteUser = async () => {
    const { id } = this.state;
    const response = await api.delete(`/users/${id}`);
    console.log(response);
    if(response.status === 200) {
      alert("Personagem excluído com sucesso!");
      this.props.history.push(`/list-user`);
    }
  }

  updateUser = async () => {
    const response = await api.put(`/users`, this.state)
    .then(response => {
      alert("Personagem alterado com sucesso!");
      this.props.history.push(`/list-user`);
    })
    .catch(error => {
      alert("Erro ao alterar o personagem");
    })
  }

  render() {

    const { id, name, hability, height, age } = this.state;

    return (
      <div className="detail-user">
        <h2>Detalhe do personagens</h2>
        <h2>{name}</h2>
        <p>
        Código: {id} <br />
        habilidade: {hability} <br />
        Altura: {height} <br />
        Idade: {age} <br />
        </p>

        <button onClick={() => this.deleteUser()}>
          Excluir personagem
        </button>

        <h2>Alterar dados do personagem</h2>
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

          <input type="submit" value="Alterar" />

        </form>

        <button onClick={() => this.deleteUser()}>
          Excluir personagem
        </button>

      </div>
    );
  }
}
