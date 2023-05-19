import './App.css';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/navBar';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters from './data.jsx';
import './App.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 


   const [characters, setCharacters] = useState([]);



   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {

               if (data.name){  

                    let rptido =  characters.find((char) => char.id === data.id);

                    if(rptido)  {  alert('El personaje está invocado!'); } 
         
                    else {  setCharacters((oldChars) => [...oldChars, data]); }
         
               }    
                    else {   window.alert('¡No hay personajes con este ID!'); }


      });
   }

   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id ));
      // console.log(onClose)
  };



   return (
      <div className='App'>
         <div>
         <NavBar onSearch={onSearch}/>
         </div>
         <div>
         <Cards characters={characters} onClose={onClose}/>
         </div>
         
         
      </div>
   );
}

export default App;
