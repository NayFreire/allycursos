import logo from '../images/allylogotransp.png'
import {useState} from 'react'

import '../App.css'
import Courses from '../components/Courses.js'

const AddCourse = ({addCourse, courses}) => {
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [duration, setDuration] = useState(0)
    const [desc, setDesc] = useState('')

    const [searching, setSearching] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    const [searchResult, setSearchResult] = useState(courses)
    // const debouncedTerm = useDeb

    const today = new Date()
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    
    let minDate

    //Caso o dia for menor que 10, é necessário adicionar um zero na frente
    if(day<10){
        minDate = `${year}-0${day}-${day}`
    }
    else{
        minDate = `${year}-${day}-${day}`
    }

    //Caso o mês for menor que 10, é necessário adicionar um zero na frente
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
            duration: duration,
            desc: desc
        }
        
        addCourse({newCourse, searchResult})
    }

    const searchingCourse = ({courses, searchWord}) => {
        let courseFound = []
        courses.forEach(c => {
            if(searchWord.toLowerCase() === c.name.toLowerCase()){
                console.log('ACHOU')
                courses.length = 0
                courseFound.push(c)
                setSearchResult(courseFound)
            }
        });
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
                        <input type='date' className='inputs' min={minDate} required
                        onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Duração</label>
                        <input type='number' className='inputs' required
                        onChange={(e) => {setDuration(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Decrição</label>
                        <textarea className='inputs' required onChange={(e) => {setDesc(e.target.value)}}/>                        
                    </div>
                    <div id="btnDivAdd">
                        <input id='btnAdd' type="submit" value="Cadastrar" />
                    </div>
                </form>    
                
                <h2>Lista de Cursos</h2>
                <input type='search' className='inputs' 
                onChange={(e) => {
                    setSearchWord(e.target.value)
                    setSearching(true)
                    searchingCourse(searchResult, searchWord)                    
                }}/>
    
                <Courses courses={searchResult}/> 
                        
            </div>
            
        </div>
    );
}

export default AddCourse

