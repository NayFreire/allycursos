import logo from './images/allylogotransp.png'
import {useState} from 'react'

import './App.css';

function App() {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [duration, setDuration] = useState('')

  return (
    <div className="container">
      <div className="main">
        <img src = {logo} alt='logo' style={{justifySelf: 'center'}}/>
        <form className='info' action=''>
          <div className='divInput'>
            <label htmlFor="">Nome</label>
            <input type="text" className='inputs' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='divInput'>
            <label htmlFor="">Data de Início</label>
            <input type="date" name="dateStart" id="dateStart" className='inputs' onChange={(e) => setStartDate(e.target.value)}/>
          </div>
          <div className='divInput'>
            <label htmlFor="">Data de Fim</label>
            <input type="date" name="dateEnd" id="dateEnd" className='inputs' onChange={(e) => setEndDate(e.target.value)}/>
          </div>
          <div className='divInput'>
            <label htmlFor="">Duração (Semanas)</label>
            <input type="text" className='inputs' onChange={(e) => {setDuration(e.target.value)}}/>
          </div>
          <button type="submit" onClick={() => {
            console.log('nome: ', name)
          }}>Cadastrar</button>
        </form>
      
        {/* <div className="list">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
