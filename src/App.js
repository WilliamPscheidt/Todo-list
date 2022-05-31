import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [valor, setValor] = useState("");
  const [tarefas, setTarefas] = useState([])

  return (
    <div className="App">
      <form
        onSubmit={event => {
          event.preventDefault();
          setTarefas([...tarefas, valor]);
        }}>
        <input
          type="text"
          value={valor}
          onChange={event => setValor(event.target.value)}
        />
        <button type="submit">adicionar</button>
      </form>

      {
        tarefas.length > 0
          ?
          tarefas.map((tarefa, i) => {
            return [
              <div key={i}>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    tarefas.splice(i, i);
                    setTarefas(tarefas);
                  }}
                >
                  <h1>{tarefa}</h1>
                  <button type="submit">Remover</button>
                </form>

              </div>
            ]
          })
          :
          "Sem Dados"
      }
    </div>
  );

}

export default App;
