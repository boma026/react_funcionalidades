"use client";
import { CustomButton } from "@/components/customButton";
import { ExampleAreas } from "@/components/ExampleAreas";
import { Person } from "@/types/Person";
import { FormEvent } from "react";
import { useState } from "react";

export default function Page() {

  const [showSecret, setShowSecret] = useState(false)

  const botaoShowHide = () => {
    setShowSecret(!showSecret);
  }

  const [count, setCount] = useState(0);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  alert("mandando....")
}

  const  eventoDeClique = () => {
    setCount(count + 1)
  }

  const [count2, setCount2] = useState(0)

  const handlebutton = () => {
    setCount2(count2 + 2)
    setCount2(c => c + 2)
  }

  const [nameInput, setNameInput] = useState('')

  const [fullName, setFullName] = useState<Person>({ name: '', lastName: ''})

   const cliqueButao = () => {
    alert("funcionou")
  }

  const cliqueButaoParametro = (mensagem: string) =>
    alert(mensagem);

  const clique1 = () => alert("clicou1")
  const clique2 = () => alert("clicou2")
  const clique3 = () => alert("clicou3")

  return (
    <div>
      <ExampleAreas>
        <p>Maneira mais comum de criar um evento de clique:</p>
        <button onClick={cliqueButao} className="p-3 bg-blue-700 text-white rounded-md"> 1) Clique Aqui</button>
        <p>Caso queira passar com algum parâmetro</p>
        <button onClick={() => cliqueButaoParametro("funcionou com parametro")} className="p-3 bg-blue-700 text-white rounded-md"> 2) Clique Aqui</button>
      </ExampleAreas>

      <ExampleAreas>
        <p>3)Passando o evento via props do componente customButton</p>
        <CustomButton label="Clique aqui1" onClick={clique1}/> 
        <CustomButton label="Clique aqui2" onClick={clique2}/>
        <CustomButton label="Clique aqui3" onClick={clique3}/>
      </ExampleAreas>
      
      {/*
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

      <button onClick={handlebutton} className="bg-blue-700 text-white p-3 rounded-md"></button>
      <p>{count2}</p>

      <input
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3 "
        value={fullName.name}
        onChange={e => setFullName({...fullName, name: e.target.value})}/>
      <input
        type="text"
        placeholder="Sobreome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setFullName({...fullName, lastName: e.target.value})}/>

      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>  */}
    </div>
  )
}
