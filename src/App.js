import React, { useEffect, useRef, useState } from "react";

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
        <input type="text" ref={inputElemento} />
        <button onClick={AdicionarTarefa}>adicionar</button>

      <div>
        {
          tarefas.length > 0
            ?
            tarefas.map((tarefa, i) => {
              return [
                <div key={i}>
                    <h1>{i}.{tarefa}</h1>
                    <button onClick={()=> RemoverTarefa(i)}>Remover</button>
                </div>
              ]
            })
            :
            "Sem Dados"
        }
      </div>

    </div>
  );

}

export default App;
