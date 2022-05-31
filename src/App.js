import React, { useEffect, useRef, useState } from "react";
import ExibirTodos from "./componentes/ExibirTodos";

const App = () =>{
  const inputTarefa = useRef(null);
  const [tarefas, setTarefas] = useState([""])

  useEffect(() => {
    console.log("oi")
  })

  const AdicionarTarefa = () => {
    return tarefas.push(inputTarefa.current.value)
  }

  return (
    <div className="App">
      <input name="Tarefa" ref={inputTarefa}/>
      <button onClick={AdicionarTarefa}>Adicionar Tarefa</button>

      <div>
        <ExibirTodos tarefas={tarefas}/>
      </div>
    </div>
  );
}

export default App;
