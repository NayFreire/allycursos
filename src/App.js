
import {useState} from 'react'

import './App.css'
import AddCourse from './components/AddCourse'


function App() {
  const [course, setCourse] = useState(
    [
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
  )

  const addCourse = ({newCourse}) => {    
    let id = course.length
    console.log(id)
    console.log(newCourse)
    let courseWithId = {id, ...newCourse}
    setCourse([...course, courseWithId])
    console.log({courseWithId})
    // console.log(course)
  }

  return(
    <AddCourse addCourse={addCourse}/>
  )  
}

export default App;
