"use client"
import { FormEvent, useState } from "react"

export default function tarefas ()  {
    
    type ListadeTarefas = {
        checked: boolean,
        conteudo: string
    }

    const [tarefa, setTarefa] = useState<string>("")
    const[listaTarefas, setTarefas] = useState<ListadeTarefas[]>([])

    const handleButtonAdd = (e: FormEvent) => {
        e.preventDefault();
        if (tarefa.trim() === "") return;
        setTarefas([...listaTarefas, {checked: false, conteudo: tarefa}])
        setTarefa("");
    }

    const handleButtonDelete = () => {

    }
    return (
        <div className="w-screen h-screen bg-black flex flex-col text-white items-center">
            <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
            <div className="w-108 h-18 border-2 border-gray-100 flex bg-gray-700">
                <form className="flex w-full " onSubmit={handleButtonAdd}>
                <input
                    className="bg-white font-semibold text-gray-800 mt-3 mb-3 ml-5 rounded flex-3"
                    type="text"
                    placeholder=" O que deseja fazer?"
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}    
                />
                <input 
                    className="flex-1" 
                    type="submit" 
                    value="adcionar"
                />
                
               </form>
              
            </div>
              <ul className="list-disc">
                {listaTarefas.map((item, key) =>
               <li key={key}>{item.conteudo} <button className="hover:underline" onClick={handleButtonDelete}>- [deletar]</button></li> )}                   
                </ul>
        </div>
    )
}