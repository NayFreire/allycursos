import logo from '../images/allylogotransp.png'
import {useState} from 'react'

import '../App.css'
import Courses from '../components/Courses.js'

const AddCourse = ({addCourse, courses}) => {
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [duration, setDuration] = useState(0)

    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()
    let minDate = `2001-01-20`
    if(month<10){
        minDate = `${year}-0${month+1}-${day}`
    }
    else{
        minDate = `${year}-${month+1}-${day}`
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const newCourse = {
            name: name,
            startDate: startDate,
            endDate: endDate,
            duration: duration
        }
        
        addCourse({newCourse})

        setName('')
        setStartDate('')
        setEndDate('')
        setDuration(0)
    }

    return (
        <div className="container">
            <div className="main">
                <div id='divLogo'>
                <img src={logo} alt='logo'/>
                </div>
                <h2 id='title'>Cadastro de Cursos</h2>
                <form className='info' action='' onSubmit={onSubmit}>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Nome</label>
                        <input type='text' className='inputs' required
                        onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Data Início</label>
                        <input type='date' className='inputs' min={minDate} required
                        onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Data Fim</label>
                        <input type='date' className='inputs' required
                        onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Duração</label>
                        <input type='number' className='inputs' required
                        onChange={(e) => {setDuration(e.target.value)}}/>
                    </div>
                    <div id="btnDivAdd">
                        <input id='btnAdd' type="submit" value="Cadastrar" />
                    </div>
                </form>    
                
                <Courses courses={courses}/>        
            </div>
            
        </div>
    );
}

export default AddCourse

