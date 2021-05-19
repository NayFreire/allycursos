import logo from './images/allylogotransp.png'
import InputData from './components/inputData'

import './App.css';

function App() {
  return (
    <div className="container">
      <img src = {logo} alt='logo'/>
      <br />
      <form className='info' action=''>
        <div className='divInput'>
          <label htmlFor="">Nome</label>
          <input type="text" className='inputs' />
        </div>
        <div className='divInput'>
          <label htmlFor="">Data de Início</label>
          <InputData class='inputs'/>
        </div>
        <div className='divInput'>
          <label htmlFor="">Data de Fim</label>
          <InputData classN='inputs'/>
        </div>
        <div className='divInput'>
          <label htmlFor="">Duração (Semanas)</label>
          <input type="text" className='inputs' />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
