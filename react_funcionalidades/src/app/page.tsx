"use client";
import { CustomButton } from "@/components/customButton";
import { FormEvent } from "react";

export default function Page() {

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

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={cliqueButao} className="p-3 bg-blue-700 text-white rounded-md">Clique Aqui</button>
      <CustomButton label="Clique aqui1" onClick={clique1}/> 
      <CustomButton label="Clique aqui2" onClick={clique2}/>
      <CustomButton label="Clique aqui3" onClick={clique3}/>

      <h3 className="text-5xl mb-3">Form de login</h3>
      <form onSubmit={handleFormSubmit}>
        <input type="text"></input>
        <input type="submit" value="enviar"/>
      </form>
    </div>
  );
}
