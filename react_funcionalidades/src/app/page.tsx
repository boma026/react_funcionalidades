"use client";
import { CustomButton } from "@/components/customButton";
import { ExampleAreas } from "@/components/ExampleAreas";
import { Person } from "@/types/Person";
import { FormEvent } from "react";
import { useState } from "react";

export default function Page() {
  
  //1)
   const cliqueButao = () => {
    alert("funcionou")
  }

  const cliqueButaoParametro = (mensagem: string) =>
    alert(mensagem);

  const clique1 = () => alert("clicou1")
  const clique2 = () => alert("clicou2")
  const clique3 = () => alert("clicou3")

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  alert("mandando....")
}
  //4)
  const[showSecret, setShowSecret] = useState(false);

  const handleButtonSecret = () => {
    setShowSecret(!showSecret)
  }

  //5)
  const[nameInput, setNameInput] = useState<string>();

  //6)
  const [fullName, setFullName] = useState({
    name: "",
    lastName: ""
  })



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
      

      <ExampleAreas>
      <h3 className="text-5xl mb-3 pt-3">4) Form de login</h3>
      
      <form onSubmit={handleFormSubmit}>
        <input type="text" className="bg-white"/>
        <input type="submit" value="enviar"/>
      </form>
      </ExampleAreas>
      
      <ExampleAreas>
        <div className="flex flex-col justify-center items-center">
          {showSecret &&
            <>
              <CustomButton label={showSecret ? "Ocultar área secreta" : "Mostrar área secreta"} onClick={handleButtonSecret}/>
              <div className="p-3 bg-blue-300 rounded-md mt-3">Área secreta</div>
            </>
          }
        </div>
      </ExampleAreas>

      <ExampleAreas>    
      <input 
        type="text"
        className="border border-black p-3 text-xl text-black rounded"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />

      <p className="font-bold "> Seu nome é {nameInput}</p>
      </ExampleAreas> 

      <ExampleAreas>
        <input 
          type="text"
          className="border border-black p-3 text-2xl text-black rounded"
          placeholder="Nome"
          value={fullName.name}
          onChange={(e) => setFullName({
            ...fullName, name:e.target.value
          })}
        />

        <input 
          type="text"
          className="border border-black p-3 text-2xl text-black rounded"
          placeholder="Sobrenome"
          value={fullName.lastName}
          onChange={(e) => setFullName({
            ...fullName, lastName: e.target.value
          })}
        />

      <p className="font-bold "> Meu nome completo é: {fullName.name} {fullName.lastName}</p>
      </ExampleAreas>
         
    </div>
  )
}
