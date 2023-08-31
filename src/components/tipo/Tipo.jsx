import "./Tipo.css";
import React from "react";
import { useState } from "react";

function Tipo() {
  const [id, setId] = useState(null); // Definir null como valor inicial
  const [descricao, setDescricao] = useState('');

  function alterar(e) {
    setDescricao(e.target.value);
  }

  function salvar(e){
    e.preventDefault();
    const item = [descricao]
    console.log(item)
  }

  function editar(item){
    setId(item.id)
    setDescricao(item.descricao)
  }

  function deletar(item){
    console.log(item)
  }

  const dados = [
    {
      id: 1,
      descricao: "Calçados",
      created_at: "2023-08-31 00:00:00",
      updated_at: "2023-08-31 00:00:00",
    },
    {
      id: 2,
      descricao: "Tenis",
      created_at: "2023-08-31 00:00:00",
      updated_at: "2023-08-31 00:00:00",
    },
  ];

  return (
    <div>
      <div className="col-6">
        <h1>Tipo</h1>
        <div className="d-flex justify-content-center">
          <form onSubmit={salvar}>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição:
              </label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                placeholder="Exemplo: Calçados"
                value={descricao}
                onChange={alterar}
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-success">
                Salvar
              </button>
              <button type="reset" className="btn btn-warning">
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1>Lista</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição</th>
                <th scope="col">Criado</th>
                <th scope="col">Atualizado</th>
                <th scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.descricao}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td>
                  <div className="btn-group" role="group">
                    <button onClick={ () => editar(item)} className="btn btn-primary">Editar</button>
                    <button onClick={ () => deletar(item)} className="btn btn-danger">Excluir</button>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tipo;
