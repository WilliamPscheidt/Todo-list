import React, { useEffect, useRef, useState } from "react";

import './Estilo/Global.css'

const App = () => {
  const [tarefas, setTarefas] = useState([])
  const inputElemento = useRef(null)

  const RemoverTarefa = (index) => {
    let ResultadoRemocao = tarefas
    ResultadoRemocao.splice(index, 1)
    setTarefas([...ResultadoRemocao])
  }

  const AdicionarTarefa = () => {
    setTarefas([...tarefas, inputElemento.current.value])
  }

  return (
    <div className="App">
      <div className="card-container">
        <div className="menu-todo">
          <input type="text" ref={inputElemento} className="inputTodo" value="Insira a tarefa aqui" />
          <button onClick={AdicionarTarefa} className="btnInserir">Adicionar</button>
        </div>
        <div>
          {
            tarefas.length > 0
              ?
              tarefas.map((tarefa, i) => {
                return [
                  <div key={i}>
                    <h1>{i}.{tarefa}</h1>
                    <button onClick={() => RemoverTarefa(i)}>Remover</button>
                  </div>
                ]
              })
              :
              "Sem Dados"
          }
        </div>
      </div>


    </div>
  );

}

export default App;
