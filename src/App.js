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
          <input type="text" ref={inputElemento} className="inputTodo" placeholder="Adicione uma tarefa aqui"/>
          <button onClick={AdicionarTarefa} className="btnInserir">Adicionar</button>
        </div>
        <div>
          {
            tarefas.length > 0
              ?
              tarefas.map((tarefa, i) => {
                return [
                  <div key={i} className="card-tarefa">
                    <span className="texto-tarefa">{tarefa}</span>
                    <button onClick={() => RemoverTarefa(i)} className="btn-concluir">Concluir</button>
                  </div>
                ]
              })
              :
              <div className="feedback">Insira uma tarefa! =D</div>
          }
        </div>
      </div>


    </div>
  );

}

export default App;
