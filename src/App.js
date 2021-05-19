import logo from './images/allylogotransp.png'
import InputData from './components/inputData'

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main">
        <img src = {logo} alt='logo' style={{justifySelf: 'center'}}/>
        <form className='info' action=''>
          <div className='divInput'>
            <label htmlFor="">Nome</label>
            <input type="text" className='inputs' />
          </div>
          <div className='divInput'>
            <label htmlFor="">Data de Início</label>
            <InputData/>
          </div>
          <div className='divInput'>
            <label htmlFor="">Data de Fim</label>
            <InputData/>
          </div>
          <div className='divInput'>
            <label htmlFor="">Duração (Semanas)</label>
            <input type="text" className='inputs' />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      
        <div className="list">
          <label htmlFor="">Lista de cursos</label>
          <table>
            <tr>
              <th>Nome</th>
              <th>Duração</th>
              <th>Data de Início</th>
              <th>Data de Término</th>
            </tr>

            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
