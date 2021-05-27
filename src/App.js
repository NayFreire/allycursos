
import {useState} from 'react'

import './App.css'
import AddCourse from './components/AddCourse'


function App() {
  const [courses, setCourses] = useState(
    [
      {
        id: 0,
        name: 'Curso 0',
        duration: 3,
        startDate: '02-06-2021',
        endDate: '02-06-2021'
      },
      {
          id: 1,
          name: 'Curso 1',
          duration: 6,
          startDate: '02-06-2021',
          endDate: '02-06-2021'
      },
      {
          id: 2,
          name: 'Curso 2',
          duration: 3,
          startDate: '02-06-2021',
          endDate: '02-06-2021'
      },
      {
          id: 3,
          name: 'Curso 3',
          duration: 3,
          startDate: '02-06-2021',
          endDate: '02-06-2021'
      }
    ]
  )

  const addCourse = ({newCourse}) => {    
    let id = courses.length
    console.log(id)
    console.log(newCourse)
    let courseWithId = {id, ...newCourse}
    setCourses([...courses, courseWithId])
    console.log({courseWithId})
    // console.log(course)
  }

  return(
    <AddCourse addCourse={addCourse} courses={courses}/>
  )  
}

export default App;
