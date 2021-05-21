import logo from './images/allylogotransp.png'
import {useState} from 'react'

import './App.css';

let data = [
  {
    id: 0,
    name: 'Curso 0',
    duration: 3,
    dateStart: '02/06/2021',
    dateEnd: '02/06/2021'
  },
  {
    id: 1,
    name: 'Curso 1',
    duration: 6,
    dateStart: '02/06/2021',
    dateEnd: '02/06/2021'
  },
  {
    id: 2,
    name: 'Curso 2',
    duration: 3,
    dateStart: '02/06/2021',
    dateEnd: '02/06/2021'
  },
  {
    id: 3,
    name: 'Curso 3',
    duration: 3,
    dateStart: '02/06/2021',
    dateEnd: '02/06/2021'
  }
]

function App() {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [duration, setDuration] = useState('')

  const addCouse = () => {    
    let newCourse = {
      id: Math.random(),
      name: name,
      duration: duration,
      dateStart: startDate,
      dateEnd: endDate
    }
    data.push(newCourse)
    console.log('novo curso', newCourse)
    console.log(data)
  }

  return (
    <div className="container">
      <div className="main">
        <div id='divLogo'>
          <img src = {logo} alt='logo'/>
        </div>
        <form className='info' action=''>
          <div className='divInput'>
            <label htmlFor="" className='labelTxt'>Nome</label>
            <input type="text" className='inputs' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='divInput'>
            <label htmlFor="" className='labelTxt'>Data de Início</label>
            <input type="date" name="dateStart" id="dateStart" className='inputsDate' onChange={(e) => setStartDate(e.target.value)}/>
          </div>
          <div className='divInput'>
            <label htmlFor="" className='labelTxt'>Data de Fim</label>
            <input type="date" name="dateEnd" id="dateEnd" className='inputsDate' onChange={(e) => setEndDate(e.target.value)}/>
          </div>
          <div className='divInput'>
            <label htmlFor="" className='labelTxt'>Duração (Semanas)</label>
            <input type="text" className='inputs' onChange={(e) => {setDuration(e.target.value)}}/>
          </div>
          <div id="btnDivAdd">
            <input id='btnAdd' type="submit" value="Cadastrar" onClick={() => addCouse()}/>
          </div>
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
