import './App.css';
import React, {useState} from 'react'


function App() {
  
  const [demanda,setDemanda]=useState('Computador')
  const [servicos_computador,setServicos_computador]=useState('servicos_computador')
  const list= ["1","2","3","4","5","6","7"]
  return (
   
    
    <div className="App">
      <p>FORMULARIO AUXILIADOR DE CHAMADOS</p>
      <p> DEMANDA:</p>
      <select value ={demanda} onChange={(e)=>setDemanda(e.target.value)}>
        <option value = "computador">Impressora</option>
        <option value = "gabinete">Impressora</option>
        <option value = "impressora">Gabinete</option>
        <option value = "monitor">Monitor</option>
        <option value = "internet">Gabinete</option>
        <option value = "suporte ao usuário">Gabinete</option>
        <option value = "instalação de programa">Gabinete</option>
      </select>
      <p>SERVIÇO:</p>  
      <select value ={servicos_computador} onChange={(e)=>setDemanda(e.target.value)}>
      <option value = "--">Formatação</option>
        <option value = "Formatação">Formatação</option>
        <option value = "Alteração de resolução"></option>
        <option value = "Atualização de driver">Monitor</option>
        <option value = "">Gabinete</option>
        <option value = "suporte ao usuário">Gabinete</option>
        <option value = "instalação de programa">Gabinete</option>
      </select>
      <p/>
      <select value = {list}> </select>
      <p>
      <button> Finalizar Formulário </button>
      </p>
    </div>
  );
}

export default App;
