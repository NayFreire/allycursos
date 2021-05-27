import logo from '../images/allylogotransp.png'
import {useState} from 'react'

import '../App.css'

const AddCourse = ({addCourse}) => {
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [duration, setDuration] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Preencha o nome completo')
        }
        if(!startDate){
            alert('Preencha a data de início')
        }
        if(!endDate){
            alert('Preencha a data de fim')
        }
        if(!duration){
            alert('Preencha a duração')
        }

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
                        <input type='text' className='inputs' 
                        onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Data Início</label>
                        <input type='date' className='inputs' 
                        onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Data Fim</label>
                        <input type='date' className='inputs' 
                        onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Duração</label>
                        <input type='number' className='inputs' 
                        onChange={(e) => {setDuration(e.target.value)}}/>
                    </div>
                    <div id="btnDivAdd">
                        <input id='btnAdd' type="submit" value="Cadastrar" />
                    </div>
                </form>
            
            </div>
        </div>
    );
}

export default AddCourse

