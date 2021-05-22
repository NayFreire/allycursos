import '../../src/App.css';

const Input = ({nameLabel, type, setFunction}) => {  
    return(
        <div className='divInput'>
            <label htmlFor="" className='labelTxt'>{nameLabel}</label>
            <input type={type} className='inputs' 
            onChange={(e) => {setFunction(e.target.value)}}/>
        </div>
    )    
}

export default Input