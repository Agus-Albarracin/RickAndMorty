import './App.css';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/navBar';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters from './data.jsx';
import Favorites from './components/Favorites/Favs';
import './App.jsx';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/about';
import Detail from './components/Detail/detail';
import Login from './components/Login/login';
import Error from './components/Error/error';

function App() {


const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'agus38b@gmail.com';
const PASSWORD = 'cualquierpassword';



   const [characters, setCharacters] = useState([]);

   const location = useLocation();

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout() {
       
         setAccess(false);
         navigate('/');
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {

               if (data.name){  

                    let rptido =  characters.find((char) => char.id === data.id);

                    if(rptido)  {  alert('El personaje está invocado!'); } 
         
                    else {  setCharacters((oldChars) => [...oldChars, data]); }
               }
      })

      .catch(() => { window.alert('¡No hay personajes con este ID!') })

   }



   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id ));
      // console.log(onClose)
  };



   return (
      <div className='App'>
         {
            location.pathname === "/" ? null :  
            <div>
            <NavBar  logout={logout} onSearch={onSearch}/>
            </div>
         }
        
         <Routes>
                <Route path="/" element={<Login login={login}/>}></Route>
                <Route path="/home"
                 element={
                          <div>
                              <Cards onClose={onClose} characters={characters} />
                          </div>
                }> </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route> 
                <Route path="/favorites" element={<Favorites />}></Route>
                  <Route path="*" element={<Error />}> </Route>
              
                
         </Routes>
        
         
         
      </div>
   );
}

export default App;
