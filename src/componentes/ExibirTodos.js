import React from 'react'

const ExibirTodos = (props  ) => {
    return (
        <div>
            {
                props.tarefas.length > 0
                    ?
                    props.tarefas.map((item, i) => {
                        console.log(props.tarefas)
                        return [
                            <ul key={i}>
                                <li>{i}</li>
                            </ul>
                        ]
                    })
                    :
                    "Sem Dados"
            }
        </div>
    )
}

export default ExibirTodos