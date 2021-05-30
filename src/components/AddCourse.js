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
    const [searchResult, setSearchResult] = useState([])

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
        
        addCourse({newCourse})
    }

    const searchingCourse = ({course, searchWord}) => {
        let courseFound = []
        console.log('In searchingCourse: ', searchWord)
        if(searchWord.toLowerCase() === course.name.toLowerCase()){
            console.log('ACHOU')
            courses.length = 0
            courseFound.push(course)
            setSearchResult(courseFound)
        }    
    }

    const filtering = (searchWord) => {
        console.log('filtering: ', searchWord)

        let resultSearch = courses.filter((c) => {
            return c.name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
        })
        
        console.log({resultSearch})
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
                    filtering(e.target.value)
                    // courses.forEach(c => {
                        // if(e.target.value === c.name.toLowerCase() || e.target.value === c.name.toLowerCase()){
                            // console.log('ACHOU')
                            // courses.length = 0
                            // courses.push(c)
                            // console.log(courses)
                            // console.log('search: ', searchWord)
                            // setSearching(true)
                            // console.log('lista')
                            // console.log(c)
                            // searchingCourse(c, searchWord)
                            
                        // }
                    // });
                }}/>
                {searching ? <p>Procurando...</p> : <Courses courses={courses}/>}
                        
            </div>
            
        </div>
    );
}

export default AddCourse

