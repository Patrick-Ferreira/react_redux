import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';
import './App.css';

function App() {

  const[inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");


  const frutas = useSelector((state)=>state.frutasReducer.frutas);
  const titulo = useSelector((state)=>state.tituloReducer.titulo);
  const dispatch = useDispatch(); 

function adicionarFruta(event) {
  event.preventDefault();
  const objFruta = {
    nome: inputFrutas
  }
  dispatch({type: "ADICIONAR", value: objFruta});
  
}

function alterarTitulo(event) {
  setInputTitulo(event.target.value);
  dispatch({type: "ALTERAR", value: event.target.value});
  
}


  return (
    <div className="formulario">
      <Menu/>
      <form>
      <label>Titulo</label>
      <input placeholder="Digite o titulo" 
      value={inputTitulo} 
      onChange={alterarTitulo}/>
      </form>

      <h1>{titulo}</h1>
      <form onSubmit={adicionarFruta}>
        <input placeholder="Digite uma fruta..." 
        value={inputFrutas}
        onChange={(event)=>setInputFrutas(event.target.value)} />

        <button>Enviar</button>
      </form>
      {frutas.map((fruta, index)=>{
        return(
          <li key={index}>{fruta.nome}</li>
        )
      })}
    </div>
  );
}

export default App;
