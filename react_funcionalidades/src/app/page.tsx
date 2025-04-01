"use client";
import { CustomButton } from "@/components/customButton";
import { FormEvent } from "react";
import { useState } from "react";

export default function Page() {

  const [showSecret, setShowSecret] = useState(false)

  const botaoShowHide = () => {
    setShowSecret(!showSecret);
  }

  const [count, setCount] = useState(0);

  const cliqueButao = () => {
    alert("funcionou")
  }

  const clique1 = () => alert("clicou1")
  const clique2 = () => alert("clicou2")
  const clique3 = () => alert("clicou3")

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  alert("mandando....")
}

  const  eventoDeClique = () => {
    setCount(count + 1)
  }

  const [nameInput, setNameInput] = useState('')

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <button onClick={cliqueButao} className="p-3 bg-blue-700 text-white rounded-md">Clique Aqui</button>
      <CustomButton label="Clique aqui1" onClick={clique1}/> 
      <CustomButton label="Clique aqui2" onClick={clique2}/>
      <CustomButton label="Clique aqui3" onClick={clique3}/>

      <h3 className="text-5xl mb-3 pt-3">Form de login</h3>
      
      <form onSubmit={handleFormSubmit}>
        <input type="text"/>
        <input type="submit" value="enviar"/>
      </form>

      <p>{count}</p>
      <CustomButton label="+1" onClick={eventoDeClique}/>

      <CustomButton label={showSecret ? "Ocultar" : "Mostrar"} onClick={botaoShowHide}/>
      {showSecret &&
      <div className="p-3 bg-blue-300 rounded-md mt-3">Area secreta</div>
      }

      <input 
        type="text"
        className="border border-black p-3 text-xl text-black rounded"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
    </div>
  );
}
