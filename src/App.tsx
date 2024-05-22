
import './App.css'
import { useState} from 'react';
import { Formulario } from './components/formulario/Formulario'

export interface Filme{
  nome: string
  anoDeLancamento: string
}

function App() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  function adicionarFilme(filme: Filme){
    setFilmes([...filmes, filme])
  }
  return (
    <div>
      <Formulario aoSubmeter={adicionarFilme}/>
    </div>
  )
}

export default App
