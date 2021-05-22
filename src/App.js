import logo from './images/allylogotransp.png'
import {useState} from 'react'

import './App.css'
import './components/AddCourse.js'
import InputDiv from './components/Input.js'

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
const addCourse = ({props}) => {    
    let newCourse = {
        id: Math.random(),
        name: props.name,
        duration: props.duration,
        dateStart: props.startDate,
        dateEnd: props.endDate
    }
    console.log(newCourse)    
  }

function App() {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [duration, setDuration] = useState('')

  
// console.log(data)
  return (
    <div className="container">
      <div className="main">
        <div id='divLogo'>
          <img src={logo} alt='logo'/>
        </div>
        <h2 id='title'>Cadastro de Cursos</h2>
        <form className='info' action=''>
          <InputDiv nameLabel='Nome' type='text' setFunction={setName}/>
          <InputDiv nameLabel='Data de Início' type='date' setFunction={setStartDate}/>
          <InputDiv nameLabel='Data de Fim' type='date' setFunction={setEndDate} />
          <InputDiv nameLabel='Duração' type='number' setFunction={setDuration} />
          <div id="btnDivAdd">
            <input id='btnAdd' type="submit" value="Cadastrar" 
            onClick={addCourse(name, duration, startDate, endDate)}/>
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
