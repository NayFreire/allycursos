import logo from '../images/allylogotransp.png'
import {useState} from 'react'

import '../App.css'
import Courses from '../components/Courses.js'


const AddCourse = ({addCourse, courses}) => {
    /* ATRIBUTOS DA TABELA */
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [duration, setDuration] = useState(0)
    const [desc, setDesc] = useState('')

    /* ATRIBUTOS DE BUSCA */
    const [searching, setSearching] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    const [searchResult, setSearchResult] = useState([])

    /* LIDANDO COM AS DATAS */
    const today = new Date()
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    
    let minDateStart

    //Caso o dia for menor que 10, é necessário adicionar um zero na frente
    if(day<10){
        minDateStart = `${year}-0${day}-${day}`
    }
    else{
        minDateStart = `${year}-${day}-${day}`
    }

    //Caso o mês for menor que 10, é necessário adicionar um zero na frente
    if(month<10){
        minDateStart = `${year}-0${month+1}-${day}`
    }
    else{
        minDateStart = `${year}-${month+1}-${day}`
    }

    console.log(minDateStart)

    /* AO ENVIAR UM NOVO CURSO */
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

    /* BUSCANDO UM CURSO */

    const filtering = (searchWord) => {

        let resultSearch = courses.filter((c) => {
            return c.name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
        })
        
        setSearchResult(resultSearch)
    }

    return (
        <div className="container">
            <div className="main">
                <div id='divLogo'>
                <img src={logo} alt='logo'/>
                </div>
                <h2 className='titles'>Cadastro de Cursos</h2>
                <form className='info' action='' onSubmit={onSubmit}>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Nome</label>
                        <input type='text' className='inputs' required
                        onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Data Início</label>
                        <input type='date' className='inputsDate' min={minDateStart} required
                        onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Data Fim</label>
                        <input type='date' className='inputsDate' min={startDate} required
                        onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="" className='labelTxt'>Duração</label>
                        <input type='number' className='inputs' min={1} required
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
                
                <div id='listTable'>
                    <h2 className='titles'>Lista de Cursos</h2>
                    <input type='search' id='inputSearch' placeholder='Informe o nome do curso'
                    onChange={(e) => {
                        //Quando um curso é buscado, é preciso...
                        setSearchWord(e.target.value) //pegar o nome do curso para a busca
                        filtering(e.target.value) //filtrar esse nome dentro do array de cursos
                        setSearching(true) //indicar que uma busca está acontecendo
                    }}/>

                    <div id='table'>
                        {
                            searching ? //Se uma busca está acontecendo, é preciso analisar se foi obtido algum resultado...
                            (searchResult.length == 0 ?  //Se não foi obtido um resultado...
                                <p className='labelTxt'>Não foi encontrado</p> //é mostrada a mensagem
                                : 
                                <Courses courses={searchResult}/>) //Se é obtido resultado, o mesmo é mostrado
                            : 
                            (<Courses courses={courses}/>) //Caso não esteja ocorrendo uma busca, são mostrados todos os cursos cadastrados
                        }   
                    </div>  
                </div>                       
            </div>
            
        </div>
    );
}

export default AddCourse

