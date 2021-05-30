import {useState} from 'react'

import './App.css'
import AddCourse from './components/AddCourse'


function App() {
  /* DADOS QUE SERÃO MOSTRADOS NA TABELA DE CURSOS */
  const [courses, setCourses] = useState(
    [
      {
        id: 0,
        name: 'Curso 0',
        duration: 3,
        startDate: '2021-06-02',
        endDate: '2021-06-02'
      },
      {
          id: 1,
          name: 'Curso 1',
          duration: 6,
          startDate: '2021-06-02',
          endDate: '2021-06-02'
      },
      {
          id: 2,
          name: 'Curso 2',
          duration: 3,
          startDate: '2021-06-02',
          endDate: '2021-06-02'
      },
      {
          id: 3,
          name: 'Curso 3',
          duration: 3,
          startDate: '2021-06-02',
          endDate: '2021-06-02'
      }
    ]
  )
  /* FUNÇÃO PARA A INSERÇÃO DE NOVOS CURSOS */
  const addCourse = ({newCourse}) => {    
    let id = courses.length
    let courseWithId = {id, ...newCourse}
    setCourses([...courses, courseWithId])
  }

  /* CHAMANDO O COMPONENTE DE ADIÇÃO DE CURSO */
  return(
    <AddCourse addCourse={addCourse} courses={courses}/>
  )  
}

export default App;
