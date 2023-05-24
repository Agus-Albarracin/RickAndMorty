import { useState } from 'react';
import style from './Search.module.css';

export default function SearchBar(props) {

const [characters, setCharacters] = useState('');
const handleChange = e => {
   const {value} = e.target;
   setCharacters(value);
}

   return (
      <div className={style.container}>

         
         <input className={style.inputCont} 
                
                type='search' 
                name='search'
                  id='search'
                  onChange={handleChange}
         />
           
         <button className={style.buttonCont} onClick={() => props.onSearch(characters)}>Agregar</button>
      </div>
      
   );
}
