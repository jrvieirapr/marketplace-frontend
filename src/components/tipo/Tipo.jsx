import "./Tipo.css";
import React from "react";
import { useState } from "react";

function Tipo() {
  const [id, setId] = useState();
  const [descricao, setDescricao] = useState();

  function alterar(e) {
    setDescricao(e.target.value);
  }

  function editar(item){
    setId(item.id)
    setDescricao(item.descricao)
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
          <form action="">
            <div className="mb-3">
              <label for="descricao" className="form-label">
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
            <div className="mb-3">
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
          <table class="table">
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
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-danger">Excluir</button>
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
