
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
        startDate: '2021-06-02',
        endDate: '2021-06-02',
        desc: 'Eu magna ad id duis minim do magna magna laboris cillum velit. Deserunt cupidatat incididunt sunt'
      },
      {
          id: 1,
          name: 'Curso 1',
          duration: 6,
          startDate: '2021-06-02',
          endDate: '2021-06-02',
          desc: 'Eu magna ad id duis minim do magna magna laboris cillum velit. Deserunt cupidatat incididunt sunt'
      },
      {
          id: 2,
          name: 'Curso 2',
          duration: 3,
          startDate: '2021-06-02',
          endDate: '2021-06-02',
          desc: 'Eu magna ad id duis minim do magna magna laboris cillum velit. Deserunt cupidatat incididunt sunt'
      },
      {
          id: 3,
          name: 'Curso 3',
          duration: 3,
          startDate: '2021-06-02',
          endDate: '2021-06-02',
          desc: 'Eu magna ad id duis minim do magna magna laboris cillum velit. Deserunt cupidatat incididunt sunt'
      }
    ]
  )

  const addCourse = ({newCourse, searchResult}) => {    
    let id = searchResult.length
    // console.log(id)
    // console.log(newCourse)
    let courseWithId = {id, ...newCourse}
    setCourses([...searchResult, courseWithId])
    // console.log({courseWithId})
    // console.log({courses})
  }

  return(
    <AddCourse addCourse={addCourse} courses={courses}/>
  )  
}

export default App;
